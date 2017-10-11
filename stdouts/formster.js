/root/Targets/formster.js
└─┬ formster.js@0.4.1 
  ├── qs@0.6.6 
  ├─┬ randomstring@1.1.5 
  │ └── array-uniq@1.0.2 
  └── reqwest@1.1.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/formster.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 19% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Set","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0233 took 4.658s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/formster.js/node_modules/formster.js/src/formster.js. Coverage (Term): 5% Coverage (LOC): 7%
*- File /root/Targets/formster.js/node_modules/formster.js/src/api.js. Coverage (Term): 7% Coverage (LOC): 7%
*- File /root/Targets/formster.js/node_modules/formster.js/src/cookies.js. Coverage (Term): 8% Coverage (LOC): 25%
*- File /root/Targets/formster.js/node_modules/randomstring/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/formster.js/node_modules/randomstring/lib/randomstring.js. Coverage (Term): 15% Coverage (LOC): 17%
*- File /root/Targets/formster.js/node_modules/randomstring/lib/charset.js. Coverage (Term): 23% Coverage (LOC): 33%
*- File /root/Targets/formster.js/node_modules/array-uniq/index.js. Coverage (Term): 37% Coverage (LOC): 45%
*- File /root/Targets/formster.js/node_modules/formster.js/src/lib/keen_track.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/formster.js/node_modules/reqwest/reqwest.js. Coverage (Term): 4% Coverage (LOC): 6%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
