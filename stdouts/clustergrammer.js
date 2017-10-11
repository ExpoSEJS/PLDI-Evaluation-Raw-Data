/root/Targets/clustergrammer.js
└─┬ clustergrammer.js@1.4.7 
  └─┬ jquery@1.5.1
    └─┬ jsdom@0.1.20
      └── request@2.83.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/clustergrammer.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 15% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0884 took 66.5184s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: d3 is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/clustergrammer.js/node_modules/clustergrammer.js/clustergrammer.node.js. Coverage (Term): 8% Coverage (LOC): 14%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
