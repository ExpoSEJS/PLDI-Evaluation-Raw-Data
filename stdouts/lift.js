/root/Targets/lift.js
└─┬ lift.js@0.2.6 
  ├── bluebird@0.11.6 
  ├─┬ chalk@0.5.1 
  │ ├── ansi-styles@1.1.0 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@0.1.0 
  │ │ └── ansi-regex@0.2.1 
  │ ├── strip-ansi@0.3.0 
  │ └── supports-color@0.2.0 
  ├── minimist@1.2.0 
  ├── requirejs@2.3.5 
  └─┬ winston@0.8.3 
    ├── async@0.2.10 
    ├── colors@0.6.2 
    ├── cycle@1.0.3 
    ├── eyes@0.1.8 
    ├── isstream@0.1.2 
    ├── pkginfo@0.3.1 
    └── stack-trace@0.0.10 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/lift.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0461 took 4.1743s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected character '#' (1:78) on program #!/usr/bin/env node

/* jshint node:true */

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2), { boolean: [ 'v', 'verbose', 'h', 'help' ] });
var liftBuilder = require('./src/builder');
if(!global.Promise) {
  global.Promise = require('bluebird');
}


var BUILD_DIR = path.join(__dirname, 'dist');
var SRC_DIR = path.join(__dirname, 'src');
var BROWSERS_DIR = path.join(SRC_DIR, 'browsers');
var FEATURES = argv._;


// function fail() {
//   console.error(chalk.red(arguments.join(' ')));
//   process.exit(1);
// }

function usage() {
  console.log('usage: node build.js [es5:*, es6:string*]');
  process.exit(0);
}

if(argv.h || argv.help) {
  usage();
}

if(argv.v || argv.verbose) {
  liftBuilder.increaseVerbosity();
}


function repeatString(s, num) {
  return new Array(num + 1).join(s);
}


function prettyKeys(d, indent) {
  indent = indent || 0;
  var output = '';
  for(var key in d) {
    if(d.hasOwnProperty(key)) {
      var value = d[key];

      output += repeatString('  ', indent) + key + (value === '*' ? ': ' + chalk.green('*') : '') + '\n';

      if(typeof value === 'object') {
        output += prettyKeys(value, indent + 1) + '\n';
      }
    }
  }

  return output;
}

function cleanDir(dir) {
  fs.readdirSync(dir).forEach(function(fileName) {
    fs.unlinkSync(path.join(dir, fileName));
  });
}

function buildOptimizedLiftJs() {
  var reqs = liftBuilder.buildFeatureTree(FEATURES);
  var browserVersions = {};
  var promises = [];
  var BUNDLES_DIR = path.join(BUILD_DIR, 'bundles');

  console.log('Selected features:\n%s', prettyKeys(reqs, 1));

  // Create dist/bundles dir
  if(fs.existsSync(BUNDLES_DIR)) {
    cleanDir(BUNDLES_DIR);
  } else {
    fs.mkdirSync(BUNDLES_DIR);
  }

  fs.readdirSync(BROWSERS_DIR).forEach(function(filename) {
    var browser = path.basename(filename, '.txt');

    // Build browser AMD modules into dist/bundles/[browser]-[ver].js
    promises.push(liftBuilder.buildBrowserBundles(browser, reqs).then(function(bundle) {
      browserVersions[browser] = bundle;
    }));
  });

  function optimizeLiftJs(fileName) {
    var liftJsSource = fs.readFileSync(path.join(BUILD_DIR, fileName)).toString();

    // Parse lift.js and output reqs and browser_ranges as JSON.
    var customLiftJS = liftBuilder.customizeLiftJS(reqs, browserVersions, liftJsSource);

    console.log(chalk.blue('Created optimized ' + fileName));

    var fileParts = fileName.split('.');
    var name = fileParts[0];
    var ext = '.' + fileParts.slice(1).join('.');

    var outFp = fs.openSync(path.join(BUILD_DIR, name + '-optimized' + ext), 'w');

    try {
      fs.writeSync(outFp, customLiftJS);
    } finally {
      fs.closeSync(outFp);
    }
  }

  return Promise.all(promises).then(function() {
    optimizeLiftJs('lift.js');
    optimizeLiftJs('lift.amd.js');
  });
}


function main() {
  if(FEATURES.length > 0) {
    buildOptimizedLiftJs().then(function() {
      console.log("-- Build Complete --");
    }, function(e) {
      console.error(e + '');
      console.log("-- Build Failed --");
      process.exit(1);
    });
  } else {
    console.log('Nothing to do');
  }
}

main();
 at SyntaxError: Unexpected character '#' (1:78)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2756:10)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp.eat (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:536:12)
    at Parser.pp.semicolon (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:581:15)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:918:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
