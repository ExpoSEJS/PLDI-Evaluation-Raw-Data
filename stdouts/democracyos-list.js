/root/Targets/democracyos-list.js
└─┬ democracyos-list.js@1.1.4 
  ├── component-classes@1.2.4 
  ├── component-indexof@0.0.3 
  ├── component-type@1.2.1 
  ├── democracyos-extend@1.0.0 
  ├── democracyos-get-attribute@0.0.1 
  ├── democracyos-get-by-class@0.0.1 
  ├─┬ democracyos-javve-events@0.0.4 
  │ ├── component-event@0.1.4 
  │ └── democracyos-to-array@0.2.1 
  ├── democracyos-natural-sort@1.0.0 
  └── democracyos-to-string@0.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/democracyos-list.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 20% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0403 took 4.8772s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/democracyos-list.js/node_modules/democracyos-list.js/index.js. Coverage (Term): 2% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
