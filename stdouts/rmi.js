/root/Targets/rmi.js
└── rmi.js@0.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/rmi.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 16% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0623 took 22.783s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'prototype' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/rmi.js/node_modules/rmi.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/rmi.js/node_modules/rmi.js/lib/server/rmi.js. Coverage (Term): 7% Coverage (LOC): 6%
*- File /root/Targets/rmi.js/node_modules/rmi.js/lib/shared/messages.js. Coverage (Term): 28% Coverage (LOC): 34%
*- File /root/Targets/rmi.js/node_modules/socket.io/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/rmi.js/node_modules/socket.io/lib/socket.io.js. Coverage (Term): 22% Coverage (LOC): 29%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/io.js. Coverage (Term): 52% Coverage (LOC): 59%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/util.js. Coverage (Term): 24% Coverage (LOC): 43%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/json.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/parser.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/events.js. Coverage (Term): 17% Coverage (LOC): 20%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/namespace.js. Coverage (Term): 18% Coverage (LOC): 21%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/transport.js. Coverage (Term): 26% Coverage (LOC): 37%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/transports/xhr.js. Coverage (Term): 22% Coverage (LOC): 31%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/transports/websocket.js. Coverage (Term): 29% Coverage (LOC): 41%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/transports/xhr-polling.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/lib/socket.js. Coverage (Term): 10% Coverage (LOC): 15%
*- File /root/Targets/rmi.js/node_modules/socket.io-client/bin/builder.js. Coverage (Term): 19% Coverage (LOC): 28%
*- File /root/Targets/rmi.js/node_modules/uglify-js/uglify-js.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/rmi.js/node_modules/uglify-js/lib/parse-js.js. Coverage (Term): 12% Coverage (LOC): 25%
*- File /root/Targets/rmi.js/node_modules/uglify-js/lib/process.js. Coverage (Term): 3% Coverage (LOC): 4%
*- File /root/Targets/rmi.js/node_modules/uglify-js/lib/squeeze-more.js. Coverage (Term): 43% Coverage (LOC): 25%
*- File /root/Targets/rmi.js/node_modules/socket.io/lib/manager.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/rmi.js/node_modules/socket.io/lib/util.js. Coverage (Term): 19% Coverage (LOC): 44%
*- File /root/Targets/rmi.js/node_modules/socket.io/lib/store.js. Coverage (Term): 15% Coverage (LOC): 21%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
