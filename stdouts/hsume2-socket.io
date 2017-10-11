/root/Targets/hsume2-socket.io
└── hsume2-socket.io@0.6.172 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hsume2-socket.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 18% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","binding"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.04 took 3.3731s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: The super constructor to "inherits" must not be null or undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/hsume2-socket.io/node_modules/hsume2-socket.io/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/hsume2-socket.io/node_modules/hsume2-socket.io/lib/socket.io/index.js. Coverage (Term): 49% Coverage (LOC): 86%
*- File /root/Targets/hsume2-socket.io/node_modules/hsume2-socket.io/lib/socket.io/listener.js. Coverage (Term): 6% Coverage (LOC): 3%
*- File /root/Targets/hsume2-socket.io/node_modules/hsume2-socket.io/lib/socket.io/utils.js. Coverage (Term): 12% Coverage (LOC): 30%
*- File /root/Targets/hsume2-socket.io/node_modules/hsume2-socket.io/lib/socket.io/client.js. Coverage (Term): 9% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
