
> uws@0.14.5 install /root/Targets/linda-socket.io/node_modules/uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0

/root/Targets/linda-socket.io
└─┬ linda-socket.io@0.2.2 
  ├── debug@0.7.4 
  ├── eventemitter2@0.4.14 
  ├─┬ socket.io@2.0.3 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├─┬ engine.io@3.1.2 
  │ │ ├─┬ accepts@1.3.3 
  │ │ │ ├─┬ mime-types@2.1.17 
  │ │ │ │ └── mime-db@1.30.0 
  │ │ │ └── negotiator@0.6.1 
  │ │ ├── base64id@1.0.0 
  │ │ ├── cookie@0.3.1 
  │ │ ├── debug@2.6.9 
  │ │ ├─┬ engine.io-parser@2.1.1 
  │ │ │ ├── after@0.8.2 
  │ │ │ ├── arraybuffer.slice@0.0.6 
  │ │ │ └── blob@0.0.4 
  │ │ ├── uws@0.14.5 
  │ │ └─┬ ws@2.3.1 
  │ │   ├── safe-buffer@5.0.1 
  │ │   └── ultron@1.1.0 
  │ ├── object-assign@4.1.1 
  │ ├── socket.io-adapter@1.1.1 
  │ └─┬ socket.io-parser@3.1.2 
  │   ├── debug@2.6.9 
  │   ├── has-binary2@1.0.2 
  │   └── isarray@2.0.1 
  └─┬ socket.io-client@2.0.3 
    ├── backo2@1.0.2 
    ├── base64-arraybuffer@0.1.5 
    ├── component-bind@1.0.0 
    ├── component-emitter@1.2.1 
    ├── debug@2.6.9 
    ├─┬ engine.io-client@3.1.2 
    │ ├── component-inherit@0.0.3 
    │ ├── debug@2.6.9 
    │ ├── xmlhttprequest-ssl@1.5.3 
    │ └── yeast@0.1.2 
    ├── has-cors@1.1.0 
    ├── indexof@0.0.1 
    ├── object-component@0.0.3 
    ├─┬ parseqs@0.0.5 
    │ └─┬ better-assert@1.0.2 
    │   └── callsite@1.0.0 
    ├── parseuri@0.0.5 
    └── to-array@0.1.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/linda-socket.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ***
*-- Stat Module Output --*
*-- Stat Module Done --*
*-- Coverage Data
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 0 paths with 0 errors **
