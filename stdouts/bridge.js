/root/Targets/bridge.js
└─┬ bridge.js@2.10.0 
  ├─┬ crypto-shuffle@1.0.1 
  │ └─┬ get-random-values@1.2.0 
  │   └─┬ global@4.3.2 
  │     ├─┬ min-document@2.19.0 
  │     │ └── dom-walk@0.1.1 
  │     └── process@0.5.2 
  └─┬ pbn@1.5.0 
    ├── buffer-peek-stream@1.0.1 
    ├─┬ lstream@0.0.4 
    │ └─┬ readable-stream@2.3.3 
    │   ├── core-util-is@1.0.2 
    │   ├── inherits@2.0.3 
    │   ├── isarray@1.0.0 
    │   ├── process-nextick-args@1.0.7 
    │   ├── safe-buffer@5.1.1 
    │   ├── string_decoder@1.0.3 
    │   └── util-deprecate@1.0.2 
    └─┬ multipipe@1.0.2 
      ├── duplexer2@0.1.4 
      └── object-assign@4.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/bridge.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 43% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0425 took 5.2263s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/bridge.js/node_modules/bridge.js/index.js. Coverage (Term): 82% Coverage (LOC): 100%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/bridge.js. Coverage (Term): 48% Coverage (LOC): 59%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/card.js. Coverage (Term): 80% Coverage (LOC): 94%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/bid.js. Coverage (Term): 89% Coverage (LOC): 89%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/seat.js. Coverage (Term): 82% Coverage (LOC): 80%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/competition.js. Coverage (Term): 70% Coverage (LOC): 83%
*- File /root/Targets/bridge.js/node_modules/bridge.js/lib/session.js. Coverage (Term): 3% Coverage (LOC): 5%
*- File /root/Targets/bridge.js/node_modules/pbn/index.js. Coverage (Term): 82% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
