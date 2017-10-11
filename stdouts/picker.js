/root/Targets/picker.js
└── picker.js@0.1.11 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/picker.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 23% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","RegExp"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0741 took 36.9708s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/picker.js/node_modules/picker.js/dist/picker.umd.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/picker.js/node_modules/extend/index.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/picker.js/node_modules/stringify-object/index.js. Coverage (Term): 6% Coverage (LOC): 9%
*- File /root/Targets/picker.js/node_modules/is-regexp/index.js. Coverage (Term): 54% Coverage (LOC): 83%
*- File /root/Targets/picker.js/node_modules/is-plain-obj/index.js. Coverage (Term): 44% Coverage (LOC): 86%
*- File /root/Targets/picker.js/node_modules/key.js/dist/key.umd.js. Coverage (Term): 48% Coverage (LOC): 76%
*- File /root/Targets/picker.js/node_modules/moment/moment.js. Coverage (Term): 21% Coverage (LOC): 37%
*- File /root/Targets/picker.js/node_modules/moment-range/dist/moment-range.js. Coverage (Term): 17% Coverage (LOC): 35%
*- File /root/Targets/picker.js/node_modules/popper.js/src/popper.js. Coverage (Term): 2% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
