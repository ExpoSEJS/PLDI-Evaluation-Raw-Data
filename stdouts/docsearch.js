/root/Targets/docsearch.js
└─┬ docsearch.js@2.4.1 
  ├─┬ algoliasearch@3.24.4 
  │ ├── agentkeepalive@2.2.0 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├─┬ envify@4.1.0 
  │ │ ├── esprima@4.0.0 
  │ │ └── through@2.3.8 
  │ ├── es6-promise@4.1.1 
  │ ├── events@1.1.1 
  │ ├── foreach@2.0.5 
  │ ├─┬ global@4.3.2 
  │ │ ├─┬ min-document@2.19.0 
  │ │ │ └── dom-walk@0.1.1 
  │ │ └── process@0.5.2 
  │ ├── inherits@2.0.3 
  │ ├── isarray@2.0.2 
  │ ├── load-script@1.0.0 
  │ ├── object-keys@1.0.11 
  │ ├── querystring-es3@0.2.1 
  │ ├── reduce@1.0.1 
  │ ├── semver@5.4.1 
  │ └─┬ tunnel-agent@0.6.0 
  │   └── safe-buffer@5.1.1 
  ├─┬ autocomplete.js@0.28.3 
  │ └── immediate@3.2.3 
  ├─┬ hogan.js@3.0.2 
  │ ├── mkdirp@0.3.0 
  │ └─┬ nopt@1.0.10 
  │   └── abbrev@1.1.0 
  └── to-factory@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/docsearch.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 22% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","reduce","parseInt","charCodeAt","abs","RegExp","join"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0798 took 15.4997s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/docsearch.js/node_modules/docsearch.js/dist/npm/index.js. Coverage (Term): 41% Coverage (LOC): 75%
*- File /root/Targets/docsearch.js/node_modules/docsearch.js/dist/npm/src/lib/main.js. Coverage (Term): 60% Coverage (LOC): 67%
*- File /root/Targets/docsearch.js/node_modules/to-factory/to-factory.js. Coverage (Term): 28% Coverage (LOC): 43%
*- File /root/Targets/docsearch.js/node_modules/docsearch.js/dist/npm/src/lib/DocSearch.js. Coverage (Term): 7% Coverage (LOC): 7%
*- File /root/Targets/docsearch.js/node_modules/hogan.js/lib/hogan.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/hogan.js/lib/compiler.js. Coverage (Term): 9% Coverage (LOC): 22%
*- File /root/Targets/docsearch.js/node_modules/hogan.js/lib/template.js. Coverage (Term): 8% Coverage (LOC): 16%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/lite.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/server/builds/node.js. Coverage (Term): 16% Coverage (LOC): 20%
*- File /root/Targets/docsearch.js/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/docsearch.js/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/docsearch.js/node_modules/debug/src/debug.js. Coverage (Term): 47% Coverage (LOC): 51%
*- File /root/Targets/docsearch.js/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/docsearch.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/docsearch.js/node_modules/semver/semver.js. Coverage (Term): 47% Coverage (LOC): 50%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/places.js. Coverage (Term): 22% Coverage (LOC): 19%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/buildSearchMethod.js. Coverage (Term): 18% Coverage (LOC): 18%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/errors.js. Coverage (Term): 40% Coverage (LOC): 50%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/server/builds/AlgoliaSearchServer.js. Coverage (Term): 32% Coverage (LOC): 39%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/AlgoliaSearch.js. Coverage (Term): 27% Coverage (LOC): 27%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/Index.js. Coverage (Term): 11% Coverage (LOC): 14%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/IndexCore.js. Coverage (Term): 16% Coverage (LOC): 18%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/deprecate.js. Coverage (Term): 56% Coverage (LOC): 58%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/deprecatedMessage.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/exitPromise.js. Coverage (Term): 57% Coverage (LOC): 80%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/AlgoliaSearchCore.js. Coverage (Term): 9% Coverage (LOC): 15%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/store.js. Coverage (Term): 27% Coverage (LOC): 45%
*- File /root/Targets/docsearch.js/node_modules/algoliasearch/src/version.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/autocomplete.js/index.js. Coverage (Term): 82% Coverage (LOC): 100%
*- File /root/Targets/docsearch.js/node_modules/autocomplete.js/src/standalone/index.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/docsearch.js/node_modules/autocomplete.js/zepto.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
