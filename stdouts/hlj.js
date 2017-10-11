/root/Targets/hlj.js
└─┬ hlj.js@1.1.0 
  └─┬ axios@0.15.3 
    └─┬ follow-redirects@1.0.0 
      └─┬ debug@2.6.9 
        └── ms@2.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hlj.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 43% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","Error"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0421 took 5.478s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: regeneratorRuntime is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/hlj.js/node_modules/hlj.js/hlj.js. Coverage (Term): 30% Coverage (LOC): 45%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
