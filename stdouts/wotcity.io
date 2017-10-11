
> websocket@1.0.24 install /root/Targets/wotcity.io/node_modules/websocket
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/wotcity.io/node_modules/websocket/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
  SOLINK_MODULE(target) Release/obj.target/bufferutil.node
  COPY Release/bufferutil.node
  CXX(target) Release/obj.target/validation/src/validation.o
  SOLINK_MODULE(target) Release/obj.target/validation.node
  COPY Release/validation.node
make: Leaving directory '/root/Targets/wotcity.io/node_modules/websocket/build'
/root/Targets/wotcity.io
└─┬ wotcity.io@0.9.8 
  ├── backbone@1.3.3 
  ├─┬ bl@0.9.5 
  │ └─┬ readable-stream@1.0.34 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.3 
  │   ├── isarray@0.0.1 
  │   └── string_decoder@0.10.31 
  ├── bluebird@3.5.0 
  ├─┬ cluster@0.7.7 
  │ ├── log@1.4.0 
  │ └─┬ mkdirp@0.5.1 
  │   └── minimist@0.0.8 
  ├─┬ coap@0.10.5 
  │ ├── coap-packet@0.1.14 
  │ ├─┬ fastseries@1.7.2 
  │ │ ├── reusify@1.0.2 
  │ │ └── xtend@4.0.1 
  │ └── lru-cache@2.5.2 
  ├─┬ lwm2m-node-lib@0.4.2 
  │ ├── async@1.5.2 
  │ ├─┬ coap@0.13.1 
  │ │ ├── bl@1.0.2 
  │ │ ├── capitalize@1.0.0 
  │ │ ├── coap-packet@0.1.13 
  │ │ ├─┬ debug@2.2.0 
  │ │ │ └── ms@0.7.1 
  │ │ ├─┬ fastseries@1.7.2 
  │ │ │ ├── reusify@1.0.1 
  │ │ │ └── xtend@4.0.1 
  │ │ ├─┬ lru-cache@4.0.0 
  │ │ │ ├── pseudomap@1.0.2 
  │ │ │ └── yallist@2.0.0 
  │ │ └─┬ readable-stream@2.0.5 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── inherits@2.0.1 
  │ │   ├── isarray@0.0.1 
  │ │   ├── process-nextick-args@1.0.6 
  │ │   ├── string_decoder@0.10.31 
  │ │   └── util-deprecate@1.0.2 
  │ ├─┬ coap-cli@0.4.0 
  │ │ ├─┬ coap@0.12.1 
  │ │ │ ├── bl@0.9.5 
  │ │ │ ├── capitalize@1.0.0 
  │ │ │ ├── coap-packet@0.1.13 
  │ │ │ ├─┬ fastseries@1.7.2 
  │ │ │ │ ├── reusify@1.0.1 
  │ │ │ │ └── xtend@4.0.1 
  │ │ │ ├── lru-cache@2.5.2 
  │ │ │ └─┬ readable-stream@1.0.33 
  │ │ │   ├── core-util-is@1.0.2 
  │ │ │   ├── inherits@2.0.1 
  │ │ │   ├── isarray@0.0.1 
  │ │ │   └── string_decoder@0.10.31 
  │ │ ├─┬ commander@2.9.0 
  │ │ │ └── graceful-readlink@1.0.1 
  │ │ └─┬ through2@2.0.1 
  │ │   ├─┬ readable-stream@2.0.5 
  │ │   │ ├── core-util-is@1.0.2 
  │ │   │ ├── inherits@2.0.1 
  │ │   │ ├── isarray@0.0.1 
  │ │   │ ├── process-nextick-args@1.0.6 
  │ │   │ ├── string_decoder@0.10.31 
  │ │   │ └── util-deprecate@1.0.2 
  │ │   └── xtend@4.0.1 
  │ ├── command-node@0.1.1 
  │ ├─┬ logops@0.5.0 
  │ │ └── colors@1.1.2 
  │ ├─┬ mongodb@2.1.7 
  │ │ ├── es6-promise@3.0.2 
  │ │ ├─┬ mongodb-core@1.3.1 
  │ │ │ ├── bson@0.4.21 
  │ │ │ └─┬ require_optional@1.0.0 
  │ │ │   ├── resolve-from@2.0.0 
  │ │ │   └── semver@5.1.0 
  │ │ └─┬ readable-stream@1.0.31 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── inherits@2.0.1 
  │ │   ├── isarray@0.0.1 
  │ │   └── string_decoder@0.10.31 
  │ ├─┬ mongoose@4.4.3 
  │ │ ├── bson@0.4.21 
  │ │ ├── hooks-fixed@1.1.0 
  │ │ ├── kareem@1.0.1 
  │ │ ├─┬ mongodb@2.1.6 
  │ │ │ ├── es6-promise@3.0.2 
  │ │ │ ├─┬ mongodb-core@1.3.1 
  │ │ │ │ └─┬ require_optional@1.0.0 
  │ │ │ │   ├── resolve-from@2.0.0 
  │ │ │ │   └── semver@5.1.0 
  │ │ │ └─┬ readable-stream@1.0.31 
  │ │ │   ├── core-util-is@1.0.2 
  │ │ │   ├── inherits@2.0.1 
  │ │ │   ├── isarray@0.0.1 
  │ │ │   └── string_decoder@0.10.31 
  │ │ ├── mpath@0.2.1 
  │ │ ├── mpromise@0.5.5 
  │ │ ├─┬ mquery@1.6.3 
  │ │ │ ├── bluebird@2.9.26 
  │ │ │ ├── debug@2.2.0 
  │ │ │ └── sliced@0.0.5 
  │ │ ├── ms@0.7.1 
  │ │ ├── muri@1.1.0 
  │ │ ├── regexp-clone@0.0.1 
  │ │ └── sliced@1.0.1 
  │ ├─┬ mongoose-auto-increment@5.0.1 
  │ │ └── extend@3.0.0 
  │ └── underscore@1.7.0 
  ├── underscore@1.8.3 
  ├── utils-merge@1.0.1 
  └─┬ websocket@1.0.24 
    ├─┬ debug@2.6.9 
    │ └── ms@2.0.0 
    ├── nan@2.7.0 
    ├─┬ typedarray-to-buffer@3.1.2 
    │ └── is-typedarray@1.0.0 
    └── yaeti@0.0.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/wotcity.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 22% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","pow","join","RegExp","sort","apply","reduce","parseInt","charCodeAt","abs"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0521 took 23.2852s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: STATE_OPEN is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/wotcity.io/node_modules/wotcity.io/index.js. Coverage (Term): 31% Coverage (LOC): 20%
*- File /root/Targets/wotcity.io/node_modules/wotcity.io/lib/framework.js. Coverage (Term): 12% Coverage (LOC): 16%
*- File /root/Targets/wotcity.io/node_modules/backbone/backbone.js. Coverage (Term): 9% Coverage (LOC): 23%
*- File /root/Targets/wotcity.io/node_modules/underscore/underscore.js. Coverage (Term): 23% Coverage (LOC): 36%
*- File /root/Targets/wotcity.io/node_modules/utils-merge/index.js. Coverage (Term): 40% Coverage (LOC): 40%
*- File /root/Targets/wotcity.io/node_modules/wotcity.io/lib/websocketBrokerServer/server.js. Coverage (Term): 4% Coverage (LOC): 4%
*- File /root/Targets/wotcity.io/node_modules/websocket/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/wotcity.io/node_modules/websocket/lib/websocket.js. Coverage (Term): 36% Coverage (LOC): 38%
*- File /root/Targets/wotcity.io/node_modules/websocket/lib/WebSocketServer.js. Coverage (Term): 8% Coverage (LOC): 7%
*- File /root/Targets/wotcity.io/node_modules/websocket/lib/utils.js. Coverage (Term): 19% Coverage (LOC): 30%
*- File /root/Targets/wotcity.io/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/wotcity.io/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/wotcity.io/node_modules/debug/src/debug.js. Coverage (Term): 44% Coverage (LOC): 48%
*- File /root/Targets/wotcity.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/wotcity.io/node_modules/websocket/lib/WebSocketRequest.js. Coverage (Term): 3% Coverage (LOC): 3%
*- File /root/Targets/wotcity.io/node_modules/websocket/lib/WebSocketConnection.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
