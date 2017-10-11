/root/Targets/node.io
└── node.io@0.5.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/node.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 44% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","cwd"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0471 took 8.3621s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Object.prototype.__defineGetter__: Expecting function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/node.io/node_modules/node.io/lib/node.io/index.js. Coverage (Term): 11% Coverage (LOC): 9%
*- File /root/Targets/node.io/node_modules/node.io/lib/node.io/processor.js. Coverage (Term): 4% Coverage (LOC): 2%
*- File /root/Targets/node.io/node_modules/node.io/lib/node.io/utils.js. Coverage (Term): 31% Coverage (LOC): 66%
*- File /root/Targets/node.io/node_modules/sigmund/sigmund.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/node.io/node_modules/node.io/lib/node.io/job.js. Coverage (Term): 13% Coverage (LOC): 26%
*- File /root/Targets/node.io/node_modules/node.io/vendor/validator/lib/index.js. Coverage (Term): 56% Coverage (LOC): 69%
*- File /root/Targets/node.io/node_modules/node.io/vendor/validator/lib/validator.js. Coverage (Term): 16% Coverage (LOC): 29%
*- File /root/Targets/node.io/node_modules/node.io/vendor/validator/lib/filter.js. Coverage (Term): 24% Coverage (LOC): 48%
*- File /root/Targets/node.io/node_modules/node.io/vendor/validator/lib/entities.js. Coverage (Term): 69% Coverage (LOC): 93%
*- File /root/Targets/node.io/node_modules/node.io/vendor/validator/lib/xss.js. Coverage (Term): 13% Coverage (LOC): 35%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
