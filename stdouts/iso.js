/root/Targets/iso.js
└─┬ iso.js@0.0.7 
  ├── es6-enum@1.1.0 
  ├── immutable@3.8.2 
  ├── stats.js@1.0.0 
  ├── three@0.75.0 
  └── three-orbit-controls@72.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/iso.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 21% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","assign","Float32Array","Array","create","Uint16Array","random","join","floor","isArray","defineProperties","call","sin","cos","sqrt","isFinite","pow","round","splice","apply","bound Enum","from","Symbol","setPrototypeOf"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.102 took 142.5136s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Iso.js. Coverage (Term): 11% Coverage (LOC): 11%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Camera.js. Coverage (Term): 24% Coverage (LOC): 32%
*- File /root/Targets/iso.js/node_modules/three/three.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Scene.js. Coverage (Term): 17% Coverage (LOC): 24%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Mesh.js. Coverage (Term): 29% Coverage (LOC): 34%
*- File /root/Targets/iso.js/node_modules/es6-enum/dist/enum.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Cube.js. Coverage (Term): 23% Coverage (LOC): 32%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Tile.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/iso.js/node_modules/iso.js/build/Renderer.js. Coverage (Term): 28% Coverage (LOC): 41%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
