/root/Targets/enigma.js
└── enigma.js@2.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/enigma.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 26% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 26% coverage ] ****** [2 done /0 queued / 0 running / 0 errors / 27% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","bind","create","setPrototypeOf","toString","apply","bound Qix"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0645 took 12.0279s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"Target_Switcher":0} start 12.2136 took 9.2893s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 65% Coverage (LOC): 68%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/enigma.js/node_modules/enigma.js/enigma.js. Coverage (Term): 11% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 0 errors **
