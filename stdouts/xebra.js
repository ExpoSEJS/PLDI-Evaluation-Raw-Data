/root/Targets/xebra.js
└─┬ xebra.js@1.2.2 
  ├─┬ babel-runtime@6.26.0 
  │ ├── core-js@2.5.1 
  │ └── regenerator-runtime@0.11.0 
  ├── lodash.pick@4.4.0 
  ├── lodash.uniq@4.5.0 
  ├── sprintf-js@1.1.1 
  └─┬ xebra-communicator@1.2.2 
    └── lodash.defaults@4.2.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/xebra.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 15% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0506 took 3.4921s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/xebra.js/node_modules/xebra.js/lib/index.js. Coverage (Term): 3% Coverage (LOC): 2%
*- File /root/Targets/xebra.js/node_modules/babel-runtime/core-js/set.js. Coverage (Term): 73% Coverage (LOC): 83%
*- File /root/Targets/xebra.js/node_modules/core-js/library/fn/set.js. Coverage (Term): 39% Coverage (LOC): 50%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/es6.object.to-string.js. Coverage (Term): 93% Coverage (LOC): 100%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/es6.string.iterator.js. Coverage (Term): 27% Coverage (LOC): 30%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_string-at.js. Coverage (Term): 24% Coverage (LOC): 50%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_to-integer.js. Coverage (Term): 52% Coverage (LOC): 86%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_defined.js. Coverage (Term): 45% Coverage (LOC): 57%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_iter-define.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_library.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_export.js. Coverage (Term): 6% Coverage (LOC): 7%
*- File /root/Targets/xebra.js/node_modules/core-js/library/modules/_global.js. Coverage (Term): 55% Coverage (LOC): 80%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
