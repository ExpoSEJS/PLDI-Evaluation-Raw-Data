/root/Targets/diva.js
└─┬ diva.js@5.1.3 
  ├─┬ debug@2.6.9 
  │ └── ms@2.0.0 
  ├── jquery@2.1.4 
  └── lodash.maxby@4.6.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/diva.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 2% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0386 took 22.7611s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot set property 'dragscrollable' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/diva.js/node_modules/diva.js/build/js/diva.js. Coverage (Term): 2% Coverage (LOC): 3%
*- File /root/Targets/diva.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
