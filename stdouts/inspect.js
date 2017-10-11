/root/Targets/inspect.js
└─┬ inspect.js@1.9.0 
  └── superstorage@0.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/inspect.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 11% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0752 took 8.2357s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/inspect.js/node_modules/inspect.js/inspect.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/inspect.js/node_modules/inspect.js/lib/inspectUtils.js. Coverage (Term): 9% Coverage (LOC): 21%
*- File /root/Targets/inspect.js/node_modules/inspect.js/lib/inspectionError.js. Coverage (Term): 39% Coverage (LOC): 41%
*- File /root/Targets/inspect.js/node_modules/inspect.js/lib/errors.js. Coverage (Term): 20% Coverage (LOC): 26%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
