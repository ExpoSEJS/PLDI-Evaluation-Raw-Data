/root/Targets/superviews.js
└── superviews.js@3.0.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/superviews.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 28.000000000000004% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","randomBytes","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0857 took 11.1052s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/superviews.js/node_modules/superviews.js/index.js. Coverage (Term): 4% Coverage (LOC): 5%
*- File /root/Targets/superviews.js/node_modules/uuid/uuid.js. Coverage (Term): 18% Coverage (LOC): 31%
*- File /root/Targets/superviews.js/node_modules/uuid/rng.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/superviews.js/node_modules/htmlparser2/lib/index.js. Coverage (Term): 24% Coverage (LOC): 52%
*- File /root/Targets/superviews.js/node_modules/htmlparser2/lib/Parser.js. Coverage (Term): 22% Coverage (LOC): 46%
*- File /root/Targets/superviews.js/node_modules/htmlparser2/lib/Tokenizer.js. Coverage (Term): 24% Coverage (LOC): 21%
*- File /root/Targets/superviews.js/node_modules/entities/lib/decode_codepoint.js. Coverage (Term): 24% Coverage (LOC): 26%
*- File /root/Targets/superviews.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/superviews.js/node_modules/domhandler/index.js. Coverage (Term): 16% Coverage (LOC): 25%
*- File /root/Targets/superviews.js/node_modules/domelementtype/index.js. Coverage (Term): 54% Coverage (LOC): 93%
*- File /root/Targets/superviews.js/node_modules/domhandler/lib/node.js. Coverage (Term): 45% Coverage (LOC): 68%
*- File /root/Targets/superviews.js/node_modules/domhandler/lib/element.js. Coverage (Term): 70% Coverage (LOC): 80%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
