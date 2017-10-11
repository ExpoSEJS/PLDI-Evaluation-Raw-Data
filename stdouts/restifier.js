/root/Targets/restifier.js
└─┬ restifier.js@1.0.5 
  ├── assert-plus@0.1.5 
  └── lodash@3.10.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/restifier.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 34% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0822 took 4.3268s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (3:4) on program 'use strict';

var assert = require('assert-plus');

var _ = require('./lodash_helper');
var clients = require('./clients');

function createClient (options) {
    if (typeof (options) === 'string') {
        options = {
            url: options
        };
    }

    assert.object(options, 'options');

    var client;
    var opts = _.clone(options);
    opts.agent = options.agent;
    opts.name = opts.name || 'restify';
    opts.type = opts.type || 'application/octet-stream';
    opts.log = opts.log || require('./log');

    switch (opts.type) {
        case 'json':
            client = new clients.JsonClient(opts);
            break;

        case 'string':
            client = new clients.StringClient(opts);
            break;

        case 'http':
        default:
            client = new clients.HttpClient(opts);
            break;
    }

    return (client);
}

function createJsonClient(options) {
    if (typeof (options) === 'string') {
        options = {
            url: options
        };
    }

    options = options ? _.clone(options) : {};
    options.type = 'json';
    return (createClient(options));
}

function createStringClient(options) {
    if (typeof (options) === 'string') {
        options = {
            url: options
        };
    }

    options = options ? _.clone(options) : {};
    options.type = 'string';
    return (createClient(options));
}

function createHttpClient(options) {
    if (typeof (options) === 'string') {
        options = {
            url: options
        };
    }

    options = options ? _.clone(options) : {};
    options.type = 'http';
    return (createClient(options));
}

module.exports = {
    createClient: createClient,
    createJsonClient: createJsonClient,
    createStringClient: createStringClient,
    createHttpClient: createHttpClient,

    errors: require('./errors'),
};
 at SyntaxError: Unexpected token (3:4)
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
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/restifier.js/node_modules/restifier.js/index.js. Coverage (Term): 45% Coverage (LOC): 63%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
