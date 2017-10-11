/root/Targets/vtk.js
└─┬ vtk.js@4.1.0 
  ├── base64-js@1.2.0 
  ├── blueimp-md5@2.7.0 
  ├─┬ commander@2.9.0 
  │ └── graceful-readlink@1.0.1 
  ├─┬ gh-pages@1.0.0 
  │ ├─┬ async@2.1.4 
  │ │ └── lodash@4.17.4 
  │ ├── base64url@2.0.0 
  │ ├─┬ fs-extra@3.0.1 
  │ │ ├── jsonfile@3.0.1 
  │ │ └── universalify@0.1.1 
  │ ├─┬ globby@6.1.0 
  │ │ ├─┬ array-union@1.0.2 
  │ │ │ └── array-uniq@1.0.3 
  │ │ ├── object-assign@4.1.1 
  │ │ ├── pify@2.3.0 
  │ │ └─┬ pinkie-promise@2.0.1 
  │ │   └── pinkie@2.0.4 
  │ ├── graceful-fs@4.1.11 
  │ └── rimraf@2.6.2 
  ├── gl-matrix@2.3.1 
  ├─┬ jszip@3.1.3 
  │ ├── core-js@2.3.0 
  │ ├── es6-promise@3.0.2 
  │ ├─┬ lie@3.1.1 
  │ │ └── immediate@3.0.6 
  │ └─┬ readable-stream@2.0.6 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.3 
  │   ├── isarray@1.0.0 
  │   ├── process-nextick-args@1.0.7 
  │   ├── string_decoder@0.10.31 
  │   └── util-deprecate@1.0.2 
  ├── pako@1.0.5 
  ├── seedrandom@2.4.3 
  └─┬ shelljs@0.7.7 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├── interpret@1.0.4 
    └─┬ rechoir@0.6.2 
      └─┬ resolve@1.4.0 
        └── path-parse@1.0.5 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/vtk.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 2% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0296 took 119.2413s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/vtk.js/node_modules/vtk.js/dist/vtk.js. Coverage (Term): 0% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
