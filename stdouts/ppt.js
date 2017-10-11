/root/Targets/ppt.js
└─┬ ppt.js@1.1.1 
  ├─┬ mditor@1.2.9 
  │ ├── font-awesome@4.7.0 
  │ ├── github-markdown-css@2.8.0 
  │ ├── marked@0.3.6 
  │ ├── ntils@2.1.2 
  │ ├─┬ prismjs@1.8.1 
  │ │ └─┬ clipboard@1.7.1 
  │ │   ├─┬ good-listener@1.2.2 
  │ │   │ └── delegate@3.1.3 
  │ │   ├── select@1.1.2 
  │ │   └── tiny-emitter@2.0.2 
  │ └── shortcut-key@1.0.0 
  ├─┬ mokit@3.1.3 
  │ └── cify@2.1.11 
  ├─┬ mokit-router@1.0.8 
  │ ├── general-router@0.0.3 
  │ └── mokit-plugin@1.0.5 
  └── mokit-touch@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ppt.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 31% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0499 took 6.5501s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: mokit is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ppt.js/node_modules/ppt.js/src/app.js. Coverage (Term): 4% Coverage (LOC): 5%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
