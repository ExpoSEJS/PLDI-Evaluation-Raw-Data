/root/Targets/nms.js
└── nms.js@0.0.53 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/nms.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 11% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0545 took 6.1361s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: NOT_LOADED is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/nms.js/node_modules/nms.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/nms.js/node_modules/nms.js/lib/nms.js. Coverage (Term): 4% Coverage (LOC): 3%
*- File /root/Targets/nms.js/node_modules/nms.js/lib/telnet-client/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/nms.js/node_modules/nms.js/lib/telnet-client/lib/telnet-client.js. Coverage (Term): 7% Coverage (LOC): 6%
*- File /root/Targets/nms.js/node_modules/telnet-stream/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/nms.js/node_modules/telnet-stream/lib/telnetStream.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/nms.js/node_modules/telnet-stream/lib/telnetInput.js. Coverage (Term): 21% Coverage (LOC): 22%
*- File /root/Targets/nms.js/node_modules/telnet-stream/lib/telnetOutput.js. Coverage (Term): 26% Coverage (LOC): 42%
*- File /root/Targets/nms.js/node_modules/nms.js/lib/radius/index.js. Coverage (Term): 61% Coverage (LOC): 100%
*- File /root/Targets/nms.js/node_modules/nms.js/lib/radius/radius-client.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/nms.js/node_modules/radius/lib/radius.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
