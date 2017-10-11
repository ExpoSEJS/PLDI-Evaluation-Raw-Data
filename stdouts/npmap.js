/root/Targets/npmap.js
└─┬ npmap.js@2.0.0 
  ├─┬ csv2geojson@3.7.0 
  │ ├─┬ concat-stream@1.0.1 
  │ │ └─┬ bops@0.0.6 
  │ │   ├── base64-js@0.0.2 
  │ │   └── to-utf8@0.0.1 
  │ ├── dsv@0.0.3 
  │ ├─┬ optimist@0.4.0 
  │ │ └── wordwrap@0.0.3 
  │ └── sexagesimal@0.1.0 
  ├─┬ handlebars@1.3.0 
  │ ├── optimist@0.3.7 
  │ └─┬ uglify-js@2.3.6 
  │   ├── async@0.2.10 
  │   ├── optimist@0.3.7 
  │   └─┬ source-map@0.1.43 
  │     └── amdefine@1.0.1 
  ├── humane-js@3.2.0 
  ├── leaflet@0.7.3 
  ├── leaflet-draw@0.2.2 
  ├── leaflet.markercluster@0.4.0 
  ├── maki@0.4.5 
  ├── nanobar@0.0.6 
  ├── npmaki@0.4.1 
  ├── reqwest@1.1.0 
  └─┬ togeojson@0.7.0 
    ├── optimist@0.3.7 
    └── xmldom@0.1.27 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/npmap.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 35% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1108 took 4.9433s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/npmap.js/node_modules/npmap.js/main.js. Coverage (Term): 68% Coverage (LOC): 100%
*- File /root/Targets/npmap.js/node_modules/npmap.js/leaflet.js. Coverage (Term): 65% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
