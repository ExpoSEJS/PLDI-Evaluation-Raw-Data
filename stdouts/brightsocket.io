/root/Targets/brightsocket.io
├─┬ brightsocket.io@0.0.6 
│ ├── brightsocket.io-client@0.0.5 
│ └── UNMET PEER DEPENDENCY socket.io-client@^1.7.3
└── UNMET PEER DEPENDENCY socket.io@^1.7.3

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/brightsocket.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 26% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0243 took 4.2144s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'socket.io'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/brightsocket.io/node_modules/brightsocket.io/bin/brightsocket.js. Coverage (Term): 48% Coverage (LOC): 73%
*- File /root/Targets/brightsocket.io/node_modules/brightsocket.io/bin/poolapi.js. Coverage (Term): 12% Coverage (LOC): 16%
*- File /root/Targets/brightsocket.io/node_modules/brightsocket.io/bin/socketpool.js. Coverage (Term): 11% Coverage (LOC): 15%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
