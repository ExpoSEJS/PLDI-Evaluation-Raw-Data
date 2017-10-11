/root/Targets/ikagaka.ikagaka.js
└─┬ ikagaka.ikagaka.js@0.1.7 
  ├── encoding-japanese@1.0.26 
  ├── es6-shim@0.35.3 
  ├─┬ ikagaka.balloon.js@4.0.0 
  │ ├── events@1.1.1 
  │ ├─┬ ikagaka.shell.js@5.0.0  (git://github.com/ikagaka/Shell.js.git#875fd5ff3befbed41c6d8760270265ec24aeec64)
  │ │ ├── deep-diff@0.3.8 
  │ │ ├─┬ react@15.6.2 
  │ │ │ ├── create-react-class@15.6.2 
  │ │ │ ├─┬ fbjs@0.8.16 
  │ │ │ │ ├── core-js@1.2.7 
  │ │ │ │ ├─┬ isomorphic-fetch@2.2.1 
  │ │ │ │ │ ├─┬ node-fetch@1.7.3 
  │ │ │ │ │ │ ├─┬ encoding@0.1.12 
  │ │ │ │ │ │ │ └── iconv-lite@0.4.19 
  │ │ │ │ │ │ └── is-stream@1.1.0 
  │ │ │ │ │ └── whatwg-fetch@2.0.3 
  │ │ │ │ ├─┬ promise@7.3.1 
  │ │ │ │ │ └── asap@2.0.6 
  │ │ │ │ ├── setimmediate@1.0.5 
  │ │ │ │ └── ua-parser-js@0.7.14 
  │ │ │ ├─┬ loose-envify@1.3.1 
  │ │ │ │ └── js-tokens@3.0.2 
  │ │ │ ├── object-assign@4.1.1 
  │ │ │ └── prop-types@15.6.0 
  │ │ ├── react-dom@15.6.2 
  │ │ └── surfaces_txt2yaml@2.1.0  (git://github.com/legokichi/surfaces_txt2yaml.git#b4716c8994d7faa903710dff1e4ab0a8a40a09ce)
  │ └── jquery@3.2.1 
  ├─┬ ikagaka.ghost.js@0.3.3 
  │ ├── aya5.js@0.2.0 
  │ ├── kawari.js@0.2.0 
  │ ├── kawari7.js@0.2.0 
  │ ├── libsatori.js@159.3.0 
  │ ├── nativeshiori@2.3.0 
  │ └── yaya.js@1.2.0 
  ├── ikagaka.named.js@3.0.2 
  ├── ikagaka.nar.js@3.0.3 
  ├─┬ ikagaka.sakurascriptplayer.js@1.2.1 
  │ └── coffee-script@1.12.7 
  ├─┬ ikagaka.shell.js@4.3.5 
  │ ├── eventemitter3@2.0.3 
  │ ├── surfaces_txt2yaml@2.1.0  (git://github.com/legokichi/surfaces_txt2yaml.git#b4716c8994d7faa903710dff1e4ab0a8a40a09ce)
  │ ├── text-encoding@0.6.4 
  │ └── typescript@1.8.10 
  ├── ikagaka.wmdescript.js@0.0.0 
  ├─┬ jszip@3.1.4 
  │ ├── core-js@2.3.0 
  │ ├── es6-promise@3.0.2 
  │ ├─┬ lie@3.1.1 
  │ │ └── immediate@3.0.6 
  │ ├── pako@1.0.6 
  │ └─┬ readable-stream@2.0.6 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.3 
  │   ├── isarray@1.0.0 
  │   ├── process-nextick-args@1.0.7 
  │   ├── string_decoder@0.10.31 
  │   └── util-deprecate@1.0.2 
  ├── shiorijk@0.8.2 
  ├─┬ surfaces_txt2yaml@2.1.0 
  │ ├── argv@0.0.2 
  │ └─┬ js-yaml@3.10.0 
  │   ├─┬ argparse@1.0.9 
  │   │ └── sprintf-js@1.0.3 
  │   └── esprima@4.0.0 
  ├── underscore@1.8.3 
  ├─┬ uupaa.xhrproxy.js@0.0.7 
  │ ├── uupaa.datatype.js@0.1.2 
  │ ├── uupaa.wmevent.js@0.0.2 
  │ └── uupaa.wmurl.js@0.1.9 
  └── zepto@1.2.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.ikagaka.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 34% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0172 took 1.9247s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ikagaka.ikagaka.js/node_modules/ikagaka.ikagaka.js/Ikagaka.js. Coverage (Term): 53% Coverage (LOC): 56%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
