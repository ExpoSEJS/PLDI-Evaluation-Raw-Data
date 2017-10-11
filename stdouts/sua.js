/root/Targets/sua.js
└─┬ sua.js@2.1.0 
  └─┬ uglify-js@3.1.2 
    ├── commander@2.11.0 
    └── source-map@0.5.7 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/sua.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 27% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 27% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 32% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 32% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 32% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 32% coverage ] ****** [4 done /1 queued / 1 running / 3 errors / 33% coverage ] ****** [4 done /0 queued / 2 running / 3 errors / 33% coverage ] ****** [4 done /0 queued / 2 running / 3 errors / 33% coverage ] ****** [5 done /0 queued / 1 running / 4 errors / 33% coverage ] ****** [6 done /3 queued / 1 running / 4 errors / 49% coverage ] ****** [6 done /2 queued / 2 running / 4 errors / 49% coverage ] ****** [6 done /1 queued / 3 running / 4 errors / 49% coverage ] ****** [6 done /0 queued / 4 running / 4 errors / 49% coverage ] ****** [6 done /0 queued / 4 running / 4 errors / 49% coverage ] ****** [7 done /1 queued / 4 running / 5 errors / 55.00000000000001% coverage ] ****** [7 done /0 queued / 5 running / 5 errors / 55.00000000000001% coverage ] ****** [7 done /0 queued / 5 running / 5 errors / 55.00000000000001% coverage ] ****** [8 done /0 queued / 4 running / 6 errors / 55.00000000000001% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound SUA","Error"]
*-- regex: 32
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0379 took 3.4939s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0} start 3.6071 took 3.7331s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0}
* Error: Error: useragent setup error. useragent not found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 7.3711 took 3.8365s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: Error: useragent setup error. useragent not found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 11.2648 took 3.8503s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: Error: useragent setup error. useragent not found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"_bound":5} start 15.1721 took 3.9616s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"_bound":5}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4,"ExpansionArg_string":"PureString","Target_Switcher":0} start 15.1488 took 723.8298s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5,"ExpansionArg_array_length":0} start 741.8329 took 154.0321s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":6} start 749.3036 took 146.5613s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":6}
* Error: Error: useragent setup error. useragent not found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":6}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 74% Coverage (LOC): 78%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 35% Coverage (LOC): 54%
*- File /root/Targets/sua.js/node_modules/sua.js/sua.js. Coverage (Term): 53% Coverage (LOC): 51%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 8 paths with 6 errors **
