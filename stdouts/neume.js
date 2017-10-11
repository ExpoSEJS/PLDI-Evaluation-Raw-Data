/root/Targets/neume.js
└─┬ neume.js@0.8.0 
  └── es6-promise@2.3.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/neume.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 25% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.02 took 6.1541s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'prototype' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/neume.js/node_modules/neume.js/index.js. Coverage (Term): 42% Coverage (LOC): 56%
*- File /root/Targets/neume.js/node_modules/neume.js/src/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/neume.js/node_modules/neume.js/src/core/neume.js. Coverage (Term): 13% Coverage (LOC): 12%
*- File /root/Targets/neume.js/node_modules/neume.js/src/core/shim.js. Coverage (Term): 21% Coverage (LOC): 22%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/index.js. Coverage (Term): 15% Coverage (LOC): 30%
*- File /root/Targets/neume.js/node_modules/neume.js/src/namespace.js. Coverage (Term): 66% Coverage (LOC): 86%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/underscore.js. Coverage (Term): 19% Coverage (LOC): 52%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/db.js. Coverage (Term): 20% Coverage (LOC): 30%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/emitter.js. Coverage (Term): 19% Coverage (LOC): 34%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/fft.js. Coverage (Term): 5% Coverage (LOC): 11%
*- File /root/Targets/neume.js/node_modules/neume.js/src/util/kvs.js. Coverage (Term): 22% Coverage (LOC): 37%
*- File /root/Targets/neume.js/node_modules/neume.js/src/core/context.js. Coverage (Term): 9% Coverage (LOC): 10%
*- File /root/Targets/neume.js/node_modules/neume.js/src/const.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/neume.js/node_modules/neume.js/src/core/transport.js. Coverage (Term): 11% Coverage (LOC): 18%
*- File /root/Targets/neume.js/node_modules/neume.js/src/core/timer.js. Coverage (Term): 22% Coverage (LOC): 29%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
