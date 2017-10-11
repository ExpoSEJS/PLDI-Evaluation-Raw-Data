/root/Targets/ml-rest.js
└─┬ ml-rest.js@1.0.0-2 
  ├─┬ node-fetch@1.7.3 
  │ ├─┬ encoding@0.1.12 
  │ │ └── iconv-lite@0.4.19 
  │ └── is-stream@1.1.0 
  ├── url-search-params@0.5.0 
  ├── whatwg-fetch@1.1.1 
  └─┬ whatwg-url@2.0.1 
    ├── tr46@0.0.3 
    └── webidl-conversions@3.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ml-rest.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 21% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0407 took 11.9202s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ml-rest.js/node_modules/ml-rest.js/rest-node.js. Coverage (Term): 76% Coverage (LOC): 91%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/index.js. Coverage (Term): 12% Coverage (LOC): 13%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/lib/body.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/ml-rest.js/node_modules/encoding/lib/encoding.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/ml-rest.js/node_modules/iconv-lite/lib/index.js. Coverage (Term): 27% Coverage (LOC): 36%
*- File /root/Targets/ml-rest.js/node_modules/iconv-lite/lib/bom-handling.js. Coverage (Term): 27% Coverage (LOC): 42%
*- File /root/Targets/ml-rest.js/node_modules/iconv-lite/lib/streams.js. Coverage (Term): 25% Coverage (LOC): 35%
*- File /root/Targets/ml-rest.js/node_modules/iconv-lite/lib/extend-node.js. Coverage (Term): 6% Coverage (LOC): 8%
*- File /root/Targets/ml-rest.js/node_modules/encoding/lib/iconv-loader.js. Coverage (Term): 84% Coverage (LOC): 100%
*- File /root/Targets/ml-rest.js/node_modules/is-stream/index.js. Coverage (Term): 24% Coverage (LOC): 72%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/lib/fetch-error.js. Coverage (Term): 41% Coverage (LOC): 42%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/lib/response.js. Coverage (Term): 37% Coverage (LOC): 42%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/lib/headers.js. Coverage (Term): 18% Coverage (LOC): 34%
*- File /root/Targets/ml-rest.js/node_modules/node-fetch/lib/request.js. Coverage (Term): 21% Coverage (LOC): 28%
*- File /root/Targets/ml-rest.js/node_modules/ml-rest.js/rest.js. Coverage (Term): 4% Coverage (LOC): 4%
*- File /root/Targets/ml-rest.js/node_modules/whatwg-url/lib/public-api.js. Coverage (Term): 23% Coverage (LOC): 42%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
