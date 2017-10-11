/root/Targets/blocks.js
└── blocks.js@1.1.9 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/blocks.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 18% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0549 took 6.2016s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/blocks.js/node_modules/blocks.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/blocks.js/node_modules/blocks.js/src/node_modules/Block.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/blocks.js/node_modules/blocks.js/src/node_modules/EventEmitterB.js. Coverage (Term): 12% Coverage (LOC): 22%
*- File /root/Targets/blocks.js/node_modules/proto/proto.js. Coverage (Term): 43% Coverage (LOC): 48%
*- File /root/Targets/blocks.js/node_modules/blocks.js/src/node_modules/utils.js. Coverage (Term): 17% Coverage (LOC): 29%
*- File evalIndirect. Coverage (Term): 6% Coverage (LOC): 10%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
