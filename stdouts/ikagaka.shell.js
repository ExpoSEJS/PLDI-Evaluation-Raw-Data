/root/Targets/ikagaka.shell.js
└─┬ ikagaka.shell.js@4.3.5 
  └── surfaces_txt2yaml@2.1.0  (git://github.com/legokichi/surfaces_txt2yaml.git#b4716c8994d7faa903710dff1e4ab0a8a40a09ce)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.shell.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 51% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","charCodeAt","apply","Uint8Array","sort","create","RegExp","call","setPrototypeOf","Array"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0569 took 71.1549s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ikagaka.shell.js/node_modules/ikagaka.shell.js/lib/index.js. Coverage (Term): 79% Coverage (LOC): 93%
*- File /root/Targets/ikagaka.shell.js/node_modules/ikagaka.shell.js/lib/SurfaceRender.js. Coverage (Term): 7% Coverage (LOC): 16%
*- File /root/Targets/ikagaka.shell.js/node_modules/ikagaka.shell.js/lib/SurfaceUtil.js. Coverage (Term): 8% Coverage (LOC): 17%
*- File /root/Targets/ikagaka.shell.js/node_modules/encoding-japanese/encoding.js. Coverage (Term): 60% Coverage (LOC): 89%
*- File /root/Targets/ikagaka.shell.js/node_modules/ikagaka.shell.js/lib/Surface.js. Coverage (Term): 7% Coverage (LOC): 9%
*- File /root/Targets/ikagaka.shell.js/node_modules/eventemitter3/index.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/ikagaka.shell.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/ikagaka.shell.js/node_modules/ikagaka.shell.js/lib/Shell.js. Coverage (Term): 7% Coverage (LOC): 11%
*- File /root/Targets/ikagaka.shell.js/node_modules/surfaces_txt2yaml/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/surfaces_txt2yaml/lib/surfaces_txt2yaml.js. Coverage (Term): 10% Coverage (LOC): 19%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml.js. Coverage (Term): 92% Coverage (LOC): 97%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/loader.js. Coverage (Term): 7% Coverage (LOC): 7%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/common.js. Coverage (Term): 27% Coverage (LOC): 42%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/exception.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/mark.js. Coverage (Term): 12% Coverage (LOC): 20%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema.js. Coverage (Term): 66% Coverage (LOC): 65%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type.js. Coverage (Term): 80% Coverage (LOC): 92%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema/core.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema/json.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/str.js. Coverage (Term): 67% Coverage (LOC): 89%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/seq.js. Coverage (Term): 67% Coverage (LOC): 89%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/map.js. Coverage (Term): 67% Coverage (LOC): 89%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/null.js. Coverage (Term): 33% Coverage (LOC): 66%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/bool.js. Coverage (Term): 26% Coverage (LOC): 67%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/int.js. Coverage (Term): 10% Coverage (LOC): 25%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/float.js. Coverage (Term): 17% Coverage (LOC): 24%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/timestamp.js. Coverage (Term): 23% Coverage (LOC): 28%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/merge.js. Coverage (Term): 68% Coverage (LOC): 90%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/binary.js. Coverage (Term): 10% Coverage (LOC): 21%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/omap.js. Coverage (Term): 27% Coverage (LOC): 36%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/pairs.js. Coverage (Term): 20% Coverage (LOC): 29%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/set.js. Coverage (Term): 42% Coverage (LOC): 52%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/schema/default_full.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js. Coverage (Term): 55% Coverage (LOC): 79%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js. Coverage (Term): 17% Coverage (LOC): 33%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/type/js/function.js. Coverage (Term): 19% Coverage (LOC): 43%
*- File /root/Targets/ikagaka.shell.js/node_modules/esprima/dist/esprima.js. Coverage (Term): 14% Coverage (LOC): 24%
*- File /root/Targets/ikagaka.shell.js/node_modules/js-yaml/lib/js-yaml/dumper.js. Coverage (Term): 10% Coverage (LOC): 20%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
