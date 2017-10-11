/root/Targets/cell.js
└─┬ cell.js@0.0.2 
  ├─┬ babel-polyfill@6.26.0 
  │ ├─┬ babel-runtime@6.26.0 
  │ │ └── regenerator-runtime@0.11.0 
  │ ├── core-js@2.5.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chai@3.5.0 
  │ ├── assertion-error@1.0.2 
  │ ├─┬ deep-eql@0.1.3 
  │ │ └── type-detect@0.1.1 
  │ └── type-detect@1.0.0 
  └── charm@0.1.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/cell.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 15% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0366 took 4.5451s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/cell.js/node_modules/cell.js/index.js. Coverage (Term): 60% Coverage (LOC): 100%
*- File /root/Targets/cell.js/node_modules/babel-polyfill/lib/index.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/cell.js/node_modules/core-js/shim.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/cell.js/node_modules/core-js/modules/es6.symbol.js. Coverage (Term): 5% Coverage (LOC): 2%
*- File /root/Targets/cell.js/node_modules/core-js/modules/_global.js. Coverage (Term): 55% Coverage (LOC): 80%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
