/root/Targets/ikagaka.balloon.js
└─┬ ikagaka.balloon.js@4.0.0 
  └─┬ ikagaka.shell.js@5.0.0  (git://github.com/ikagaka/Shell.js.git#875fd5ff3befbed41c6d8760270265ec24aeec64)
    └── surfaces_txt2yaml@2.1.0  (git://github.com/legokichi/surfaces_txt2yaml.git#b4716c8994d7faa903710dff1e4ab0a8a40a09ce)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.balloon.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 19% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0158 took 2.8645s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'ikagaka.shell.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ikagaka.balloon.js/node_modules/ikagaka.balloon.js/es5/index.js. Coverage (Term): 29% Coverage (LOC): 42%
*- File /root/Targets/ikagaka.balloon.js/node_modules/ikagaka.balloon.js/es5/Balloon.js. Coverage (Term): 4% Coverage (LOC): 5%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
