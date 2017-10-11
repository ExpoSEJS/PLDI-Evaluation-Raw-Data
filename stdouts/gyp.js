/root/Targets/gyp.js
└─┬ gyp.js@1.7.0 
  ├─┬ istanbul@0.4.5 
  │ ├── abbrev@1.0.9 
  │ ├── async@1.5.2 
  │ ├─┬ escodegen@1.8.1 
  │ │ ├── estraverse@1.9.3 
  │ │ ├── esutils@2.0.2 
  │ │ ├─┬ optionator@0.8.2 
  │ │ │ ├── deep-is@0.1.3 
  │ │ │ ├── fast-levenshtein@2.0.6 
  │ │ │ ├── levn@0.3.0 
  │ │ │ ├── prelude-ls@1.1.2 
  │ │ │ └── type-check@0.3.2 
  │ │ └─┬ source-map@0.2.0 
  │ │   └── amdefine@1.0.1 
  │ ├── esprima@2.7.3 
  │ ├─┬ glob@5.0.15 
  │ │ ├── inflight@1.0.6 
  │ │ ├── inherits@2.0.3 
  │ │ ├─┬ minimatch@3.0.4 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ └── path-is-absolute@1.0.1 
  │ ├─┬ handlebars@4.0.10 
  │ │ ├─┬ optimist@0.6.1 
  │ │ │ ├── minimist@0.0.10 
  │ │ │ └── wordwrap@0.0.3 
  │ │ ├── source-map@0.4.4 
  │ │ └─┬ uglify-js@2.8.29 
  │ │   ├── source-map@0.5.7 
  │ │   ├── uglify-to-browserify@1.0.2 
  │ │   └─┬ yargs@3.10.0 
  │ │     ├── camelcase@1.2.1 
  │ │     ├─┬ cliui@2.1.0 
  │ │     │ ├─┬ center-align@0.1.3 
  │ │     │ │ ├─┬ align-text@0.1.4 
  │ │     │ │ │ ├─┬ kind-of@3.2.2 
  │ │     │ │ │ │ └── is-buffer@1.1.5 
  │ │     │ │ │ ├── longest@1.0.1 
  │ │     │ │ │ └── repeat-string@1.6.1 
  │ │     │ │ └── lazy-cache@1.0.4 
  │ │     │ ├── right-align@0.1.3 
  │ │     │ └── wordwrap@0.0.2 
  │ │     ├── decamelize@1.2.0 
  │ │     └── window-size@0.1.0 
  │ ├─┬ js-yaml@3.10.0 
  │ │ ├─┬ argparse@1.0.9 
  │ │ │ └── sprintf-js@1.0.3 
  │ │ └── esprima@4.0.0 
  │ ├── nopt@3.0.6 
  │ ├─┬ once@1.4.0 
  │ │ └── wrappy@1.0.2 
  │ ├── resolve@1.1.7 
  │ ├─┬ supports-color@3.2.3 
  │ │ └── has-flag@1.0.0 
  │ ├─┬ which@1.3.0 
  │ │ └── isexe@2.0.0 
  │ └── wordwrap@1.0.0 
  ├─┬ mkdirp@0.5.1 
  │ └── minimist@0.0.8 
  ├─┬ ninja.js@1.1.1 
  │ └─┬ async@2.5.0 
  │   └── lodash@4.17.4 
  ├── parser-base@1.0.0 
  ├── windows-autoconf@1.11.1 
  └─┬ yargs-parser@2.4.1 
    ├── camelcase@3.0.0 
    └── lodash.assign@4.2.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/gyp.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 15% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","parseInt"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0497 took 8.8797s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/gyp.js/node_modules/gyp.js/lib/gyp.js. Coverage (Term): 4% Coverage (LOC): 5%
*- File /root/Targets/gyp.js/node_modules/gyp.js/lib/gyp/bindings.js. Coverage (Term): 46% Coverage (LOC): 75%
*- File /root/Targets/gyp.js/node_modules/mkdirp/index.js. Coverage (Term): 14% Coverage (LOC): 13%
*- File /root/Targets/gyp.js/node_modules/gyp.js/lib/gyp/shlex.js. Coverage (Term): 10% Coverage (LOC): 14%
*- File /root/Targets/gyp.js/node_modules/gyp.js/lib/gyp/py.js. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
