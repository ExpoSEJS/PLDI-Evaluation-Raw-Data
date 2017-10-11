/root/Targets/pixi.js
└── pixi.js@4.5.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pixi.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 37% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","getOwnPropertyNames","fromCharCode","join","assign","now"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0742 took 7.7419s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/pixi.js/node_modules/pixi.js/lib/index.js. Coverage (Term): 17% Coverage (LOC): 12%
*- File /root/Targets/pixi.js/node_modules/pixi.js/lib/polyfill/index.js. Coverage (Term): 42% Coverage (LOC): 39%
*- File /root/Targets/pixi.js/node_modules/pixi.js/lib/polyfill/Object.assign.js. Coverage (Term): 86% Coverage (LOC): 90%
*- File /root/Targets/pixi.js/node_modules/object-assign/index.js. Coverage (Term): 54% Coverage (LOC): 53%
*- File /root/Targets/pixi.js/node_modules/pixi.js/lib/polyfill/requestAnimationFrame.js. Coverage (Term): 56% Coverage (LOC): 65%
*- File /root/Targets/pixi.js/node_modules/pixi.js/lib/polyfill/Math.sign.js. Coverage (Term): 34% Coverage (LOC): 42%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
