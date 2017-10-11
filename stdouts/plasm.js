/root/Targets/plasm.js
└── plasm.js@0.2.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/plasm.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 38% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Array","call","floor","join","Int32Array"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0727 took 78.6592s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module './../node_modules/simplexn.js/lib/simplexn.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/plasm.js/node_modules/plasm.js/index.js. Coverage (Term): 59% Coverage (LOC): 100%
*- File /root/Targets/plasm.js/node_modules/plasm.js/lib/plasm.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/plasm.js/node_modules/plasm.js/support/three.js. Coverage (Term): 11% Coverage (LOC): 40%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
