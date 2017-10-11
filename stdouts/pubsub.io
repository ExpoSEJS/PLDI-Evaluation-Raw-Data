/root/Targets/pubsub.io
└─┬ pubsub.io@0.2.0 
  ├── common@0.2.5 
  └─┬ json-sockets@0.4.4 
    ├─┬ crossmania@0.2.8 
    │ └── buffoon@0.1.4 
    ├─┬ message-sockets@0.2.16 
    │ └── websock@0.3.19 
    └─┬ router@1.3.2 
      ├── array-flatten@2.1.1 
      ├─┬ debug@2.6.9 
      │ └── ms@2.0.0 
      ├── methods@1.1.2 
      ├── parseurl@1.3.2 
      ├── path-to-regexp@0.1.7 
      ├── setprototypeof@1.1.0 
      └── utils-merge@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pubsub.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 23% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","reduce","parseInt","charCodeAt","abs","create","copy"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0259 took 13.0569s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'signer'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/pubsub.io/node_modules/pubsub.io/index.js. Coverage (Term): 14% Coverage (LOC): 17%
*- File /root/Targets/pubsub.io/node_modules/json-sockets/index.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/Targets/pubsub.io/node_modules/common/index.js. Coverage (Term): 13% Coverage (LOC): 21%
*- File /root/Targets/pubsub.io/node_modules/router/index.js. Coverage (Term): 9% Coverage (LOC): 12%
*- File /root/Targets/pubsub.io/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/pubsub.io/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/pubsub.io/node_modules/debug/src/debug.js. Coverage (Term): 44% Coverage (LOC): 48%
*- File /root/Targets/pubsub.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/pubsub.io/node_modules/array-flatten/array-flatten.js. Coverage (Term): 20% Coverage (LOC): 30%
*- File /root/Targets/pubsub.io/node_modules/router/lib/layer.js. Coverage (Term): 15% Coverage (LOC): 18%
*- File /root/Targets/pubsub.io/node_modules/path-to-regexp/index.js. Coverage (Term): 5% Coverage (LOC): 9%
*- File /root/Targets/pubsub.io/node_modules/methods/index.js. Coverage (Term): 59% Coverage (LOC): 27%
*- File /root/Targets/pubsub.io/node_modules/utils-merge/index.js. Coverage (Term): 40% Coverage (LOC): 40%
*- File /root/Targets/pubsub.io/node_modules/parseurl/index.js. Coverage (Term): 15% Coverage (LOC): 18%
*- File /root/Targets/pubsub.io/node_modules/router/lib/route.js. Coverage (Term): 16% Coverage (LOC): 21%
*- File /root/Targets/pubsub.io/node_modules/setprototypeof/index.js. Coverage (Term): 32% Coverage (LOC): 38%
*- File /root/Targets/pubsub.io/node_modules/message-sockets/index.js. Coverage (Term): 14% Coverage (LOC): 20%
*- File /root/Targets/pubsub.io/node_modules/message-sockets/delimited.js. Coverage (Term): 17% Coverage (LOC): 23%
*- File /root/Targets/pubsub.io/node_modules/websock/index.js. Coverage (Term): 11% Coverage (LOC): 13%
*- File /root/Targets/pubsub.io/node_modules/websock/protocol-8.js. Coverage (Term): 22% Coverage (LOC): 24%
*- File /root/Targets/pubsub.io/node_modules/websock/buffers.js. Coverage (Term): 14% Coverage (LOC): 23%
*- File /root/Targets/pubsub.io/node_modules/websock/protocol-0.js. Coverage (Term): 18% Coverage (LOC): 24%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
