/root/Targets/rasmify.js
└── rasmify.js@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/rasmify.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 38% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 38% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 44% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 44% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 45% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 45% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 46% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 46% coverage ] ****** [5 done /0 queued / 0 running / 4 errors / 46% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound rasmify"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 23.0592 took 86.6865s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0} start 109.81 took 3.1288s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'replace' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 112.961 took 1.5249s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: Cannot read property 'replace' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 114.5048 took 1.4629s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4} start 115.9811 took 320.2328s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 63% Coverage (LOC): 65%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 23% Coverage (LOC): 41%
*- File /root/Targets/rasmify.js/node_modules/rasmify.js/rasmify.js. Coverage (Term): 22% Coverage (LOC): 75%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 5 paths with 4 errors **
