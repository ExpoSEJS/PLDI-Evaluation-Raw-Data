/root/Targets/asciidoctor.js
└── asciidoctor.js@1.5.6-preview.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/asciidoctor.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 3% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","create","Error","join","Array","apply"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1062 took 126.294s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property '$new' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/asciidoctor.js/node_modules/asciidoctor.js/dist/asciidoctor.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/asciidoctor.js/node_modules/opal-runtime/src/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/asciidoctor.js/node_modules/opal-runtime/src/opal.js. Coverage (Term): 6% Coverage (LOC): 8%
*- File /root/Targets/asciidoctor.js/node_modules/opal-runtime/src/nodejs.js. Coverage (Term): 1% Coverage (LOC): 3%
*- File /root/Targets/asciidoctor.js/node_modules/opal-runtime/src/pathname.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/asciidoctor.js/node_modules/opal-runtime/src/base64.js. Coverage (Term): 3% Coverage (LOC): 6%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
