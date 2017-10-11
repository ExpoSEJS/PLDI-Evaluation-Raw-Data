- debug@2.6.8 node_modules/method-override/node_modules/debug
/root/Targets/baleina.js
└─┬ baleina.js@1.3.4 
  └─┬ loopback-explorer@1.8.0
    └─┬ express@3.21.2
      └─┬ connect@2.30.2
        └── method-override@2.3.10 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/baleina.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 84% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","join","charCodeAt","lastIndexOf","RegExp","apply","pop","splice","create","reverse","sort","abs","stringify","parseFloat","getFunction","isNative","isEval","getFileName","getLineNumber","getColumnNumber","getFunctionName","isConstructor","isToplevel","getMethodName","getTypeName","toString"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0504 took 18.9095s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (9:4) on program // Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: strong-globalize
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

'use strict';

var Globalize = require('../deps/globalize');
var assert = require('assert');
var debug = require('debug')('strong-globalize');
var fs = require('fs');
var helper = require('./helper');
var osLocale = require('os-locale');
var MapCache = require('lodash/_MapCache');
var md5 = require('md5');
var memoize = require('lodash/memoize');
var pathUtil = require('path');
var translate = require('./translate');
var util = require('util');
var YAML = require('yamljs');

exports.setDefaultLanguage = setDefaultLanguage;
exports.setRootDir = helper.setRootDir;
exports.setPersistentLogging = setPersistentLogging;

exports.formatCurrency = exports.c = formatCurrency;
exports.formatDate = exports.d = formatDate;
exports.formatNumber = exports.n = formatNumber;
exports.formatMessage = exports.t = exports.m = formatMessage;
exports.formatJson = formatJson;

exports.rfc5424 = rfc5424;
exports.Error = myError;

exports.packMessage = packMessage;
exports.loadGlobalize = loadGlobalize;
exports.consoleEnabled = consoleEnabled;
exports.logPersistent = logPersistent;

/**
 * StrongLoop Defaults
 */

var SL_DEFAULT_DATETIME = {datetime: 'medium'};
var SL_DEFAULT_NUMBER = {round: 'floor'};
var SL_DEFAULT_CURRENCY = {style: 'name'};

var OS_LANG = osLanguage();
var MY_APP_LANG = process.env.STRONGLOOP_GLOBALIZE_APP_LANGUAGE;
MY_APP_LANG = helper.isSupportedLanguage(MY_APP_LANG) ? MY_APP_LANG : null;

function osLanguage() {
  var locale = osLocale.sync();
  var lang = locale.substring(0, 2);
  if (helper.isSupportedLanguage(lang)) return lang;
  if (lang === 'zh') {
    var region = locale.substring(3);
    if (region === 'CN') return 'zh-Hans';
    if (region === 'TW') return 'zh-Hant';
    if (region === 'Hans') return 'zh-Hans';
    if (region === 'Hant') return 'zh-Hant';
  }
}

/**
 * setDefaultLanguage
 *
 * @param {string} (optional, default: `'en'`) Language ID.
 *     It tries to use OS language, then falls back to 'en'
 */
function setDefaultLanguage(lang) {
  lang = helper.isSupportedLanguage(lang) ? lang : null;
  lang = lang || MY_APP_LANG || OS_LANG || helper.ENGLISH;
  loadGlobalize(lang);
  if (lang !== helper.ENGLISH) {
    loadGlobalize(helper.ENGLISH);
  }
  global.STRONGLOOP_GLB.locale(lang);
  global.STRONGLOOP_GLB.DEFAULT_LANG = lang;
  return lang;
}

/**
 * Globalize.formatMessage wrapper returns a string.
 *
 * @param {string} path The message key
 * @param {object} variables List of placeholder key and content value pair.
 * @param {string} variables.<phXXX> The placeholder key.
 * @param {string} variables.<string> The content value.
 *     If the system locale is undefined, falls back to 'en'
 */
function formatMessage(path, variables, lang) {
  assert(path);
  if (!global.STRONGLOOP_GLB) setDefaultLanguage();
  var message = path;
  if (helper.hashKeys(path)) {
    if (!global.STRONGLOOP_GLB.getHash) {
      global.STRONGLOOP_GLB.getHash = memoize(md5);
    }
    path = global.STRONGLOOP_GLB.getHash(path);
  }
  lang = lang || global.STRONGLOOP_GLB.DEFAULT_LANG;
  debug('~~~ lang = %s %s %j %s', lang, path, variables, __filename);
  var trailer = helper.getTrailerAfterDot(path);
  if (trailer === 'json' || trailer === 'yml' || trailer === 'yaml') {
    var fullPath = pathUtil.join(helper.getRootDir(), path);
    return formatJson(fullPath, JSON.parse(variables), lang);
  }
  function formatMsgInline(lang) {
    var g = global.STRONGLOOP_GLB.bundles[lang];
    if (!global.STRONGLOOP_GLB.formatters) {
      global.STRONGLOOP_GLB.formatters = new MapCache();
    }
    var allFormatters = global.STRONGLOOP_GLB.formatters;
    var langFormatters;
    if (allFormatters.has(lang)) {
      langFormatters = allFormatters.get(lang);
    } else {
      langFormatters = new MapCache();
      allFormatters.set(lang, langFormatters);
    }
    if (langFormatters.has(path))
      return langFormatters.get(path)(variables || {});
    var format = g.messageFormatter(path);
    langFormatters.set(path, format);
    return format(variables || {});
  }
  try {
    message = formatMsgInline(lang);
  } catch (e) {
    if (lang === helper.ENGLISH) {
      message = sanitizeMsg(message, variables);
      debug(
        '*** %s not found for %s. Fall back to: "%s" ***  %s',
        path, lang, message, e);
    } else {
      debug(
        '*** %s for %s not localized. Fall back to English. ***  %s',
      path, lang, e);
      try {
        message = formatMsgInline(helper.ENGLISH);
      } catch (e) {
        message = sanitizeMsg(message, variables);
        debug(
          '*** %s not found for %s. Fall back to: "%s" ***  %s',
          path, lang, message, e);
      };
    }
  };
  if (global.STRONGLOOP_GLB.PSEUDO_LOC_PREAMBLE) {
    message = global.STRONGLOOP_GLB.PSEUDO_LOC_PREAMBLE + message;
  }
  return message;
}

function formatJson(fullPath, variables, lang) {
  assert(fullPath === pathUtil.resolve(helper.getRootDir(), fullPath),
    '*** full path is required to format json/yaml file: ' + fullPath);
  var fileType = helper.getTrailerAfterDot(fullPath);
  try {
    var contentStr = fs.readFileSync(fullPath, 'utf8');
    var jsonData = null;
    if (fileType === 'json') jsonData = JSON.parse(contentStr);
    if (fileType === 'yml' || fileType === 'yaml')
      jsonData = YAML.parse(contentStr);
  } catch (_e) {
    return '*** read failure: ' + fullPath;
  }
  var msges = helper.scanJson(variables, jsonData);
  var transMsges = [];
  msges.forEach(function(msg) {
    var transMsg = formatMessage(msg, null, lang);
    transMsges.push(transMsg);
  });
  helper.replaceJson(variables, jsonData, transMsges);
  return jsonData;
}

function sanitizeMsg(message, variables) {
  message = message
    .replace(/}}/g, '')
    .replace(/{{/g, '');
  if (typeof variables === 'string' ||
      (Array.isArray(variables) && variables.length > 0)) {
    var sanitizedMsg = message
      .replace(/%[sdj]/g, '%s');
    message = util.format.apply(util, [sanitizedMsg].concat(variables));
  }
  return message;
}

function packMessage(args, fn, withOriginalMsg, lang) {
  var path = args[0];
  var percentInKey = helper.percent(path);
  var txtWithTwoOrMoreArgs =
    (helper.getTrailerAfterDot(path) === 'txt' && args.length > 2);
  // If it comes from *.txt, there are no percent in the path,
  // but there can be one or more %s in the message value.
  var variables = percentInKey ? helper.mapArgs(path, args) :
    txtWithTwoOrMoreArgs ? helper.repackArgs(args, 1) : args[1];
  var message = formatMessage(path, variables, lang);
  if (withOriginalMsg) message = {
    language: lang,
    message: message,
    orig: path,
    vars: variables,
  };
  if (fn) return fn(message);
  return message;
}

/* RFC 5424 Syslog Message Severities
 * 0 Emergency: system is unusable
 * 1 Alert: action must be taken immediately
 * 2 Critical: critical conditions
 * 3 Error: error conditions
 * 4 Warning: warning conditions
 * 5 Notice: normal but significant condition
 * 6 Informational: informational messages
 * 7 Debug: debug-level messages
 */

function rfc5424(level, args, console, lang) {
  return packMessage(args, function(msg) {
    logPersistent(level, msg);
    if (consoleEnabled()) console(msg.message);
  }, true, lang);
}

function myError() {
  var msg = packMessage(arguments, null, true);
  logPersistent('error', msg);
  return Error(msg.message);
}

// RFC 5424 Syslog Message Severities
exports.emergency = emergency;
exports.alert = alert;
exports.critical = critical;
exports.error = error;
exports.warning = warning;
exports.notice = notice;
exports.informational = informational;
exports.debug = myDebug;

exports.warn = warn;
exports.info = info;
exports.log = log;

exports.help = help;
exports.data = data;
exports.prompt = prompt;
exports.verbose = verbose;
exports.input = input;
exports.silly = silly;

function emergency() {
  return rfc5424('emergency', arguments, console.error);
}
function alert() { return rfc5424('alert', arguments, console.error); }
function critical() { return rfc5424('critical', arguments, console.error); }
function error() { return rfc5424('error', arguments, console.error); }
function warning() { return rfc5424('warning', arguments, console.error); }
function notice() { return rfc5424('notice', arguments, console.log); }
function informational() {
  return rfc5424('informational', arguments, console.log);
}
function myDebug() { return rfc5424('debug', arguments, console.log); }

function warn() { return rfc5424('warn', arguments, console.error); }
function info() { return rfc5424('info', arguments, console.log); }
function log() { return rfc5424('log', arguments, console.log); }

function help() { return rfc5424('help', arguments, console.log); }
function data() { return rfc5424('data', arguments, console.log); }
function prompt() { return rfc5424('prompt', arguments, console.log); }
function verbose() { return rfc5424('verbose', arguments, console.log); }
function input() { return rfc5424('input', arguments, console.log); }
function silly() { return rfc5424('silly', arguments, console.log); }

/**
 * Globalize.formatNumber wrapper returns a string.
 *
 * @param {value} integer or float
 * @param {object} The options (optional); if null, use the StrongLoop default.
 *     Strongly recommended to set NO options and let strong-globalize use
 *     the StrongLoop default for consistency across StrongLoop products.
 *     See https://www.npmjs.com/package/globalize#number-module
 */
function formatNumber(value, options, lang) {
  assert(value);
  if (!global.STRONGLOOP_GLB) setDefaultLanguage(lang);
  lang = lang || global.STRONGLOOP_GLB.DEFAULT_LANG;
  options = options || SL_DEFAULT_NUMBER;
  var G = global.STRONGLOOP_GLB.bundles[lang];
  var msg = null;
  try {
    msg = G.formatNumber(value, options);
  } catch (e) {
    msg = value.toString();
    debug('*** formatNumber error: value:%s', msg);
  }
  return msg;
}

/**
 * Globalize.formatDate wrapper returns a string.
 *
 * @param {Date object} such as new Date()
 * @param {object} The options (optional); if null, use the StrongLoop default.
 *     Strongly recommended to set NO options and let strong-globalize use
 *     the StrongLoop default for consistency across StrongLoop products.
 *     See https://www.npmjs.com/package/globalize#date-module
 */
function formatDate(value, options, lang) {
  assert(value);
  if (!global.STRONGLOOP_GLB) setDefaultLanguage(lang);
  lang = lang || global.STRONGLOOP_GLB.DEFAULT_LANG;
  options = options || SL_DEFAULT_DATETIME;
  var G = global.STRONGLOOP_GLB.bundles[lang];
  var msg = null;
  try {
    msg = G.formatDate(value, options);
  } catch (e) {
    msg = value.toString();
    debug('*** formatDate error: value:%s', msg);
  }
  return msg;
}

/**
 * Globalize.formatCurrency wrapper returns a string.
 *
 * @param {value} integer or float
 * @param {string} three-letter currency symbol, ISO 4217 Currency Code
 * @param {object} The options (optional); if null, use the StrongLoop default.
 *     Strongly recommended to set NO options and let strong-globalize use
 *     the StrongLoop default for consistency across StrongLoop products.
 *     See https://www.npmjs.com/package/globalize#curency-module
 */
function formatCurrency(value, currencySymbol, options, lang) {
  assert(value && currencySymbol);
  if (!global.STRONGLOOP_GLB) setDefaultLanguage(lang);
  lang = lang || global.STRONGLOOP_GLB.DEFAULT_LANG;
  options = options || SL_DEFAULT_CURRENCY;
  var G = global.STRONGLOOP_GLB.bundles[lang];
  var msg = null;
  try {
    msg = G.formatCurrency(value, currencySymbol, options);
  } catch (e) {
    msg = currencySymbol.toString() + value.toString();
    debug('*** formatCurrency error: value:%s, currencySymbol:%s',
      value, currencySymbol);
  }
  return msg;
}

function loadGlobalize(lang, enumerateNodeModules) {
  assert(helper.isSupportedLanguage(lang), 'Not supported: ' + lang);
  if (!global.STRONGLOOP_GLB) {
    var versionSG = helper.getPackageVersion(
      pathUtil.join(__dirname, '..'));
    var versionG = helper.getPackageVersion(
      pathUtil.join(__dirname, '..', 'node_modules', 'globalize'));
    global.STRONGLOOP_GLB = {
      versionSG: versionSG,
      versionG: versionG,
      bundles: {},
      formatters: new MapCache(),
      getHash: memoize(md5),
      load: Globalize.load,
      locale: Globalize.locale,
      loadMessages: Globalize.loadMessages,
      DEFAULT_LANG: helper.ENGLISH,
      LOG_FN: null,
      DISABLE_CONSOLE: false,
      MASTER_ROOT_DIR: helper.getRootDir(),
      MSG_RES_LOADED: [],
      AUTO_MSG_LOADING: helper.AML_DEFAULT,
      PSEUDO_LOC_PREAMBLE:
        process.env.STRONG_GLOBALIZE_PSEUDO_LOC_PREAMBLE || '',
    };
    loadCldr(helper.ENGLISH);
    global.STRONGLOOP_GLB.bundles[helper.ENGLISH] =
      new Globalize(helper.ENGLISH);
    global.STRONGLOOP_GLB.locale(helper.ENGLISH);
    translate.loadMsgFromFile(
      helper.ENGLISH, helper.getRootDir(), enumerateNodeModules);
  }
  if (!(lang in global.STRONGLOOP_GLB.bundles)) {
    loadCldr(lang);
    global.STRONGLOOP_GLB.bundles[lang] = new Globalize(lang);
    global.STRONGLOOP_GLB.locale(lang);
    translate.loadMsgFromFile(lang, helper.getRootDir(), enumerateNodeModules);
  }
  return global.STRONGLOOP_GLB.bundles[lang];
}

function loadCldr(lang) {
  assert(global.STRONGLOOP_GLB && (!global.STRONGLOOP_GLB.bundles ||
    !global.STRONGLOOP_GLB.bundles[lang]), 'CLDR already loaded for ' + lang);
  var cldrDir = pathUtil.join(__dirname, '..', 'cldr');
  helper.enumerateFilesSync(cldrDir, null, ['json'], false, false,
    function(content, filePath) {
      var cldr = null;
      try {
        cldr = JSON.parse(content);
      } catch (e) {
        throw new Error('*** CLDR read error on ' + process.platform);
      }
      var cldrMain = {main: {}};
      cldrMain.main[lang] = cldr.main[lang];
      global.STRONGLOOP_GLB.load(cldrMain);
      if (lang === helper.ENGLISH) {
        var cldrSupplemental = {supplemental: cldr.supplemental};
        global.STRONGLOOP_GLB.load(cldrSupplemental);
      }
    });
}

/**
 *
 * Persistent logging
 *
 */

// var syslogLevels = { // RFC5424
//   emerg: 0,
//   alert: 1,
//   crit: 2,
//   error: 3,
//   warning: 4,
//   notice: 5,
//   info: 6,
//   debug: 7,
// };

// var npmLevels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   verbose: 3,
//   debug: 4,
//   silly: 5,
// };

function consoleEnabled() {
  if (!global.STRONGLOOP_GLB) setDefaultLanguage();
  return !global.STRONGLOOP_GLB.DISABLE_CONSOLE;
}

/**
 *
 */
function setPersistentLogging(logFn, disableConsole) {
  assert(logFn);
  assert(typeof logFn === 'function');
  if (!global.STRONGLOOP_GLB) setDefaultLanguage();
  global.STRONGLOOP_GLB.DISABLE_CONSOLE = !!disableConsole;
  try {
    var message = 'StrongGlobalize persistent logging started at '
        + (new Date()).toString();
    logFn('info', {
      language: helper.ENGLISH,
      message: message,
      orig: message,
      vars: [],
    });
    global.STRONGLOOP_GLB.LOG_FN = logFn;
  } catch (e) {
    global.STRONGLOOP_GLB.LOG_FN = null;
  }
}

function logPersistent(level, message) {
  if (!global.STRONGLOOP_GLB) setDefaultLanguage();
  if (!global.STRONGLOOP_GLB.LOG_FN) return;
  level = level || 'info';
  if (typeof global.STRONGLOOP_GLB.LOG_FN === 'function') {
    global.STRONGLOOP_GLB.LOG_FN(level, message);
  };
}
 at SyntaxError: Unexpected token (9:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$2.parseBindingAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1417:12)
    at Parser.parseBindingAtom (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:49:30)
    at Parser.pp$1.parseVarId (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1049:20)
    at Parser.pp$1.parseVar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1032:14)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:917:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseTopLevel (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:3098:39)
    at convert (/root/ExpoSE/lib/Tropigate/bin/main.js:50:18)
    at SymbolicExecution.instrumentCodePre (/root/ExpoSE/Analyser/bin/bundle.js:1474:24)
    at Object.instrumentCode (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/instrument/esnstrument.js:1928:37)
    at Object.Module._extensions..js (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:97:30)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:242:41
    at Module.load (/root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js:106:176)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:233:41
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/strong-globalize/index.js:103:108)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:109:12)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:242:41
    at Module.load (/root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js:106:176)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:233:41
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/loopback/index.js:13:93)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:109:12)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:242:41
    at Module.load (/root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js:106:176)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/baleina.js/index.coffee:3:12)
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/baleina.js/index.coffee:2:1)
    at Module._compile (module.js:571:32)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:242:41
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js:45:130)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:242:41
    at Module.load (/root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js:106:176)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:233:41
    at Object.<anonymous> (/root/Targets/baleina.js/node_modules/baleina.js/server.js:12:103)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:109:12)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at callFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:196:51)
    at invokeFun (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:217:22)
    at /root/ExpoSE/Analyser/node_modules/jalangi2/src/js/runtime/analysis.js:233:41
    at Object.<anonymous> (/root/ExpoSE/lib/Harness/src/harness.js:91:103)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:109:12)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Function.Module.runMain (module.js:605:10)
    at startProgram (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:121:19)
    at SymbolicExecution.onReady (/root/ExpoSE/Analyser/bin/bundle.js:1500:13)
    at Object.<anonymous> (/root/ExpoSE/Analyser/node_modules/jalangi2/src/js/commands/jalangi.js:125:17)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:418:7)
    at startup (bootstrap_node.js:139:9)
    at bootstrap_node.js:533:3

*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/baleina.js/node_modules/baleina.js/server.js. Coverage (Term): 38% Coverage (LOC): 71%
*- File /root/Targets/baleina.js/node_modules/coffee-script/register.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/register.js. Coverage (Term): 80% Coverage (LOC): 79%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/coffee-script.js. Coverage (Term): 57% Coverage (LOC): 62%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/lexer.js. Coverage (Term): 58% Coverage (LOC): 66%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/rewriter.js. Coverage (Term): 68% Coverage (LOC): 78%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/helpers.js. Coverage (Term): 34% Coverage (LOC): 45%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/parser.js. Coverage (Term): 78% Coverage (LOC): 98%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/sourcemap.js. Coverage (Term): 93% Coverage (LOC): 95%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/nodes.js. Coverage (Term): 34% Coverage (LOC): 47%
*- File /root/Targets/baleina.js/node_modules/coffee-script/lib/coffee-script/scope.js. Coverage (Term): 51% Coverage (LOC): 60%
*- File /root/Targets/baleina.js/node_modules/loopback/index.js. Coverage (Term): 23% Coverage (LOC): 33%
*- File /root/Targets/baleina.js/node_modules/strong-globalize/index.js. Coverage (Term): 2% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
