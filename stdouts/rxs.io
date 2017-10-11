/root/Targets/rxs.io
└─┬ rxs.io@1.1.0 
  ├─┬ rxjs@5.4.3 
  │ └── symbol-observable@1.0.4 
  ├─┬ socket.io@1.7.4 
  │ ├─┬ debug@2.3.3 
  │ │ └── ms@0.7.2 
  │ ├─┬ engine.io@1.8.4 
  │ │ ├─┬ accepts@1.3.3 
  │ │ │ ├─┬ mime-types@2.1.17 
  │ │ │ │ └── mime-db@1.30.0 
  │ │ │ └── negotiator@0.6.1 
  │ │ ├── base64id@1.0.0 
  │ │ ├── cookie@0.3.1 
  │ │ ├─┬ engine.io-parser@1.3.2 
  │ │ │ ├── after@0.8.2 
  │ │ │ ├── arraybuffer.slice@0.0.6 
  │ │ │ ├── base64-arraybuffer@0.1.5 
  │ │ │ ├── blob@0.0.4 
  │ │ │ └── wtf-8@1.0.0 
  │ │ └─┬ ws@1.1.4 
  │ │   ├── options@0.0.6 
  │ │   └── ultron@1.0.2 
  │ ├── has-binary@0.1.7 
  │ ├── object-assign@4.1.0 
  │ ├─┬ socket.io-adapter@0.5.0 
  │ │ └─┬ socket.io-parser@2.3.1 
  │ │   └─┬ debug@2.2.0 
  │ │     └── ms@0.7.1 
  │ └─┬ socket.io-parser@2.3.1 
  │   ├── component-emitter@1.1.2 
  │   └─┬ debug@2.2.0 
  │     └── ms@0.7.1 
  ├─┬ socket.io-client@1.7.4 
  │ ├── backo2@1.0.2 
  │ ├── component-bind@1.0.0 
  │ ├── component-emitter@1.2.1 
  │ ├─┬ engine.io-client@1.8.4 
  │ │ ├── component-emitter@1.2.1 
  │ │ ├── component-inherit@0.0.3 
  │ │ ├── has-cors@1.1.0 
  │ │ ├── parsejson@0.0.3 
  │ │ ├── parseqs@0.0.5 
  │ │ ├── ws@1.1.2 
  │ │ ├── xmlhttprequest-ssl@1.5.3 
  │ │ └── yeast@0.1.2 
  │ ├── indexof@0.0.1 
  │ ├── object-component@0.0.3 
  │ ├─┬ parseuri@0.0.5 
  │ │ └─┬ better-assert@1.0.2 
  │ │   └── callsite@1.0.0 
  │ ├─┬ socket.io-parser@2.3.1 
  │ │ ├── component-emitter@1.1.2 
  │ │ └─┬ debug@2.2.0 
  │ │   └── ms@0.7.1 
  │ └── to-array@0.1.4 
  └─┬ socket.io-parser@2.3.2 
    ├── component-emitter@1.2.1 
    ├── isarray@0.0.1 
    └── json3@3.3.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/rxs.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /1 queued / 1 running / 1 errors / 22% coverage ] ****** [1 done /0 queued / 2 running / 1 errors / 22% coverage ] ****** [1 done /0 queued / 2 running / 1 errors / 22% coverage ] ****** [2 done /0 queued / 2 running / 2 errors / 22% coverage ] ****** [2 done /0 queued / 2 running / 2 errors / 22% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 22% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 22% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 22% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","for","Symbol","parseInt","call","Date","getUTCFullYear","getUTCMonth","getUTCDate","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","stringify","Number","parse","toString","apply","bound WebSocketClient"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0} start 0.0335 took 20.7018s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'protocol' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":2} start 21.0835 took 20.2064s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: Cannot read property 'protocol' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"_bound":1} start 21.0065 took 20.8497s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 41.5312 took 23.7575s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'indexOf' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":3}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 81% Coverage (LOC): 86%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 23% Coverage (LOC): 41%
*- File /root/Targets/rxs.io/node_modules/rxs.io/dist/RxSocketIO.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/rxs.io/dist/WebSocketClient.js. Coverage (Term): 46% Coverage (LOC): 45%
*- File /root/Targets/rxs.io/node_modules/rxjs/Subject.js. Coverage (Term): 33% Coverage (LOC): 40%
*- File /root/Targets/rxs.io/node_modules/rxjs/Observable.js. Coverage (Term): 25% Coverage (LOC): 32%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/root.js. Coverage (Term): 79% Coverage (LOC): 92%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/toSubscriber.js. Coverage (Term): 40% Coverage (LOC): 40%
*- File /root/Targets/rxs.io/node_modules/rxjs/Subscriber.js. Coverage (Term): 25% Coverage (LOC): 30%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/isFunction.js. Coverage (Term): 64% Coverage (LOC): 83%
*- File /root/Targets/rxs.io/node_modules/rxjs/Subscription.js. Coverage (Term): 22% Coverage (LOC): 26%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/isArray.js. Coverage (Term): 57% Coverage (LOC): 83%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/isObject.js. Coverage (Term): 57% Coverage (LOC): 83%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/tryCatch.js. Coverage (Term): 48% Coverage (LOC): 57%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/errorObject.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/UnsubscriptionError.js. Coverage (Term): 51% Coverage (LOC): 67%
*- File /root/Targets/rxs.io/node_modules/rxjs/Observer.js. Coverage (Term): 56% Coverage (LOC): 90%
*- File /root/Targets/rxs.io/node_modules/rxjs/symbol/rxSubscriber.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/rxjs/symbol/observable.js. Coverage (Term): 89% Coverage (LOC): 89%
*- File /root/Targets/rxs.io/node_modules/rxjs/util/ObjectUnsubscribedError.js. Coverage (Term): 67% Coverage (LOC): 80%
*- File /root/Targets/rxs.io/node_modules/rxjs/SubjectSubscription.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/lib/index.js. Coverage (Term): 40% Coverage (LOC): 43%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/lib/url.js. Coverage (Term): 38% Coverage (LOC): 48%
*- File /root/Targets/rxs.io/node_modules/parseuri/index.js. Coverage (Term): 21% Coverage (LOC): 57%
*- File /root/Targets/rxs.io/node_modules/debug/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/rxs.io/node_modules/debug/node.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/rxs.io/node_modules/debug/debug.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/rxs.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/index.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/node_modules/debug/node.js. Coverage (Term): 30% Coverage (LOC): 41%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/node_modules/debug/debug.js. Coverage (Term): 35% Coverage (LOC): 42%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/ms/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/rxs.io/node_modules/json3/lib/json3.js. Coverage (Term): 19% Coverage (LOC): 16%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/node_modules/component-emitter/index.js. Coverage (Term): 26% Coverage (LOC): 35%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/binary.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/rxs.io/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js. Coverage (Term): 45% Coverage (LOC): 80%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/lib/manager.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/socket.js. Coverage (Term): 9% Coverage (LOC): 13%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transports/index.js. Coverage (Term): 30% Coverage (LOC): 30%
*- File /root/Targets/rxs.io/node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transports/polling-xhr.js. Coverage (Term): 13% Coverage (LOC): 18%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transports/polling.js. Coverage (Term): 21% Coverage (LOC): 25%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transport.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/rxs.io/node_modules/engine.io-parser/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/engine.io-parser/lib/index.js. Coverage (Term): 7% Coverage (LOC): 15%
*- File /root/Targets/rxs.io/node_modules/wtf-8/wtf-8.js. Coverage (Term): 16% Coverage (LOC): 19%
*- File /root/Targets/rxs.io/node_modules/after/index.js. Coverage (Term): 20% Coverage (LOC): 24%
*- File /root/Targets/rxs.io/node_modules/engine.io-parser/lib/keys.js. Coverage (Term): 33% Coverage (LOC): 33%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/component-emitter/index.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/rxs.io/node_modules/parseqs/index.js. Coverage (Term): 16% Coverage (LOC): 27%
*- File /root/Targets/rxs.io/node_modules/component-inherit/index.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/yeast/index.js. Coverage (Term): 40% Coverage (LOC): 46%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transports/polling-jsonp.js. Coverage (Term): 12% Coverage (LOC): 14%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/lib/transports/websocket.js. Coverage (Term): 19% Coverage (LOC): 24%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/index.js. Coverage (Term): 47% Coverage (LOC): 52%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/WebSocket.js. Coverage (Term): 8% Coverage (LOC): 10%
*- File /root/Targets/rxs.io/node_modules/ultron/index.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/rxs.io/node_modules/options/lib/options.js. Coverage (Term): 6% Coverage (LOC): 6%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Sender.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/ErrorCodes.js. Coverage (Term): 46% Coverage (LOC): 94%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/BufferUtil.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/BufferUtil.fallback.js. Coverage (Term): 6% Coverage (LOC): 15%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/PerMessageDeflate.js. Coverage (Term): 8% Coverage (LOC): 13%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Receiver.js. Coverage (Term): 5% Coverage (LOC): 9%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Validation.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Validation.fallback.js. Coverage (Term): 67% Coverage (LOC): 83%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/BufferPool.js. Coverage (Term): 12% Coverage (LOC): 17%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Sender.hixie.js. Coverage (Term): 17% Coverage (LOC): 28%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Receiver.hixie.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/Extensions.js. Coverage (Term): 10% Coverage (LOC): 15%
*- File /root/Targets/rxs.io/node_modules/engine.io-client/node_modules/ws/lib/WebSocketServer.js. Coverage (Term): 5% Coverage (LOC): 4%
*- File /root/Targets/rxs.io/node_modules/indexof/index.js. Coverage (Term): 33% Coverage (LOC): 42%
*- File /root/Targets/rxs.io/node_modules/parsejson/index.js. Coverage (Term): 37% Coverage (LOC): 50%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/lib/socket.js. Coverage (Term): 19% Coverage (LOC): 28%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/node_modules/component-emitter/index.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/rxs.io/node_modules/to-array/index.js. Coverage (Term): 30% Coverage (LOC): 40%
*- File /root/Targets/rxs.io/node_modules/socket.io-client/lib/on.js. Coverage (Term): 40% Coverage (LOC): 50%
*- File /root/Targets/rxs.io/node_modules/component-bind/index.js. Coverage (Term): 28% Coverage (LOC): 42%
*- File /root/Targets/rxs.io/node_modules/has-binary/index.js. Coverage (Term): 15% Coverage (LOC): 17%
*- File /root/Targets/rxs.io/node_modules/backo2/index.js. Coverage (Term): 22% Coverage (LOC): 45%
*- File /root/Targets/rxs.io/node_modules/rxs.io/dist/SocketPacketSubject.js. Coverage (Term): 16% Coverage (LOC): 17%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 4 paths with 3 errors **
