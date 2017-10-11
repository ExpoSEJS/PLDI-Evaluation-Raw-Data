
> uws@0.14.5 install /root/Targets/chat-socket.io/node_modules/uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0

/root/Targets/chat-socket.io
└─┬ chat-socket.io@0.0.1 
  ├─┬ express@3.0.1 
  │ ├── commander@0.6.1 
  │ ├─┬ connect@2.6.2 
  │ │ ├── bytes@0.1.0 
  │ │ ├── formidable@1.0.11 
  │ │ ├── pause@0.0.1 
  │ │ └── qs@0.5.1 
  │ ├── cookie@0.0.4 
  │ ├── cookie-signature@0.0.1 
  │ ├── crc@0.2.0 
  │ ├─┬ debug@3.1.0 
  │ │ └── ms@2.0.0 
  │ ├── fresh@0.1.0 
  │ ├── methods@0.0.1 
  │ ├── mkdirp@0.3.3 
  │ ├── range-parser@0.0.4 
  │ └─┬ send@0.1.0 
  │   └── mime@1.2.6 
  └─┬ socket.io@2.0.3 
    ├── debug@2.6.9 
    ├─┬ engine.io@3.1.2 
    │ ├─┬ accepts@1.3.3 
    │ │ ├─┬ mime-types@2.1.17 
    │ │ │ └── mime-db@1.30.0 
    │ │ └── negotiator@0.6.1 
    │ ├── base64id@1.0.0 
    │ ├── cookie@0.3.1 
    │ ├── debug@2.6.9 
    │ ├─┬ engine.io-parser@2.1.1 
    │ │ ├── after@0.8.2 
    │ │ ├── arraybuffer.slice@0.0.6 
    │ │ └── blob@0.0.4 
    │ ├── uws@0.14.5 
    │ └─┬ ws@2.3.1 
    │   ├── safe-buffer@5.0.1 
    │   └── ultron@1.1.0 
    ├── object-assign@4.1.1 
    ├── socket.io-adapter@1.1.1 
    ├─┬ socket.io-client@2.0.3 
    │ ├── backo2@1.0.2 
    │ ├── base64-arraybuffer@0.1.5 
    │ ├── component-bind@1.0.0 
    │ ├── component-emitter@1.2.1 
    │ ├── debug@2.6.9 
    │ ├─┬ engine.io-client@3.1.2 
    │ │ ├── component-inherit@0.0.3 
    │ │ ├── debug@2.6.9 
    │ │ ├── xmlhttprequest-ssl@1.5.3 
    │ │ └── yeast@0.1.2 
    │ ├── has-cors@1.1.0 
    │ ├── indexof@0.0.1 
    │ ├── object-component@0.0.3 
    │ ├─┬ parseqs@0.0.5 
    │ │ └─┬ better-assert@1.0.2 
    │ │   └── callsite@1.0.0 
    │ ├── parseuri@0.0.5 
    │ └── to-array@0.1.4 
    └─┬ socket.io-parser@3.1.2 
      ├── debug@2.6.9 
      ├── has-binary2@1.0.2 
      └── isarray@2.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/chat-socket.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0552 took 3.4372s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'chat-socket.io'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
