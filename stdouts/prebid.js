/root/Targets/prebid.js
└─┬ prebid.js@0.29.0 
  ├─┬ babel-plugin-transform-object-assign@6.22.0 
  │ └─┬ babel-runtime@6.26.0 
  │   └── regenerator-runtime@0.11.0 
  ├── core-js@2.5.1 
  └─┬ gulp-sourcemaps@2.6.1 
    ├─┬ @gulp-sourcemaps/identity-map@1.0.1 
    │ ├── acorn@5.1.2 
    │ ├─┬ normalize-path@2.1.1 
    │ │ └── remove-trailing-separator@1.1.0 
    │ └── source-map@0.5.7 
    ├── @gulp-sourcemaps/map-sources@1.0.0 
    ├── acorn@4.0.13 
    ├── convert-source-map@1.5.0 
    ├─┬ css@2.2.1 
    │ ├── inherits@2.0.3 
    │ ├─┬ source-map@0.1.43 
    │ │ └── amdefine@1.0.1 
    │ ├─┬ source-map-resolve@0.3.1 
    │ │ ├── atob@1.1.3 
    │ │ ├── resolve-url@0.2.1 
    │ │ └── source-map-url@0.3.0 
    │ └── urix@0.1.0 
    ├─┬ debug-fabulous@0.2.1 
    │ ├─┬ debug@3.1.0 
    │ │ └── ms@2.0.0 
    │ ├─┬ memoizee@0.4.11 
    │ │ ├── d@1.0.0 
    │ │ ├─┬ es5-ext@0.10.30 
    │ │ │ ├── es6-iterator@2.0.1 
    │ │ │ └── es6-symbol@3.1.1 
    │ │ ├── es6-weak-map@2.0.2 
    │ │ ├── event-emitter@0.3.5 
    │ │ ├── is-promise@2.1.0 
    │ │ ├── lru-queue@0.1.0 
    │ │ ├── next-tick@1.0.0 
    │ │ └── timers-ext@0.1.2 
    │ └── object-assign@4.1.1 
    ├── detect-newline@2.1.0 
    ├── graceful-fs@4.1.11 
    ├── source-map@0.6.1 
    ├── strip-bom-string@1.0.0 
    ├─┬ through2@2.0.3 
    │ ├─┬ readable-stream@2.3.3 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── safe-buffer@5.1.1 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── xtend@4.0.1 
    └─┬ vinyl@1.2.0 
      ├── clone@1.0.2 
      ├── clone-stats@0.0.1 
      └── replace-ext@0.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/prebid.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.031 took 2.7794s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: 'import' and 'export' may appear only with 'sourceType: module' (3:0)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
