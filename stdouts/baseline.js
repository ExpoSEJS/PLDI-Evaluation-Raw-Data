/root/Targets/baseline.js
└─┬ baseline.js@1.2.0 
  └─┬ mocha@2.1.0 
    ├── commander@2.3.0 
    ├─┬ debug@2.0.0 
    │ └── ms@0.6.2 
    ├── diff@1.0.8 
    ├── escape-string-regexp@1.0.2 
    ├─┬ glob@3.2.3 
    │ ├── graceful-fs@2.0.3 
    │ ├── inherits@2.0.3 
    │ └─┬ minimatch@0.2.14 
    │   ├── lru-cache@2.7.3 
    │   └── sigmund@1.0.1 
    ├── growl@1.8.1 
    ├─┬ jade@0.26.3 
    │ ├── commander@0.6.1 
    │ └── mkdirp@0.3.0 
    └─┬ mkdirp@0.5.0 
      └── minimist@0.0.8 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/baseline.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 0 errors / 26% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","pow","Date","getTimezoneOffset","floor","bind","bound call","getOwnPropertyDescriptor","freeze"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0795 took 16.6558s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 39% Coverage (LOC): 43%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/baseline.js/node_modules/baseline.js/build/baseline.js. Coverage (Term): 16% Coverage (LOC): 24%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 0 errors **
