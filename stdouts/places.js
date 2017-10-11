/root/Targets/places.js
└── places.js@1.4.15 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/places.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 16% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","reduce","parseInt","charCodeAt","abs"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0452 took 16.8837s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/places.js/node_modules/places.js/index.js. Coverage (Term): 33% Coverage (LOC): 55%
*- File /root/Targets/places.js/node_modules/places.js/src/places.js. Coverage (Term): 11% Coverage (LOC): 9%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/AlgoliaSearchCore.js. Coverage (Term): 9% Coverage (LOC): 15%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/errors.js. Coverage (Term): 40% Coverage (LOC): 50%
*- File /root/Targets/places.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/exitPromise.js. Coverage (Term): 57% Coverage (LOC): 80%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/IndexCore.js. Coverage (Term): 16% Coverage (LOC): 18%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/buildSearchMethod.js. Coverage (Term): 18% Coverage (LOC): 18%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/deprecate.js. Coverage (Term): 56% Coverage (LOC): 58%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/deprecatedMessage.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/store.js. Coverage (Term): 27% Coverage (LOC): 45%
*- File /root/Targets/places.js/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/places.js/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/places.js/node_modules/debug/src/debug.js. Coverage (Term): 44% Coverage (LOC): 48%
*- File /root/Targets/places.js/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/browser/createAlgoliasearch.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/places.js/node_modules/global/window.js. Coverage (Term): 67% Coverage (LOC): 64%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/browser/inline-headers.js. Coverage (Term): 47% Coverage (LOC): 55%
*- File /root/Targets/places.js/node_modules/querystring-es3/encode.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/browser/jsonp-request.js. Coverage (Term): 8% Coverage (LOC): 9%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/places.js. Coverage (Term): 22% Coverage (LOC): 19%
*- File /root/Targets/places.js/node_modules/algoliasearch/src/version.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/places.js/node_modules/autocomplete.js/index.js. Coverage (Term): 82% Coverage (LOC): 100%
*- File /root/Targets/places.js/node_modules/autocomplete.js/src/standalone/index.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/places.js/node_modules/autocomplete.js/zepto.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
