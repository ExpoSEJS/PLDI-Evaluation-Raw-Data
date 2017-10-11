/root/Targets/iobroker.javascript
└─┬ iobroker.javascript@3.4.0 
  └── request@2.83.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/iobroker.javascript/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 67% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","freeze","RegExp","toUpperCase","getFunction","isNative","isEval","getFileName","getLineNumber","getColumnNumber","getFunctionName","isConstructor","isToplevel","getMethodName","getTypeName","toString","join"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0523 took 94.9008s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: Hoek is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/iobroker.javascript/node_modules/iobroker.javascript/javascript.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-compiler/coffee-compiler.js. Coverage (Term): 14% Coverage (LOC): 23%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/coffee-script.js. Coverage (Term): 29% Coverage (LOC): 32%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/lexer.js. Coverage (Term): 13% Coverage (LOC): 27%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/rewriter.js. Coverage (Term): 11% Coverage (LOC): 28%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/helpers.js. Coverage (Term): 11% Coverage (LOC): 22%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/parser.js. Coverage (Term): 69% Coverage (LOC): 95%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/sourcemap.js. Coverage (Term): 17% Coverage (LOC): 22%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/nodes.js. Coverage (Term): 15% Coverage (LOC): 27%
*- File /root/Targets/iobroker.javascript/node_modules/coffee-script/lib/coffee-script/scope.js. Coverage (Term): 14% Coverage (LOC): 24%
*- File /root/Targets/iobroker.javascript/node_modules/node-schedule/lib/schedule.js. Coverage (Term): 12% Coverage (LOC): 13%
*- File /root/Targets/iobroker.javascript/node_modules/cron-parser/lib/parser.js. Coverage (Term): 16% Coverage (LOC): 26%
*- File /root/Targets/iobroker.javascript/node_modules/cron-parser/lib/expression.js. Coverage (Term): 10% Coverage (LOC): 30%
*- File /root/Targets/iobroker.javascript/node_modules/cron-parser/lib/date.js. Coverage (Term): 11% Coverage (LOC): 27%
*- File /root/Targets/iobroker.javascript/node_modules/long-timeout/index.js. Coverage (Term): 23% Coverage (LOC): 35%
*- File /root/Targets/iobroker.javascript/node_modules/sorted-array-functions/index.js. Coverage (Term): 11% Coverage (LOC): 19%
*- File /root/Targets/iobroker.javascript/node_modules/suncalc/suncalc.js. Coverage (Term): 13% Coverage (LOC): 39%
*- File /root/Targets/iobroker.javascript/node_modules/request/index.js. Coverage (Term): 25% Coverage (LOC): 30%
*- File /root/Targets/iobroker.javascript/node_modules/extend/index.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/iobroker.javascript/node_modules/request/lib/cookies.js. Coverage (Term): 33% Coverage (LOC): 52%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/cookie.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/pubsuffix.js. Coverage (Term): 98% Coverage (LOC): 99%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/store.js. Coverage (Term): 41% Coverage (LOC): 74%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/memstore.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/permuteDomain.js. Coverage (Term): 25% Coverage (LOC): 27%
*- File /root/Targets/iobroker.javascript/node_modules/tough-cookie/lib/pathMatch.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/iobroker.javascript/node_modules/request/lib/helpers.js. Coverage (Term): 35% Coverage (LOC): 55%
*- File /root/Targets/iobroker.javascript/node_modules/json-stringify-safe/stringify.js. Coverage (Term): 14% Coverage (LOC): 27%
*- File /root/Targets/iobroker.javascript/node_modules/safe-buffer/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/iobroker.javascript/node_modules/request/request.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/iobroker.javascript/node_modules/hawk/lib/index.js. Coverage (Term): 30% Coverage (LOC): 38%
*- File /root/Targets/iobroker.javascript/node_modules/boom/lib/index.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
