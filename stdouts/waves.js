/root/Targets/waves.js
└─┬ waves.js@0.0.7-13 
  ├─┬ axios@0.15.3 
  │ └─┬ follow-redirects@1.0.0 
  │   └─┬ debug@2.6.9 
  │     └── ms@2.0.0 
  ├── axlsign@1.0.0  (git+https://github.com/gagarin55/curve25519-js.git#cae68782564b83ffa1c7c757e40a3944cb140290)
  ├─┬ base-x@2.0.6 
  │ └── safe-buffer@5.1.1 
  ├── blakejs@1.1.0 
  ├── fast-sha256@1.0.0 
  ├── js-sha3@0.5.7 
  └── text-encoding@0.6.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/waves.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0409 took 3.4389s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'waves.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
