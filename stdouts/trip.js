/root/Targets/trip.js
└─┬ trip.js@3.3.3 
  ├── grunt-text-replace@0.4.0 
  └── jquery@2.2.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/trip.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 5% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 5% coverage ] ****** [2 done /0 queued / 0 running / 1 errors / 5% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","join","toString","apply","bound Trip"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.1219 took 33.0624s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1} start 33.6869 took 24.0054s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 57% Coverage (LOC): 62%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/trip.js/node_modules/trip.js/dist/trip.js. Coverage (Term): 14% Coverage (LOC): 25%
*- File /root/Targets/trip.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 1 errors **
