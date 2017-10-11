- debug@2.6.7 node_modules/helmet/node_modules/debug
- debug@2.6.8 node_modules/method-override/node_modules/debug
/root/Targets/pump.io
└─┬ pump.io@5.0.0 
  ├─┬ helmet@3.8.2 
  │ └─┬ connect@3.6.5 
  │   ├── finalhandler@1.0.6 
  │   └── utils-merge@1.0.1 
  └── method-override@2.3.10 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pump.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0773 took 6.3699s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'pump.io'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
