/root/Targets/canvasvideo.js
└── canvasvideo.js@1.0.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/canvasvideo.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 12% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0816 took 5.0016s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: navigator is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/canvasvideo.js/node_modules/canvasvideo.js/src/media/CanvasVideo.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/canvasvideo.js/node_modules/canvasvideo.js/src/event/EventDispatcher.js. Coverage (Term): 11% Coverage (LOC): 23%
*- File /root/Targets/canvasvideo.js/node_modules/canvasvideo.js/src/event/Event.js. Coverage (Term): 46% Coverage (LOC): 55%
*- File /root/Targets/canvasvideo.js/node_modules/canvasvideo.js/src/core/Utils.js. Coverage (Term): 5% Coverage (LOC): 13%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
