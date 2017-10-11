/root/Targets/alw-prismic.io
└── alw-prismic.io@4.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/alw-prismic.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 21% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1089 took 7.5533s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/prismic.js. Coverage (Term): 17% Coverage (LOC): 11%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/experiments.js. Coverage (Term): 19% Coverage (LOC): 41%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/predicates.js. Coverage (Term): 9% Coverage (LOC): 21%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/api.js. Coverage (Term): 7% Coverage (LOC): 16%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/requests.js. Coverage (Term): 7% Coverage (LOC): 11%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/cookies.js. Coverage (Term): 17% Coverage (LOC): 22%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/documents.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/cache.js. Coverage (Term): 20% Coverage (LOC): 38%
*- File /root/Targets/alw-prismic.io/node_modules/alw-prismic.io/lib/lru.js. Coverage (Term): 12% Coverage (LOC): 19%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
