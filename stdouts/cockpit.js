/root/Targets/cockpit.js
└── cockpit.js@0.0.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/cockpit.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 30% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 30% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 26% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 26% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 26% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 26% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound ","reduce","parseInt","charCodeAt","abs","Number","captureStackTrace","cwd","max","getFileName","getLineNumber","getColumnNumber","isEval","getFunctionName","create","toUpperCase","join","call","RegExp","getOwnPropertyNames","getOwnPropertyDescriptor","isArray","Array","Date","getUTCFullYear","getUTCMonth","getUTCDate","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","stringify","parse","fromCharCode","assign","bind","freeze","Boolean","setPrototypeOf"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0382 took 4.8328s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0} start 4.9606 took 107.4488s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'port' of undefined
* Error: SyntaxError: Unexpected token u in JSON at position 0
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 113.4965 took 33.0497s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: Cannot read property 'port' of null
* Error: TypeError: Cannot read property 'elements' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 63% Coverage (LOC): 65%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 22% Coverage (LOC): 40%
*- File /root/Targets/cockpit.js/node_modules/cockpit.js/index.js. Coverage (Term): 34% Coverage (LOC): 33%
*- File /root/Targets/cockpit.js/node_modules/express/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/express/lib/express.js. Coverage (Term): 86% Coverage (LOC): 97%
*- File /root/Targets/cockpit.js/node_modules/merge-descriptors/index.js. Coverage (Term): 83% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/express/lib/application.js. Coverage (Term): 47% Coverage (LOC): 55%
*- File /root/Targets/cockpit.js/node_modules/finalhandler/index.js. Coverage (Term): 16% Coverage (LOC): 21%
*- File /root/Targets/cockpit.js/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/cockpit.js/node_modules/debug/src/debug.js. Coverage (Term): 47% Coverage (LOC): 51%
*- File /root/Targets/cockpit.js/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/encodeurl/index.js. Coverage (Term): 63% Coverage (LOC): 89%
*- File /root/Targets/cockpit.js/node_modules/escape-html/index.js. Coverage (Term): 16% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/on-finished/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/ee-first/index.js. Coverage (Term): 9% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/parseurl/index.js. Coverage (Term): 15% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/statuses/index.js. Coverage (Term): 56% Coverage (LOC): 67%
*- File /root/Targets/cockpit.js/node_modules/unpipe/index.js. Coverage (Term): 16% Coverage (LOC): 20%
*- File /root/Targets/cockpit.js/node_modules/express/lib/router/index.js. Coverage (Term): 20% Coverage (LOC): 26%
*- File /root/Targets/cockpit.js/node_modules/express/lib/router/route.js. Coverage (Term): 36% Coverage (LOC): 39%
*- File /root/Targets/cockpit.js/node_modules/array-flatten/array-flatten.js. Coverage (Term): 54% Coverage (LOC): 63%
*- File /root/Targets/cockpit.js/node_modules/express/lib/router/layer.js. Coverage (Term): 34% Coverage (LOC): 33%
*- File /root/Targets/cockpit.js/node_modules/path-to-regexp/index.js. Coverage (Term): 37% Coverage (LOC): 37%
*- File /root/Targets/cockpit.js/node_modules/methods/index.js. Coverage (Term): 59% Coverage (LOC): 27%
*- File /root/Targets/cockpit.js/node_modules/utils-merge/index.js. Coverage (Term): 76% Coverage (LOC): 80%
*- File /root/Targets/cockpit.js/node_modules/depd/index.js. Coverage (Term): 32% Coverage (LOC): 34%
*- File /root/Targets/cockpit.js/node_modules/depd/lib/compat/index.js. Coverage (Term): 87% Coverage (LOC): 97%
*- File /root/Targets/cockpit.js/node_modules/setprototypeof/index.js. Coverage (Term): 32% Coverage (LOC): 38%
*- File /root/Targets/cockpit.js/node_modules/express/lib/middleware/init.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/cockpit.js/node_modules/express/lib/middleware/query.js. Coverage (Term): 65% Coverage (LOC): 74%
*- File /root/Targets/cockpit.js/node_modules/qs/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/qs/lib/stringify.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/qs/lib/utils.js. Coverage (Term): 12% Coverage (LOC): 19%
*- File /root/Targets/cockpit.js/node_modules/qs/lib/formats.js. Coverage (Term): 61% Coverage (LOC): 87%
*- File /root/Targets/cockpit.js/node_modules/qs/lib/parse.js. Coverage (Term): 7% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/express/lib/view.js. Coverage (Term): 22% Coverage (LOC): 30%
*- File /root/Targets/cockpit.js/node_modules/express/lib/utils.js. Coverage (Term): 38% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/content-disposition/index.js. Coverage (Term): 12% Coverage (LOC): 20%
*- File /root/Targets/cockpit.js/node_modules/content-type/index.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/send/index.js. Coverage (Term): 13% Coverage (LOC): 20%
*- File /root/Targets/cockpit.js/node_modules/http-errors/index.js. Coverage (Term): 46% Coverage (LOC): 40%
*- File /root/Targets/cockpit.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File eval. Coverage (Term): 38% Coverage (LOC): 50%
*- File /root/Targets/cockpit.js/node_modules/destroy/index.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/cockpit.js/node_modules/etag/index.js. Coverage (Term): 16% Coverage (LOC): 32%
*- File /root/Targets/cockpit.js/node_modules/fresh/index.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/mime/mime.js. Coverage (Term): 56% Coverage (LOC): 75%
*- File /root/Targets/cockpit.js/node_modules/range-parser/index.js. Coverage (Term): 8% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/proxy-addr/index.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/cockpit.js/node_modules/forwarded/index.js. Coverage (Term): 14% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/ipaddr.js/lib/ipaddr.js. Coverage (Term): 27% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/express/lib/request.js. Coverage (Term): 26% Coverage (LOC): 40%
*- File /root/Targets/cockpit.js/node_modules/accepts/index.js. Coverage (Term): 16% Coverage (LOC): 23%
*- File /root/Targets/cockpit.js/node_modules/negotiator/index.js. Coverage (Term): 33% Coverage (LOC): 47%
*- File /root/Targets/cockpit.js/node_modules/mime-types/index.js. Coverage (Term): 48% Coverage (LOC): 51%
*- File /root/Targets/cockpit.js/node_modules/mime-db/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/type-is/index.js. Coverage (Term): 13% Coverage (LOC): 20%
*- File /root/Targets/cockpit.js/node_modules/media-typer/index.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/cockpit.js/node_modules/express/lib/response.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/cockpit.js/node_modules/cookie-signature/index.js. Coverage (Term): 19% Coverage (LOC): 40%
*- File /root/Targets/cockpit.js/node_modules/cookie/index.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/vary/index.js. Coverage (Term): 10% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/serve-static/index.js. Coverage (Term): 28% Coverage (LOC): 34%
*- File /root/Targets/cockpit.js/node_modules/socket.io/lib/index.js. Coverage (Term): 49% Coverage (LOC): 57%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/engine.io.js. Coverage (Term): 49% Coverage (LOC): 53%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/server.js. Coverage (Term): 32% Coverage (LOC): 37%
*- File /root/Targets/cockpit.js/node_modules/base64id/lib/base64id.js. Coverage (Term): 13% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transports/index.js. Coverage (Term): 64% Coverage (LOC): 71%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transports/polling-xhr.js. Coverage (Term): 32% Coverage (LOC): 41%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transports/polling.js. Coverage (Term): 12% Coverage (LOC): 16%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transport.js. Coverage (Term): 38% Coverage (LOC): 55%
*- File /root/Targets/cockpit.js/node_modules/engine.io-parser/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/engine.io-parser/lib/index.js. Coverage (Term): 7% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/wtf-8/wtf-8.js. Coverage (Term): 16% Coverage (LOC): 19%
*- File /root/Targets/cockpit.js/node_modules/after/index.js. Coverage (Term): 20% Coverage (LOC): 24%
*- File /root/Targets/cockpit.js/node_modules/engine.io-parser/lib/keys.js. Coverage (Term): 33% Coverage (LOC): 33%
*- File /root/Targets/cockpit.js/node_modules/engine.io/node_modules/debug/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/engine.io/node_modules/debug/node.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/cockpit.js/node_modules/engine.io/node_modules/debug/debug.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/engine.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/engine.io/node_modules/accepts/index.js. Coverage (Term): 16% Coverage (LOC): 23%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transports/polling-jsonp.js. Coverage (Term): 33% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/transports/websocket.js. Coverage (Term): 24% Coverage (LOC): 31%
*- File /root/Targets/cockpit.js/node_modules/engine.io/lib/socket.js. Coverage (Term): 9% Coverage (LOC): 14%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/lib/index.js. Coverage (Term): 28% Coverage (LOC): 30%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/lib/url.js. Coverage (Term): 14% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/parseuri/index.js. Coverage (Term): 21% Coverage (LOC): 57%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/node_modules/debug/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/node_modules/debug/node.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/node_modules/debug/debug.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/index.js. Coverage (Term): 18% Coverage (LOC): 26%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/node_modules/debug/node.js. Coverage (Term): 30% Coverage (LOC): 41%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/node_modules/debug/debug.js. Coverage (Term): 35% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/node_modules/ms/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/json3/lib/json3.js. Coverage (Term): 19% Coverage (LOC): 16%
*- File /root/Targets/cockpit.js/node_modules/component-emitter/index.js. Coverage (Term): 26% Coverage (LOC): 35%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/binary.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/cockpit.js/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/cockpit.js/node_modules/socket.io-parser/is-buffer.js. Coverage (Term): 45% Coverage (LOC): 80%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/lib/manager.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/socket.js. Coverage (Term): 9% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transports/index.js. Coverage (Term): 30% Coverage (LOC): 30%
*- File /root/Targets/cockpit.js/node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transports/polling-xhr.js. Coverage (Term): 13% Coverage (LOC): 18%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transports/polling.js. Coverage (Term): 21% Coverage (LOC): 25%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transport.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/component-emitter/index.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/cockpit.js/node_modules/parseqs/index.js. Coverage (Term): 16% Coverage (LOC): 27%
*- File /root/Targets/cockpit.js/node_modules/component-inherit/index.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/yeast/index.js. Coverage (Term): 40% Coverage (LOC): 46%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/debug/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/debug/node.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/debug/debug.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transports/polling-jsonp.js. Coverage (Term): 12% Coverage (LOC): 14%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/lib/transports/websocket.js. Coverage (Term): 19% Coverage (LOC): 24%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/index.js. Coverage (Term): 47% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/WebSocket.js. Coverage (Term): 8% Coverage (LOC): 10%
*- File /root/Targets/cockpit.js/node_modules/ultron/index.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/cockpit.js/node_modules/options/lib/options.js. Coverage (Term): 42% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Sender.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/ErrorCodes.js. Coverage (Term): 46% Coverage (LOC): 94%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/BufferUtil.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/BufferUtil.fallback.js. Coverage (Term): 6% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/PerMessageDeflate.js. Coverage (Term): 8% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Receiver.js. Coverage (Term): 5% Coverage (LOC): 9%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Validation.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Validation.fallback.js. Coverage (Term): 67% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/BufferPool.js. Coverage (Term): 12% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Sender.hixie.js. Coverage (Term): 17% Coverage (LOC): 28%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Receiver.hixie.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/Extensions.js. Coverage (Term): 10% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/engine.io-client/node_modules/ws/lib/WebSocketServer.js. Coverage (Term): 5% Coverage (LOC): 4%
*- File /root/Targets/cockpit.js/node_modules/indexof/index.js. Coverage (Term): 33% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/parsejson/index.js. Coverage (Term): 37% Coverage (LOC): 50%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/lib/socket.js. Coverage (Term): 19% Coverage (LOC): 28%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/node_modules/component-emitter/index.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/cockpit.js/node_modules/to-array/index.js. Coverage (Term): 30% Coverage (LOC): 40%
*- File /root/Targets/cockpit.js/node_modules/socket.io-client/lib/on.js. Coverage (Term): 40% Coverage (LOC): 50%
*- File /root/Targets/cockpit.js/node_modules/component-bind/index.js. Coverage (Term): 28% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/has-binary/index.js. Coverage (Term): 15% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/backo2/index.js. Coverage (Term): 22% Coverage (LOC): 45%
*- File /root/Targets/cockpit.js/node_modules/socket.io/lib/client.js. Coverage (Term): 13% Coverage (LOC): 21%
*- File /root/Targets/cockpit.js/node_modules/socket.io/node_modules/debug/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/socket.io/node_modules/debug/node.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/cockpit.js/node_modules/socket.io/node_modules/debug/debug.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/socket.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/socket.io/lib/namespace.js. Coverage (Term): 32% Coverage (LOC): 42%
*- File /root/Targets/cockpit.js/node_modules/socket.io/lib/socket.js. Coverage (Term): 17% Coverage (LOC): 28%
*- File /root/Targets/cockpit.js/node_modules/object-assign/index.js. Coverage (Term): 52% Coverage (LOC): 53%
*- File /root/Targets/cockpit.js/node_modules/socket.io-adapter/index.js. Coverage (Term): 14% Coverage (LOC): 19%
*- File /root/Targets/cockpit.js/node_modules/ws/index.js. Coverage (Term): 47% Coverage (LOC): 52%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/WebSocket.js. Coverage (Term): 8% Coverage (LOC): 10%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Sender.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/ErrorCodes.js. Coverage (Term): 46% Coverage (LOC): 94%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/BufferUtil.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/BufferUtil.fallback.js. Coverage (Term): 6% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/PerMessageDeflate.js. Coverage (Term): 8% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Receiver.js. Coverage (Term): 5% Coverage (LOC): 9%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Validation.js. Coverage (Term): 88% Coverage (LOC): 100%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Validation.fallback.js. Coverage (Term): 67% Coverage (LOC): 83%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/BufferPool.js. Coverage (Term): 12% Coverage (LOC): 17%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Sender.hixie.js. Coverage (Term): 17% Coverage (LOC): 28%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Receiver.hixie.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/Extensions.js. Coverage (Term): 10% Coverage (LOC): 15%
*- File /root/Targets/cockpit.js/node_modules/ws/lib/WebSocketServer.js. Coverage (Term): 10% Coverage (LOC): 11%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 3 paths with 2 errors **
