
> ws@0.4.32 install /root/Targets/greyhound.js/node_modules/ws
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/greyhound.js/node_modules/ws/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
bufferutil.target.mk:96: recipe for target 'Release/obj.target/bufferutil/src/bufferutil.o' failed
make: Leaving directory '/root/Targets/greyhound.js/node_modules/ws/build'
/root/Targets/greyhound.js
└─┬ greyhound.js@0.0.8 
  └─┬ ws@0.4.32 
    ├── commander@2.1.0 
    ├── nan@1.0.0 
    ├── options@0.0.6 
    └── tinycolor@0.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/greyhound.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ***
*-- Stat Module Output --*
*-- Stat Module Done --*
*-- Coverage Data
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 0 paths with 0 errors **
