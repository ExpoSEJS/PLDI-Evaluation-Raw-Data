/root/Targets/merlin.js
└─┬ merlin.js@1.4.0 
  ├── bluebird@3.5.0 
  ├─┬ lodash.contains@2.4.3 
  │ ├── lodash._baseindexof@2.4.1 
  │ ├─┬ lodash.forown@2.4.1 
  │ │ ├─┬ lodash._basecreatecallback@2.4.1 
  │ │ │ ├─┬ lodash._setbinddata@2.4.1 
  │ │ │ │ └── lodash.noop@2.4.1 
  │ │ │ ├─┬ lodash.bind@2.4.1 
  │ │ │ │ ├─┬ lodash._createwrapper@2.4.1 
  │ │ │ │ │ ├─┬ lodash._basebind@2.4.1 
  │ │ │ │ │ │ └── lodash._basecreate@2.4.1 
  │ │ │ │ │ ├── lodash._basecreatewrapper@2.4.1 
  │ │ │ │ │ └── lodash.isfunction@2.4.1 
  │ │ │ │ └── lodash._slice@2.4.1 
  │ │ │ ├── lodash.identity@2.4.1 
  │ │ │ └── lodash.support@2.4.1 
  │ │ ├── lodash._objecttypes@2.4.1 
  │ │ └─┬ lodash.keys@2.4.1 
  │ │   ├── lodash._shimkeys@2.4.1 
  │ │   └── lodash.isobject@2.4.1 
  │ ├─┬ lodash.isarray@2.4.1 
  │ │ └── lodash._isnative@2.4.1 
  │ └── lodash.isstring@2.4.1 
  ├─┬ lodash.foreach@3.0.3 
  │ ├── lodash._arrayeach@3.0.0 
  │ ├─┬ lodash._baseeach@3.0.4 
  │ │ └─┬ lodash.keys@3.1.2 
  │ │   ├── lodash._getnative@3.9.1 
  │ │   ├── lodash.isarguments@3.1.0 
  │ │   └── lodash.isarray@3.0.4 
  │ ├── lodash._bindcallback@3.0.1 
  │ └── lodash.isarray@3.0.4 
  ├── lodash.isboolean@3.0.3 
  ├── lodash.isfunction@3.0.8 
  ├── lodash.isnan@3.0.2 
  ├── lodash.isnull@3.0.0 
  ├── lodash.isnumber@3.0.3 
  ├── lodash.isregexp@3.0.5 
  ├── lodash.isstring@3.0.1 
  ├── lodash.isundefined@3.0.1 
  ├─┬ superagent@1.8.5 
  │ ├── component-emitter@1.2.1 
  │ ├── cookiejar@2.0.6 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├── extend@3.0.0 
  │ ├─┬ form-data@1.0.0-rc3 
  │ │ ├── async@1.5.2 
  │ │ ├─┬ combined-stream@1.0.5 
  │ │ │ └── delayed-stream@1.0.0 
  │ │ └─┬ mime-types@2.1.17 
  │ │   └── mime-db@1.30.0 
  │ ├── formidable@1.0.17 
  │ ├── methods@1.1.2 
  │ ├── mime@1.3.4 
  │ ├── qs@2.3.3 
  │ ├─┬ readable-stream@1.0.27-1 
  │ │ ├── core-util-is@1.0.2 
  │ │ ├── inherits@2.0.3 
  │ │ ├── isarray@0.0.1 
  │ │ └── string_decoder@0.10.31 
  │ └── reduce-component@1.0.1 
  └── superagent-bluebird-promise@3.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/merlin.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 23% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp","Error","call","Promise","Array","join","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0217 took 22.2568s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/merlin.js/node_modules/merlin.js/dist/merlin.node.js. Coverage (Term): 1% Coverage (LOC): 0%
*- File /root/Targets/merlin.js/node_modules/lodash.isstring/index.js. Coverage (Term): 48% Coverage (LOC): 80%
*- File /root/Targets/merlin.js/node_modules/lodash.isnumber/index.js. Coverage (Term): 48% Coverage (LOC): 80%
*- File /root/Targets/merlin.js/node_modules/lodash.contains/index.js. Coverage (Term): 30% Coverage (LOC): 32%
*- File /root/Targets/merlin.js/node_modules/lodash._baseindexof/index.js. Coverage (Term): 29% Coverage (LOC): 36%
*- File /root/Targets/merlin.js/node_modules/lodash.forown/index.js. Coverage (Term): 27% Coverage (LOC): 28%
*- File /root/Targets/merlin.js/node_modules/lodash._basecreatecallback/index.js. Coverage (Term): 22% Coverage (LOC): 17%
*- File /root/Targets/merlin.js/node_modules/lodash.bind/index.js. Coverage (Term): 49% Coverage (LOC): 83%
*- File /root/Targets/merlin.js/node_modules/lodash._createwrapper/index.js. Coverage (Term): 18% Coverage (LOC): 13%
*- File /root/Targets/merlin.js/node_modules/lodash._basebind/index.js. Coverage (Term): 36% Coverage (LOC): 35%
*- File /root/Targets/merlin.js/node_modules/lodash._basecreate/index.js. Coverage (Term): 44% Coverage (LOC): 44%
*- File /root/Targets/merlin.js/node_modules/lodash._isnative/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/merlin.js/node_modules/lodash.isobject/index.js. Coverage (Term): 61% Coverage (LOC): 83%
*- File /root/Targets/merlin.js/node_modules/lodash._objecttypes/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/merlin.js/node_modules/lodash.noop/index.js. Coverage (Term): 79% Coverage (LOC): 100%
*- File /root/Targets/merlin.js/node_modules/lodash._setbinddata/index.js. Coverage (Term): 80% Coverage (LOC): 82%
*- File /root/Targets/merlin.js/node_modules/lodash._slice/index.js. Coverage (Term): 21% Coverage (LOC): 31%
*- File /root/Targets/merlin.js/node_modules/lodash._basecreatewrapper/index.js. Coverage (Term): 20% Coverage (LOC): 16%
*- File /root/Targets/merlin.js/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js. Coverage (Term): 61% Coverage (LOC): 80%
*- File /root/Targets/merlin.js/node_modules/lodash.identity/index.js. Coverage (Term): 68% Coverage (LOC): 80%
*- File /root/Targets/merlin.js/node_modules/lodash.support/index.js. Coverage (Term): 87% Coverage (LOC): 90%
*- File /root/Targets/merlin.js/node_modules/lodash.keys/index.js. Coverage (Term): 72% Coverage (LOC): 64%
*- File /root/Targets/merlin.js/node_modules/lodash._shimkeys/index.js. Coverage (Term): 42% Coverage (LOC): 39%
*- File /root/Targets/merlin.js/node_modules/lodash.isarray/index.js. Coverage (Term): 63% Coverage (LOC): 91%
*- File /root/Targets/merlin.js/node_modules/lodash.contains/node_modules/lodash.isstring/index.js. Coverage (Term): 54% Coverage (LOC): 88%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/bluebird.js. Coverage (Term): 53% Coverage (LOC): 62%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/promise.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/util.js. Coverage (Term): 36% Coverage (LOC): 49%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/es5.js. Coverage (Term): 45% Coverage (LOC): 52%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/async.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/schedule.js. Coverage (Term): 21% Coverage (LOC): 27%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/queue.js. Coverage (Term): 20% Coverage (LOC): 37%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/errors.js. Coverage (Term): 46% Coverage (LOC): 62%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/thenables.js. Coverage (Term): 18% Coverage (LOC): 22%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/promise_array.js. Coverage (Term): 16% Coverage (LOC): 25%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/context.js. Coverage (Term): 27% Coverage (LOC): 41%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/debuggability.js. Coverage (Term): 15% Coverage (LOC): 24%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/finally.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/catch_filter.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/nodeback.js. Coverage (Term): 22% Coverage (LOC): 28%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/method.js. Coverage (Term): 20% Coverage (LOC): 28%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/bind.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/cancel.js. Coverage (Term): 24% Coverage (LOC): 34%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/direct_resolve.js. Coverage (Term): 25% Coverage (LOC): 38%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/synchronous_inspection.js. Coverage (Term): 32% Coverage (LOC): 56%
*- File /root/Targets/merlin.js/node_modules/bluebird/js/release/join.js. Coverage (Term): 36% Coverage (LOC): 37%
*- File evalIndirect. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
