/root/Targets/human.js
└─┬ human.js@0.1.0 
  └── ramda@0.21.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/human.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 0 errors / 40% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","apply","isArray","Array","min","max","reverse"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0615 took 20.6218s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 43% Coverage (LOC): 51%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/human.js/node_modules/human.js/dist/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/human.js/node_modules/human.js/dist/rules/no-loops.js. Coverage (Term): 56% Coverage (LOC): 45%
*- File /root/Targets/human.js/node_modules/human.js/dist/rules/no-numeric-literal-calls.js. Coverage (Term): 60% Coverage (LOC): 53%
*- File /root/Targets/human.js/node_modules/ramda/dist/ramda.js. Coverage (Term): 25% Coverage (LOC): 40%
*- File /root/Targets/human.js/node_modules/human.js/dist/rules/no-plus-new.js. Coverage (Term): 44% Coverage (LOC): 37%
*- File /root/Targets/human.js/node_modules/human.js/dist/rules/no-bang-bang.js. Coverage (Term): 49% Coverage (LOC): 43%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 0 errors **
