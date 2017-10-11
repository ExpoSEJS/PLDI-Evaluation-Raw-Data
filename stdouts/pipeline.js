/root/Targets/pipeline.js
└─┬ pipeline.js@0.4.8 
  ├── colors@1.1.2 
  ├─┬ comparator.js@0.0.10 
  │ └── diff@3.3.1 
  ├─┬ debug@3.1.0 
  │ └── ms@2.0.0 
  ├─┬ fte.js@0.6.0 
  │ ├─┬ escodegen@1.9.0 
  │ │ ├── estraverse@4.2.0 
  │ │ ├── esutils@2.0.2 
  │ │ ├─┬ optionator@0.8.2 
  │ │ │ ├── deep-is@0.1.3 
  │ │ │ ├── fast-levenshtein@2.0.6 
  │ │ │ ├── levn@0.3.0 
  │ │ │ ├── prelude-ls@1.1.2 
  │ │ │ ├── type-check@0.3.2 
  │ │ │ └── wordwrap@1.0.0 
  │ │ └── source-map@0.5.7 
  │ ├─┬ esmangle2@1.0.11 
  │ │ ├─┬ camel-case@1.2.2 
  │ │ │ ├─┬ sentence-case@1.1.3 
  │ │ │ │ └── lower-case@1.1.4 
  │ │ │ └── upper-case@1.1.3 
  │ │ ├─┬ escodegen@1.8.1 
  │ │ │ ├── estraverse@1.9.3 
  │ │ │ ├── optionator@0.8.2 
  │ │ │ └─┬ source-map@0.2.0 
  │ │ │   └── amdefine@1.0.1 
  │ │ ├─┬ escope@3.6.0 
  │ │ │ ├─┬ es6-map@0.1.5 
  │ │ │ │ ├── d@1.0.0 
  │ │ │ │ ├── es5-ext@0.10.30 
  │ │ │ │ ├── es6-iterator@2.0.1 
  │ │ │ │ ├── es6-set@0.1.5 
  │ │ │ │ ├── es6-symbol@3.1.1 
  │ │ │ │ └── event-emitter@0.3.5 
  │ │ │ ├── es6-weak-map@2.0.2 
  │ │ │ └─┬ esrecurse@4.2.0 
  │ │ │   └── object-assign@4.1.1 
  │ │ ├── esprima@2.7.3 
  │ │ ├─┬ esshorten2@1.1.20 
  │ │ │ └── estraverse@4.1.1 
  │ │ ├── estraverse@4.1.1 
  │ │ ├── isarray@0.0.1 
  │ │ └─┬ optionator@0.5.0 
  │ │   ├── fast-levenshtein@1.0.7 
  │ │   ├── levn@0.2.5 
  │ │   └── wordwrap@0.0.3 
  │ ├── esprima@3.1.3 
  │ ├─┬ esvalid@1.1.0 
  │ │ ├── esutils@1.1.6 
  │ │ └── object-assign@0.3.1 
  │ ├─┬ fs-extra@0.30.0 
  │ │ ├── graceful-fs@4.1.11 
  │ │ ├── jsonfile@2.4.0 
  │ │ ├── klaw@1.3.1 
  │ │ ├── path-is-absolute@1.0.1 
  │ │ └── rimraf@2.6.2 
  │ ├─┬ glob@7.1.2 
  │ │ ├── fs.realpath@1.0.0 
  │ │ ├─┬ inflight@1.0.6 
  │ │ │ └── wrappy@1.0.2 
  │ │ ├── inherits@2.0.3 
  │ │ ├─┬ minimatch@3.0.4 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ └── once@1.4.0 
  │ └── pegjs@0.10.0 
  ├── js-schema@1.0.1 
  └── semver@5.4.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pipeline.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 30% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","bind","create","bound push","RegExp","apply","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0275 took 9.9651s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: factory_1 is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/pipeline.js/node_modules/pipeline.js/index.js. Coverage (Term): 13% Coverage (LOC): 24%
*- File /root/Targets/pipeline.js/node_modules/pipeline.js/lib/stage.js. Coverage (Term): 12% Coverage (LOC): 14%
*- File /root/Targets/pipeline.js/node_modules/js-schema/index.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/schema.js. Coverage (Term): 27% Coverage (LOC): 39%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/BaseSchema.js. Coverage (Term): 53% Coverage (LOC): 57%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/reference.js. Coverage (Term): 25% Coverage (LOC): 40%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/nothing.js. Coverage (Term): 50% Coverage (LOC): 65%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/anything.js. Coverage (Term): 46% Coverage (LOC): 59%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/object.js. Coverage (Term): 12% Coverage (LOC): 14%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/or.js. Coverage (Term): 14% Coverage (LOC): 22%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/equality.js. Coverage (Term): 21% Coverage (LOC): 35%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/regexp.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/class.js. Coverage (Term): 24% Coverage (LOC): 33%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/patterns/schema.js. Coverage (Term): 64% Coverage (LOC): 71%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Boolean.js. Coverage (Term): 47% Coverage (LOC): 57%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Number.js. Coverage (Term): 31% Coverage (LOC): 49%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/String.js. Coverage (Term): 27% Coverage (LOC): 75%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Object.js. Coverage (Term): 65% Coverage (LOC): 80%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Array.js. Coverage (Term): 17% Coverage (LOC): 22%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Function.js. Coverage (Term): 64% Coverage (LOC): 83%
*- File /root/Targets/pipeline.js/node_modules/js-schema/lib/extensions/Schema.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/pipeline.js/node_modules/pipeline.js/lib/util.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/pipeline.js/node_modules/semver/semver.js. Coverage (Term): 27% Coverage (LOC): 29%
*- File /root/Targets/pipeline.js/node_modules/fte.js/dist/node/index.js. Coverage (Term): 6% Coverage (LOC): 8%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
