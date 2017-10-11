/root/Targets/intro.js
└── intro.js@2.8.0-alpha.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/intro.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /1 queued / 1 running / 1 errors / 14.000000000000002% coverage ] ****** [1 done /0 queued / 2 running / 1 errors / 14.000000000000002% coverage ] ****** [1 done /0 queued / 2 running / 1 errors / 14.000000000000002% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 14.000000000000002% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0} start 0.028 took 4.9474s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"_bound":1} start 5.0595 took 4.4201s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 81% Coverage (LOC): 86%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 21% Coverage (LOC): 39%
*- File /root/Targets/intro.js/node_modules/intro.js/intro.js. Coverage (Term): 3% Coverage (LOC): 7%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 1 errors **
