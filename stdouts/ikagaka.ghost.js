/root/Targets/ikagaka.ghost.js
└─┬ ikagaka.ghost.js@0.3.3 
  ├── aya5.js@0.2.0 
  ├── encoding-japanese@1.0.26 
  ├─┬ ikagaka.nar.js@3.0.3 
  │ ├── ikagaka.wmdescript.js@0.0.0 
  │ ├─┬ jszip@3.1.4 
  │ │ ├── core-js@2.3.0 
  │ │ ├── es6-promise@3.0.2 
  │ │ ├─┬ lie@3.1.1 
  │ │ │ └── immediate@3.0.6 
  │ │ ├── pako@1.0.6 
  │ │ └─┬ readable-stream@2.0.6 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── inherits@2.0.3 
  │ │   ├── isarray@1.0.0 
  │ │   ├── process-nextick-args@1.0.7 
  │ │   ├── string_decoder@0.10.31 
  │ │   └── util-deprecate@1.0.2 
  │ └─┬ uupaa.xhrproxy.js@0.0.7 
  │   ├── uupaa.datatype.js@0.1.2 
  │   ├── uupaa.wmevent.js@0.0.2 
  │   └── uupaa.wmurl.js@0.1.9 
  ├── kawari.js@0.2.0 
  ├── kawari7.js@0.2.0 
  ├── libsatori.js@159.3.0 
  ├── nativeshiori@2.3.0 
  └── yaya.js@1.2.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.ghost.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 16% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0496 took 3.7693s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'Nar' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ikagaka.ghost.js/node_modules/ikagaka.ghost.js/Ghost.js. Coverage (Term): 2% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
