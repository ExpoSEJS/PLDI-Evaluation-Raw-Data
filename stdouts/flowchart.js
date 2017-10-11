/root/Targets/flowchart.js
└─┬ flowchart.js@1.7.0 
  └─┬ raphael@2.2.7 
    └── eve-raphael@0.5.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/flowchart.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 4% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","apply"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0596 took 21.7875s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/flowchart.js/node_modules/flowchart.js/index.js. Coverage (Term): 45% Coverage (LOC): 50%
*- File /root/Targets/flowchart.js/node_modules/flowchart.js/src/flowchart.shim.js. Coverage (Term): 9% Coverage (LOC): 12%
*- File /root/Targets/flowchart.js/node_modules/flowchart.js/src/flowchart.parse.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/flowchart.js/node_modules/flowchart.js/src/flowchart.chart.js. Coverage (Term): 3% Coverage (LOC): 4%
*- File /root/Targets/flowchart.js/node_modules/raphael/raphael.min.js. Coverage (Term): 1% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
