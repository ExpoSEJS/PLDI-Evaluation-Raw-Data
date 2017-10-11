
> bufferutil@1.2.1 install /root/Targets/koa.io/node_modules/bufferutil
> node-gyp rebuild

make: Entering directory '/root/Targets/koa.io/node_modules/bufferutil/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
  SOLINK_MODULE(target) Release/obj.target/bufferutil.node
  COPY Release/bufferutil.node
make: Leaving directory '/root/Targets/koa.io/node_modules/bufferutil/build'

> utf-8-validate@1.2.2 install /root/Targets/koa.io/node_modules/utf-8-validate
> node-gyp rebuild

make: Entering directory '/root/Targets/koa.io/node_modules/utf-8-validate/build'
  CXX(target) Release/obj.target/validation/src/validation.o
  SOLINK_MODULE(target) Release/obj.target/validation.node
  COPY Release/validation.node
make: Leaving directory '/root/Targets/koa.io/node_modules/utf-8-validate/build'
/root/Targets/koa.io
└─┬ koa.io@0.0.3 
  ├── co@4.4.0 
  ├─┬ cookies@0.5.1 
  │ └── keygrip@1.0.2 
  ├─┬ debug@2.1.3 
  │ └── ms@0.7.0 
  ├── delegates@0.1.0 
  ├─┬ koa@0.18.1 
  │ ├─┬ accepts@1.3.4 
  │ │ └── negotiator@0.6.1 
  │ ├─┬ composition@2.3.0 
  │ │ └── any-promise@1.3.0 
  │ ├── content-disposition@0.5.2 
  │ ├── content-type@1.0.4 
  │ ├── destroy@1.0.4 
  │ ├── error-inject@1.0.0 
  │ ├── escape-html@1.0.3 
  │ ├── fresh@0.2.4 
  │ ├─┬ http-assert@1.3.0 
  │ │ └── deep-equal@1.0.1 
  │ ├─┬ http-errors@1.6.2 
  │ │ ├── depd@1.1.1 
  │ │ ├── inherits@2.0.3 
  │ │ └── setprototypeof@1.0.3 
  │ ├── koa-is-json@1.0.0 
  │ ├─┬ mime-types@2.1.17 
  │ │ └── mime-db@1.30.0 
  │ ├─┬ on-finished@2.3.0 
  │ │ └── ee-first@1.1.1 
  │ ├── only@0.0.2 
  │ ├── statuses@1.3.1 
  │ ├─┬ type-is@1.6.15 
  │ │ └── media-typer@0.3.0 
  │ └── vary@1.1.2 
  ├── koa-compose@2.3.0 
  ├─┬ koa-generic-session@1.6.0 
  │ ├── copy-to@2.0.1 
  │ ├── crc@3.2.1 
  │ └─┬ uid-safe@1.0.3 
  │   ├── base64-url@1.2.0 
  │   └── native-or-bluebird@1.1.2 
  ├── parseurl@1.3.2 
  └─┬ socket.io@1.3.7 
    ├─┬ debug@2.1.0 
    │ └── ms@0.6.2 
    ├─┬ engine.io@1.5.4 
    │ ├── base64id@0.1.0 
    │ ├─┬ debug@1.0.3 
    │ │ └── ms@0.6.2 
    │ ├─┬ engine.io-parser@1.2.2 
    │ │ ├── after@0.8.1 
    │ │ ├── arraybuffer.slice@0.0.6 
    │ │ ├── base64-arraybuffer@0.1.2 
    │ │ ├── blob@0.0.4 
    │ │ └── utf8@2.1.0 
    │ └─┬ ws@0.8.0 
    │   ├─┬ bufferutil@1.2.1 
    │   │ ├── bindings@1.2.1 
    │   │ └── nan@2.7.0 
    │   ├── options@0.0.6 
    │   ├── ultron@1.0.2 
    │   └─┬ utf-8-validate@1.2.2 
    │     └── nan@2.4.0 
    ├─┬ has-binary-data@0.1.3 
    │ └── isarray@0.0.1 
    ├─┬ socket.io-adapter@0.3.1 
    │ ├─┬ debug@1.0.2 
    │ │ └── ms@0.6.2 
    │ ├── object-keys@1.0.1 
    │ └─┬ socket.io-parser@2.2.2 
    │   └── debug@0.7.4 
    ├─┬ socket.io-client@1.3.7 
    │ ├── backo2@1.0.2 
    │ ├── component-bind@1.0.0 
    │ ├── component-emitter@1.1.2 
    │ ├── debug@0.7.4 
    │ ├─┬ engine.io-client@1.5.4 
    │ │ ├── component-inherit@0.0.3 
    │ │ ├─┬ debug@1.0.4 
    │ │ │ └── ms@0.6.2 
    │ │ ├─┬ has-cors@1.0.3 
    │ │ │ └── global@2.0.1 
    │ │ ├── parsejson@0.0.1 
    │ │ ├── parseqs@0.0.2 
    │ │ ├── parseuri@0.0.4 
    │ │ └── xmlhttprequest@1.5.0 
    │ ├── has-binary@0.1.6 
    │ ├── indexof@0.0.1 
    │ ├── object-component@0.0.3 
    │ ├─┬ parseuri@0.0.2 
    │ │ └─┬ better-assert@1.0.2 
    │ │   └── callsite@1.0.0 
    │ └── to-array@0.1.3 
    └─┬ socket.io-parser@2.2.4 
      ├── benchmark@1.0.0 
      ├── debug@0.7.4 
      └── json3@3.2.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/koa.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 22% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp","some","Date","getUTCFullYear","getUTCMonth","getUTCDate","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","stringify","Number","parse","parseInt"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0263 took 7.8428s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Object.prototype.__defineGetter__: Expecting function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/koa.io/node_modules/koa.io/lib/application.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/koa.io/node_modules/koa.io/lib/socket.io/index.js. Coverage (Term): 25% Coverage (LOC): 38%
*- File /root/Targets/koa.io/node_modules/socket.io/lib/namespace.js. Coverage (Term): 4% Coverage (LOC): 4%
*- File /root/Targets/koa.io/node_modules/socket.io/lib/socket.js. Coverage (Term): 9% Coverage (LOC): 12%
*- File /root/Targets/koa.io/node_modules/socket.io-parser/index.js. Coverage (Term): 18% Coverage (LOC): 26%
*- File /root/Targets/koa.io/node_modules/socket.io-parser/node_modules/debug/lib/debug.js. Coverage (Term): 37% Coverage (LOC): 59%
*- File /root/Targets/koa.io/node_modules/json3/lib/json3.js. Coverage (Term): 15% Coverage (LOC): 14%
*- File /root/Targets/koa.io/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/koa.io/node_modules/component-emitter/index.js. Coverage (Term): 26% Coverage (LOC): 35%
*- File /root/Targets/koa.io/node_modules/socket.io-parser/binary.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/koa.io/node_modules/socket.io-parser/is-buffer.js. Coverage (Term): 45% Coverage (LOC): 80%
*- File /root/Targets/koa.io/node_modules/socket.io/node_modules/debug/node.js. Coverage (Term): 30% Coverage (LOC): 41%
*- File /root/Targets/koa.io/node_modules/socket.io/node_modules/debug/debug.js. Coverage (Term): 35% Coverage (LOC): 42%
*- File /root/Targets/koa.io/node_modules/socket.io/node_modules/ms/index.js. Coverage (Term): 15% Coverage (LOC): 22%
*- File /root/Targets/koa.io/node_modules/has-binary-data/index.js. Coverage (Term): 16% Coverage (LOC): 17%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
