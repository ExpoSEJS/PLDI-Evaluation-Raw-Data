/root/Targets/alchemy.js
└─┬ alchemy.js@1.1.1 
  ├─┬ coquo-venenum@1.1.1 
  │ └── deligare@1.1.2 
  ├── immutabilis@2.0.4 
  ├── pro-singulis@1.2.0 
  └─┬ virtual-dom@2.1.1 
    ├── browser-split@0.0.1 
    ├─┬ error@4.4.0 
    │ ├── camelize@1.0.0 
    │ ├── string-template@0.2.1 
    │ └── xtend@4.0.1 
    ├─┬ ev-store@7.0.0 
    │ └── individual@3.0.0 
    ├─┬ global@4.3.2 
    │ ├─┬ min-document@2.19.0 
    │ │ └── dom-walk@0.1.1 
    │ └── process@0.5.2 
    ├── is-object@1.0.1 
    ├── next-tick@0.2.2 
    ├── x-is-array@0.1.0 
    └── x-is-string@0.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/alchemy.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 32% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","now","create","isArray"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0492 took 11.006s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/index.js. Coverage (Term): 37% Coverage (LOC): 40%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/lib/Administrator.js. Coverage (Term): 16% Coverage (LOC): 29%
*- File /root/Targets/alchemy.js/node_modules/immutabilis/src/immutabilis.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/alchemy.js/node_modules/pro-singulis/src/each.js. Coverage (Term): 19% Coverage (LOC): 24%
*- File /root/Targets/alchemy.js/node_modules/coquo-venenum/src/coquo-venenum.js. Coverage (Term): 43% Coverage (LOC): 53%
*- File /root/Targets/alchemy.js/node_modules/deligare/src/deligare.js. Coverage (Term): 58% Coverage (LOC): 67%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/lib/Utils.js. Coverage (Term): 21% Coverage (LOC): 35%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/lib/Apothecarius.js. Coverage (Term): 14% Coverage (LOC): 25%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/lib/Applicatus.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/alchemy.js/node_modules/alchemy.js/lib/Observari.js. Coverage (Term): 18% Coverage (LOC): 27%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
