/root/Targets/bigbang.io
└── bigbang.io@0.0.18 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/bigbang.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 24% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","reduce","parseInt","charCodeAt","abs"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0464 took 24.0976s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Object.prototype.__defineGetter__: Expecting function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/NodeBigBangClient.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/BigBangClient.js. Coverage (Term): 3% Coverage (LOC): 2%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/PewRuntime.js. Coverage (Term): 27% Coverage (LOC): 49%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/WireProtocol.Protocol.js. Coverage (Term): 20% Coverage (LOC): 49%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/rest/index.js. Coverage (Term): 24% Coverage (LOC): 17%
*- File /root/Targets/bigbang.io/node_modules/bigbang.io/lib/rest/ApiClient.js. Coverage (Term): 6% Coverage (LOC): 5%
*- File /root/Targets/bigbang.io/node_modules/superagent/lib/node/index.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/bigbang.io/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/bigbang.io/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/bigbang.io/node_modules/debug/src/debug.js. Coverage (Term): 44% Coverage (LOC): 48%
*- File /root/Targets/bigbang.io/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/incoming_form.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/file.js. Coverage (Term): 27% Coverage (LOC): 27%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/multipart_parser.js. Coverage (Term): 14% Coverage (LOC): 15%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/querystring_parser.js. Coverage (Term): 34% Coverage (LOC): 52%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/octet_parser.js. Coverage (Term): 51% Coverage (LOC): 63%
*- File /root/Targets/bigbang.io/node_modules/formidable/lib/json_parser.js. Coverage (Term): 28% Coverage (LOC): 41%
*- File /root/Targets/bigbang.io/node_modules/form-data/lib/form_data.js. Coverage (Term): 3% Coverage (LOC): 2%
*- File /root/Targets/bigbang.io/node_modules/combined-stream/lib/combined_stream.js. Coverage (Term): 4% Coverage (LOC): 5%
*- File /root/Targets/bigbang.io/node_modules/delayed-stream/lib/delayed_stream.js. Coverage (Term): 13% Coverage (LOC): 15%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
