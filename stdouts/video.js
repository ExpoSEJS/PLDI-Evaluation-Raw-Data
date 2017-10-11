/root/Targets/video.js
└── video.js@6.2.7 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/video.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 13% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toUpperCase","create","freeze","Date","getTime","isArray","setPrototypeOf","Error"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0388 took 24.2539s
*-- Errors occured in test {"_bound":0}
* Error: Error: Illegal component, "ModalDialog"; must be a Component subclass.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/video.js/node_modules/video.js/dist/video.cjs.js. Coverage (Term): 5% Coverage (LOC): 7%
*- File /root/Targets/video.js/node_modules/global/window.js. Coverage (Term): 67% Coverage (LOC): 64%
*- File /root/Targets/video.js/node_modules/global/document.js. Coverage (Term): 82% Coverage (LOC): 92%
*- File /root/Targets/video.js/node_modules/min-document/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/video.js/node_modules/min-document/document.js. Coverage (Term): 63% Coverage (LOC): 76%
*- File /root/Targets/video.js/node_modules/dom-walk/index.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/video.js/node_modules/min-document/dom-comment.js. Coverage (Term): 43% Coverage (LOC): 50%
*- File /root/Targets/video.js/node_modules/min-document/dom-text.js. Coverage (Term): 33% Coverage (LOC): 48%
*- File /root/Targets/video.js/node_modules/min-document/dom-element.js. Coverage (Term): 32% Coverage (LOC): 45%
*- File /root/Targets/video.js/node_modules/min-document/event/dispatch-event.js. Coverage (Term): 19% Coverage (LOC): 16%
*- File /root/Targets/video.js/node_modules/min-document/event/add-event-listener.js. Coverage (Term): 26% Coverage (LOC): 29%
*- File /root/Targets/video.js/node_modules/min-document/event/remove-event-listener.js. Coverage (Term): 26% Coverage (LOC): 25%
*- File /root/Targets/video.js/node_modules/min-document/serialize.js. Coverage (Term): 9% Coverage (LOC): 24%
*- File /root/Targets/video.js/node_modules/min-document/dom-fragment.js. Coverage (Term): 55% Coverage (LOC): 59%
*- File /root/Targets/video.js/node_modules/min-document/event.js. Coverage (Term): 48% Coverage (LOC): 73%
*- File /root/Targets/video.js/node_modules/tsml/tsml.js. Coverage (Term): 25% Coverage (LOC): 50%
*- File /root/Targets/video.js/node_modules/safe-json-parse/tuple.js. Coverage (Term): 40% Coverage (LOC): 36%
*- File /root/Targets/video.js/node_modules/xhr/index.js. Coverage (Term): 16% Coverage (LOC): 17%
*- File /root/Targets/video.js/node_modules/is-function/index.js. Coverage (Term): 32% Coverage (LOC): 75%
*- File /root/Targets/video.js/node_modules/parse-headers/parse-headers.js. Coverage (Term): 22% Coverage (LOC): 26%
*- File /root/Targets/video.js/node_modules/trim/index.js. Coverage (Term): 43% Coverage (LOC): 73%
*- File /root/Targets/video.js/node_modules/for-each/index.js. Coverage (Term): 20% Coverage (LOC): 29%
*- File /root/Targets/video.js/node_modules/xtend/immutable.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/video.js/node_modules/videojs-vtt.js/lib/browser-index.js. Coverage (Term): 87% Coverage (LOC): 92%
*- File /root/Targets/video.js/node_modules/videojs-vtt.js/lib/vtt.js. Coverage (Term): 12% Coverage (LOC): 36%
*- File /root/Targets/video.js/node_modules/videojs-vtt.js/lib/vttcue.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/video.js/node_modules/videojs-vtt.js/lib/vttregion.js. Coverage (Term): 9% Coverage (LOC): 10%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
