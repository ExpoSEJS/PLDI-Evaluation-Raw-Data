/root/Targets/tesseract.js
└─┬ tesseract.js@1.0.10 
  ├── file-type@3.9.0 
  ├── is-url@1.2.2 
  ├── jpeg-js@0.2.0 
  ├─┬ level-js@2.2.4 
  │ ├─┬ abstract-leveldown@0.12.4 
  │ │ └── xtend@3.0.0 
  │ ├── idb-wrapper@1.7.1 
  │ ├── isbuffer@0.0.0 
  │ ├── ltgt@2.2.0 
  │ ├── typedarray-to-buffer@1.0.4 
  │ └─┬ xtend@2.1.2 
  │   └── object-keys@0.4.0 
  ├─┬ node-fetch@1.7.3 
  │ ├─┬ encoding@0.1.12 
  │ │ └── iconv-lite@0.4.19 
  │ └── is-stream@1.1.0 
  ├── object-assign@4.1.1 
  ├── png.js@0.2.1 
  └── tesseract.js-core@1.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/tesseract.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0265 took 2.8329s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
