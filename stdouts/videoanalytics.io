/root/Targets/videoanalytics.io
└─┬ videoanalytics.io@0.1.3 
  └── lodash@4.17.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/videoanalytics.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 36% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 36% coverage ] ****** [2 done /0 queued / 0 running / 0 errors / 36% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","RegExp","join","binding","Object","WeakMap","create","Set","Array","ArrayBuffer","DataView","Map","resolve","max","now","apply","toString","bound VideoAnalyticsIO"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0309 took 30.5745s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"Target_Switcher":0} start 31.0356 took 27.1266s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 69% Coverage (LOC): 76%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/videoanalytics.io/node_modules/videoanalytics.io/dist/videoanalytics.io.js. Coverage (Term): 23% Coverage (LOC): 36%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 0 errors **
