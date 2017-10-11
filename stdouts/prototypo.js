/root/Targets/prototypo.js
└─┬ prototypo.js@1.16.8 
  ├─┬ babel-plugin-transform-flow-strip-types@6.22.0 
  │ ├── babel-plugin-syntax-flow@6.18.0 
  │ └─┬ babel-runtime@6.26.0 
  │   ├── core-js@2.5.1 
  │   └── regenerator-runtime@0.11.0 
  ├── deptree@0.1.0 
  ├── if-loader@1.0.2 
  ├── lodash.assign@4.2.0 
  ├── lodash.clonedeep@4.5.0 
  └── plumin.js@1.10.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/prototypo.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1037 took 4.6117s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
