/root/Targets/blear.utils.ua
└── blear.utils.ua@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/blear.utils.ua/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 74% coverage ] ****** [1 done /0 queued / 1 running / 0 errors / 74% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 74% coverage ] ****** [2 done /0 queued / 1 running / 1 errors / 74% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 74% coverage ] ****** [3 done /0 queued / 1 running / 2 errors / 74% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 74% coverage ] ****** [4 done /0 queued / 1 running / 3 errors / 74% coverage ] ****** [5 done /0 queued / 0 running / 4 errors / 74% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0894 took 22.5249s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0} start 23.2986 took 32.8243s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'match' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 56.5929 took 25.7484s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: Cannot read property 'match' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 82.5302 took 12.4995s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4} start 95.3453 took 489.2192s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 63% Coverage (LOC): 65%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 23% Coverage (LOC): 41%
*- File /root/Targets/blear.utils.ua/node_modules/blear.utils.ua/src/index.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/blear.utils.ua/node_modules/blear.utils.ua/src/_ua-test.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/blear.utils.ua/node_modules/blear.utils.ua/src/_ua-map.js. Coverage (Term): 45% Coverage (LOC): 78%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 5 paths with 4 errors **
