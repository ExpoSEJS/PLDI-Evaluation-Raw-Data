+ sd.js@0.4.0
updated 1 package in 0.399s
Setup Done exists, not setting up
:../FeatureTester/libs/:/home/pbai002/Targets/sd.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /home/pbai002/ExpoSE/lib/Harness/src/harness.js max concurrent: 32 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 28.999999999999996% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound consoleCall"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0073 took 0.5414s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: common is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/pbai002/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /home/pbai002/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /home/pbai002/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /home/pbai002/Targets/sd.js/node_modules/sd.js/lib/sd.js. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
