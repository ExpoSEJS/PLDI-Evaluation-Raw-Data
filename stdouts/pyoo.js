/root/Targets/pyoo.js
└─┬ pyoo.js@2.2.0 
  ├─┬ jasmine@2.8.0 
  │ ├── exit@0.1.2 
  │ ├─┬ glob@7.1.2 
  │ │ ├── fs.realpath@1.0.0 
  │ │ ├─┬ inflight@1.0.6 
  │ │ │ └── wrappy@1.0.2 
  │ │ ├── inherits@2.0.3 
  │ │ ├─┬ minimatch@3.0.4 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ ├── once@1.4.0 
  │ │ └── path-is-absolute@1.0.1 
  │ └── jasmine-core@2.8.0 
  └── lodash@4.17.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pyoo.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 35% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 35% coverage ] ****** [2 done /0 queued / 0 running / 1 errors / 35% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","RegExp","join","binding","Object","WeakMap","create","Set","Array","ArrayBuffer","DataView","Map","resolve","max","now","apply","toString","bound Classe","Error"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0199 took 23.5028s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1} start 23.8449 took 118.5386s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1}
* Error: Error: pyoo.js: Esperado object, obteve undefined.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 57% Coverage (LOC): 62%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/pyoo.js/node_modules/pyoo.js/src/pyoo.js. Coverage (Term): 14% Coverage (LOC): 14%
*- File /root/Targets/pyoo.js/node_modules/lodash/lodash.js. Coverage (Term): 22% Coverage (LOC): 35%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 1 errors **
