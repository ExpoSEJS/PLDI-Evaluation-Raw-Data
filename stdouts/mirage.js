/root/Targets/mirage.js
└─┬ mirage.js@1.0.0 
  ├── chance@1.0.11 
  ├── lodash@4.17.4 
  ├─┬ pretender@1.6.0 
  │ ├── fake-xml-http-request@1.6.0 
  │ └── route-recognizer@0.3.3 
  └── slash@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/mirage.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 66% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","Object","binding","RegExp","ArrayBuffer","DataView","Map","resolve","Set","WeakMap","create","max","now","apply","charCodeAt","Uint8Array","subarray","toUpperCase"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0444 took 32.81s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: self is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/mirage.js/node_modules/mirage.js/dist/mirage.js. Coverage (Term): 32% Coverage (LOC): 67%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
