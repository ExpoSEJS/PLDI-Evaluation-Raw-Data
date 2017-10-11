/root/Targets/uupaa.ts2aac.js
└─┬ uupaa.ts2aac.js@0.0.2 
  ├─┬ uupaa.aac.js@0.4.3 
  │ ├── uupaa.bit.js@0.8.1 
  │ └── uupaa.hash.js@0.2.8 
  ├─┬ uupaa.fileloader.js@0.1.4 
  │ ├─┬ request@2.83.0 
  │ │ ├── aws-sign2@0.7.0 
  │ │ ├── aws4@1.6.0 
  │ │ ├── caseless@0.12.0 
  │ │ ├─┬ combined-stream@1.0.5 
  │ │ │ └── delayed-stream@1.0.0 
  │ │ ├── extend@3.0.1 
  │ │ ├── forever-agent@0.6.1 
  │ │ ├─┬ form-data@2.3.1 
  │ │ │ └── asynckit@0.4.0 
  │ │ ├─┬ har-validator@5.0.3 
  │ │ │ ├─┬ ajv@5.2.3 
  │ │ │ │ ├── co@4.6.0 
  │ │ │ │ ├── fast-deep-equal@1.0.0 
  │ │ │ │ ├── json-schema-traverse@0.3.1 
  │ │ │ │ └─┬ json-stable-stringify@1.0.1 
  │ │ │ │   └── jsonify@0.0.0 
  │ │ │ └── har-schema@2.0.0 
  │ │ ├─┬ hawk@6.0.2 
  │ │ │ ├── boom@4.3.1 
  │ │ │ ├─┬ cryptiles@3.1.2 
  │ │ │ │ └── boom@5.2.0 
  │ │ │ ├── hoek@4.2.0 
  │ │ │ └── sntp@2.0.2 
  │ │ ├─┬ http-signature@1.2.0 
  │ │ │ ├── assert-plus@1.0.0 
  │ │ │ ├─┬ jsprim@1.4.1 
  │ │ │ │ ├── extsprintf@1.3.0 
  │ │ │ │ ├── json-schema@0.2.3 
  │ │ │ │ └─┬ verror@1.10.0 
  │ │ │ │   └── core-util-is@1.0.2 
  │ │ │ └─┬ sshpk@1.13.1 
  │ │ │   ├── asn1@0.2.3 
  │ │ │   ├── bcrypt-pbkdf@1.0.1 
  │ │ │   ├── dashdash@1.14.1 
  │ │ │   ├── ecc-jsbn@0.1.1 
  │ │ │   ├── getpass@0.1.7 
  │ │ │   ├── jsbn@0.1.1 
  │ │ │   └── tweetnacl@0.14.5 
  │ │ ├── is-typedarray@1.0.0 
  │ │ ├── isstream@0.1.2 
  │ │ ├── json-stringify-safe@5.0.1 
  │ │ ├─┬ mime-types@2.1.17 
  │ │ │ └── mime-db@1.30.0 
  │ │ ├── oauth-sign@0.8.2 
  │ │ ├── performance-now@2.1.0 
  │ │ ├── qs@6.5.1 
  │ │ ├── safe-buffer@5.1.1 
  │ │ ├── stringstream@0.0.5 
  │ │ ├─┬ tough-cookie@2.3.3 
  │ │ │ └── punycode@1.4.1 
  │ │ ├── tunnel-agent@0.6.0 
  │ │ └── uuid@3.1.0 
  │ └── uupaa.uri.js@0.11.3 
  ├─┬ uupaa.filestore.js@0.0.1 
  │ └── uupaa.mimetype.js@0.0.10 
  ├── uupaa.hexdump.js@0.0.5 
  └── uupaa.mpeg2ts.js@0.0.23 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uupaa.ts2aac.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.032 took 5.0335s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected character '#' (1:78) on program #!/usr/bin/env node

var USAGE = _multiline(function() {/*
    Usage:
        node ts2js [--help]
                   [--verbose]
                   input output

    Example: node index.js test/assets/a.ts test/assets/b.aac

*/});

function put(msg) { console.log(msg); }
put.error = function(msg) { put("\u001b[31m" + msg + "\u001b[0m"); };
put.warn  = function(msg) { put("\u001b[33m" + msg + "\u001b[0m"); };
put.info  = function(msg) { put("\u001b[32m" + msg + "\u001b[0m"); };

var fs     = require("fs");
var wm     = require("../lib/WebModule.js");

WebModule.VERIFY  = false;
WebModule.VERBOSE = false;
WebModule.PUBLISH = true;

require("../node_modules/uupaa.hexdump.js/lib/HexDump.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URI.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URISearchParams.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.mimetype.js/lib/MimeType.js");
require("../node_modules/uupaa.filestore.js/lib/FileStoreSandBox.js");
require("../node_modules/uupaa.filestore.js/lib/FileStore.js");
require("../node_modules/uupaa.fileloader.js/lib/FileLoader.js");
require("../node_modules/uupaa.fileloader.js/lib/FileLoaderQueue.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/Bit.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/BitView.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.hash.js/lib/Hash.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitType.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitParameterSet.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitEBSP.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitAUD.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSPS.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitPPS.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSEI.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitIDR.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitNON_IDR.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnit.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/lib/MPEG4ByteStream.js");
require("../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TSParser.js");
require("../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TS.js");
require("../node_modules/uupaa.aac.js/lib/AAC.js");
require("../node_modules/uupaa.aac.js/lib/ADTS.js");

var ts2aac = require("../lib/ts2aac.js");

var argv   = process.argv.slice(2);

var options = _parseCommandLineOptions({
        help:       false,      // Boolean - show help.
        verbose:    false,      // Boolean - verbose mode.
        input:      "",         // String - verbose mode.
        output:     "",         // String - update test/index.html file.
    });

if (options.help) {
    put.warn( USAGE );
    return;
}

if (options.verbose) {
    put.info( "input: "  + options.input  + "\n");
    put.info( "output: " + options.output + "\n");

    WebModule.MPEG2TS.VERBOSE = true;
    WebModule.MPEG2TSParser.VERBOSE = true;
} else {
}

ts2aac(options.input, options.output);

// =========================================================
function _parseCommandLineOptions(options) { // @arg Object:
                                             // @ret Object:
    var source = "";
    var target = "";
    for (var i = 0, iz = argv.length; i < iz; ++i) {
        switch (argv[i]) {
        case "-h":
        case "--help":      options.help    = true; break;
        case "-v":
        case "--verbose":   options.verbose = true; break;
        default:
            if (target) {
                //
            } else if (source) {
                target = argv[i];
            } else {
                source = argv[i];
            }
        }
    }
    options.input  = source;
    options.output = target;
    return options;
}

function _multiline(fn) { // @arg Function:
                          // @ret String:
    return (fn + "").split("\n").slice(1, -1).join("\n");
}

 at SyntaxError: Unexpected character '#' (1:78)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2756:10)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp.eat (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:536:12)
    at Parser.pp.semicolon (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:581:15)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:918:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uupaa.ts2aac.js/node_modules/uupaa.ts2aac.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
