/root/Targets/allong.es
└─┬ allong.es@0.14.0 
  └─┬ promise@8.0.1 
    └── asap@2.0.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/allong.es/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 0 errors / 34% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","max","Array","apply"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0494 took 18.4202s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 43% Coverage (LOC): 51%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/allong.es/node_modules/allong.es/lib/allong.es.js. Coverage (Term): 23% Coverage (LOC): 38%
*- File /root/Targets/allong.es/node_modules/promise/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/allong.es/node_modules/promise/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/allong.es/node_modules/promise/lib/core.js. Coverage (Term): 16% Coverage (LOC): 22%
*- File /root/Targets/allong.es/node_modules/asap/raw.js. Coverage (Term): 26% Coverage (LOC): 28%
*- File /root/Targets/allong.es/node_modules/promise/lib/done.js. Coverage (Term): 41% Coverage (LOC): 54%
*- File /root/Targets/allong.es/node_modules/promise/lib/finally.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/allong.es/node_modules/promise/lib/es6-extensions.js. Coverage (Term): 22% Coverage (LOC): 27%
*- File /root/Targets/allong.es/node_modules/promise/lib/node-extensions.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/allong.es/node_modules/asap/asap.js. Coverage (Term): 28% Coverage (LOC): 29%
*- File /root/Targets/allong.es/node_modules/promise/lib/synchronous.js. Coverage (Term): 14% Coverage (LOC): 18%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 0 errors **
