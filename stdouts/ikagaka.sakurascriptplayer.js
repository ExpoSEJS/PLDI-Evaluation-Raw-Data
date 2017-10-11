/root/Targets/ikagaka.sakurascriptplayer.js
└─┬ ikagaka.sakurascriptplayer.js@1.2.1 
  └── coffee-script@1.12.7 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.sakurascriptplayer.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 16% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0973 took 9.2708s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot set property 'SakuraScriptPlayer' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ikagaka.sakurascriptplayer.js/node_modules/ikagaka.sakurascriptplayer.js/lib/SakuraScriptPlayer.js. Coverage (Term): 4% Coverage (LOC): 6%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
