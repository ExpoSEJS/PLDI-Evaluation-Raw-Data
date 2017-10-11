/root/Targets/obelisk.js
└── obelisk.js@1.2.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/obelisk.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 45% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0509 took 9.1183s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/obelisk.js. Coverage (Term): 96% Coverage (LOC): 98%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/Cube.js. Coverage (Term): 20% Coverage (LOC): 40%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/CubeDimension.js. Coverage (Term): 33% Coverage (LOC): 48%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/AbstractDimension.js. Coverage (Term): 87% Coverage (LOC): 94%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/BrickDimension.js. Coverage (Term): 36% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/SideXDimension.js. Coverage (Term): 39% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/SideYDimension.js. Coverage (Term): 39% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/CubeColor.js. Coverage (Term): 30% Coverage (LOC): 63%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/AbstractColor.js. Coverage (Term): 89% Coverage (LOC): 95%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/utils/ColorGeom.js. Coverage (Term): 14% Coverage (LOC): 36%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/SideColor.js. Coverage (Term): 45% Coverage (LOC): 71%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/geom/Matrix.js. Coverage (Term): 41% Coverage (LOC): 64%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/display/PixelObject.js. Coverage (Term): 39% Coverage (LOC): 58%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/geom/Point3D.js. Coverage (Term): 31% Coverage (LOC): 57%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/geom/Point.js. Coverage (Term): 43% Coverage (LOC): 71%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/display/BitmapData.js. Coverage (Term): 7% Coverage (LOC): 12%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/utils/CanvasManager.js. Coverage (Term): 49% Coverage (LOC): 72%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/AbstractPrimitive.js. Coverage (Term): 89% Coverage (LOC): 95%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/Brick.js. Coverage (Term): 19% Coverage (LOC): 41%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SideX.js. Coverage (Term): 21% Coverage (LOC): 42%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SideY.js. Coverage (Term): 21% Coverage (LOC): 42%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/Pyramid.js. Coverage (Term): 13% Coverage (LOC): 33%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/PyramidDimension.js. Coverage (Term): 38% Coverage (LOC): 48%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/PyramidColor.js. Coverage (Term): 34% Coverage (LOC): 65%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/LineX.js. Coverage (Term): 30% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/LineXDimension.js. Coverage (Term): 44% Coverage (LOC): 52%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/LineColor.js. Coverage (Term): 55% Coverage (LOC): 75%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/LineY.js. Coverage (Term): 28% Coverage (LOC): 49%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/LineYDimension.js. Coverage (Term): 44% Coverage (LOC): 52%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/LineZ.js. Coverage (Term): 30% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/LineZDimension.js. Coverage (Term): 51% Coverage (LOC): 61%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SlopeEast.js. Coverage (Term): 14% Coverage (LOC): 35%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/dimensions/SlopeDimension.js. Coverage (Term): 36% Coverage (LOC): 50%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/colors/SlopeColor.js. Coverage (Term): 26% Coverage (LOC): 60%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SlopeNorth.js. Coverage (Term): 19% Coverage (LOC): 40%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SlopeSouth.js. Coverage (Term): 14% Coverage (LOC): 35%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/primitives/SlopeWest.js. Coverage (Term): 19% Coverage (LOC): 41%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/utils/ColorPattern.js. Coverage (Term): 71% Coverage (LOC): 90%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/utils/CanvasTool.js. Coverage (Term): 32% Coverage (LOC): 56%
*- File /root/Targets/obelisk.js/node_modules/obelisk.js/src/display/PixelView.js. Coverage (Term): 33% Coverage (LOC): 50%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
