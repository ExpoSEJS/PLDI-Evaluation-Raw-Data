
> bufferutil@1.2.1 install /root/Targets/hookly.js/node_modules/bufferutil
> node-gyp rebuild

make: Entering directory '/root/Targets/hookly.js/node_modules/bufferutil/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
  SOLINK_MODULE(target) Release/obj.target/bufferutil.node
  COPY Release/bufferutil.node
make: Leaving directory '/root/Targets/hookly.js/node_modules/bufferutil/build'

> utf-8-validate@1.2.2 install /root/Targets/hookly.js/node_modules/utf-8-validate
> node-gyp rebuild

make: Entering directory '/root/Targets/hookly.js/node_modules/utf-8-validate/build'
  CXX(target) Release/obj.target/validation/src/validation.o
  SOLINK_MODULE(target) Release/obj.target/validation.node
  COPY Release/validation.node
make: Leaving directory '/root/Targets/hookly.js/node_modules/utf-8-validate/build'
/root/Targets/hookly.js
└─┬ hookly.js@0.9.2 
  └─┬ socket.io-client@1.3.7 
    ├── backo2@1.0.2 
    ├── component-bind@1.0.0 
    ├── component-emitter@1.1.2 
    ├── debug@0.7.4 
    ├─┬ engine.io-client@1.5.4 
    │ ├── component-inherit@0.0.3 
    │ ├─┬ debug@1.0.4 
    │ │ └── ms@0.6.2 
    │ ├─┬ engine.io-parser@1.2.2 
    │ │ ├── after@0.8.1 
    │ │ ├── arraybuffer.slice@0.0.6 
    │ │ ├── base64-arraybuffer@0.1.2 
    │ │ ├── blob@0.0.4 
    │ │ └── utf8@2.1.0 
    │ ├─┬ has-cors@1.0.3 
    │ │ └── global@2.0.1 
    │ ├── parsejson@0.0.1 
    │ ├── parseqs@0.0.2 
    │ ├── parseuri@0.0.4 
    │ ├─┬ ws@0.8.0 
    │ │ ├─┬ bufferutil@1.2.1 
    │ │ │ ├── bindings@1.2.1 
    │ │ │ └── nan@2.7.0 
    │ │ ├── options@0.0.6 
    │ │ ├── ultron@1.0.2 
    │ │ └─┬ utf-8-validate@1.2.2 
    │ │   └── nan@2.4.0 
    │ └── xmlhttprequest@1.5.0 
    ├─┬ has-binary@0.1.6 
    │ └── isarray@0.0.1 
    ├── indexof@0.0.1 
    ├── object-component@0.0.3 
    ├─┬ parseuri@0.0.2 
    │ └─┬ better-assert@1.0.2 
    │   └── callsite@1.0.0 
    ├─┬ socket.io-parser@2.2.4 
    │ ├── benchmark@1.0.0 
    │ └── json3@3.2.6 
    └── to-array@0.1.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hookly.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.039 took 2.6598s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'hookly.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
