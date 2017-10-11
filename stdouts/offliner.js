/root/Targets/offliner.js
└── offliner.js@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/offliner.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 1 errors / 33% coverage ] ****** [1 done /0 queued / 1 running / 1 errors / 33% coverage ] ****** [2 done /0 queued / 1 running / 2 errors / 33% coverage ] ****** [2 done /0 queued / 1 running / 2 errors / 33% coverage ] ****** [3 done /0 queued / 1 running / 3 errors / 33% coverage ] ****** [3 done /0 queued / 1 running / 3 errors / 33% coverage ] ****** [4 done /0 queued / 0 running / 3 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","bind","toString","apply","bound bound bound log","bound bound bound warn"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0376 took 4.6894s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0}
* Error: TypeError: Cannot read property 'write' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"_bound":1} start 4.8351 took 10.0957s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"_bound":1}
* Error: TypeError: Cannot read property 'write' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"_bound":1}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"_bound":2} start 14.9533 took 3.6833s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"_bound":2}
* Error: TypeError: Cannot read property 'write' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"_bound":3} start 18.6644 took 8.5418s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 76% Coverage (LOC): 84%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/offliner.js/node_modules/offliner.js/dist/offliner.min.js. Coverage (Term): 14% Coverage (LOC): 23%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 4 paths with 3 errors **
