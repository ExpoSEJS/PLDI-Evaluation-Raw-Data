
> kerberos@0.0.4 install /root/Targets/division.js/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/division.js/node_modules/kerberos/build'
  SOLINK_MODULE(target) Release/obj.target/kerberos.node
  COPY Release/kerberos.node
make: Leaving directory '/root/Targets/division.js/node_modules/kerberos/build'

> bson@0.2.22 install /root/Targets/division.js/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/division.js/node_modules/bson/build'
  CXX(target) Release/obj.target/bson/ext/bson.o
bson.target.mk:92: recipe for target 'Release/obj.target/bson/ext/bson.o' failed
make: Leaving directory '/root/Targets/division.js/node_modules/bson/build'
/root/Targets/division.js
└─┬ division.js@1.2.2 
  ├─┬ connect@2.30.2 
  │ ├── basic-auth-connect@1.0.0 
  │ ├─┬ body-parser@1.13.3 
  │ │ ├── iconv-lite@0.4.11 
  │ │ ├─┬ on-finished@2.3.0 
  │ │ │ └── ee-first@1.1.1 
  │ │ └─┬ raw-body@2.1.7 
  │ │   ├── bytes@2.4.0 
  │ │   └── iconv-lite@0.4.13 
  │ ├── bytes@2.1.0 
  │ ├─┬ compression@1.5.2 
  │ │ ├─┬ accepts@1.2.13 
  │ │ │ └── negotiator@0.5.3 
  │ │ ├─┬ compressible@2.0.11 
  │ │ │ └── mime-db@1.30.0 
  │ │ └── vary@1.0.1 
  │ ├─┬ connect-timeout@1.6.2 
  │ │ └── ms@0.7.1 
  │ ├── content-type@1.0.4 
  │ ├── cookie@0.1.3 
  │ ├── cookie-parser@1.3.5 
  │ ├── cookie-signature@1.0.6 
  │ ├─┬ csurf@1.8.3 
  │ │ └─┬ csrf@3.0.6 
  │ │   ├── rndm@1.2.0 
  │ │   ├── tsscmp@1.0.5 
  │ │   └─┬ uid-safe@2.1.4 
  │ │     └── random-bytes@1.0.0 
  │ ├── debug@2.2.0 
  │ ├── depd@1.0.1 
  │ ├─┬ errorhandler@1.4.3 
  │ │ ├─┬ accepts@1.3.4 
  │ │ │ └── negotiator@0.6.1 
  │ │ └── escape-html@1.0.3 
  │ ├─┬ express-session@1.11.3 
  │ │ ├── crc@3.3.0 
  │ │ └─┬ uid-safe@2.0.0 
  │ │   └── base64-url@1.2.1 
  │ ├─┬ finalhandler@0.4.0 
  │ │ ├── escape-html@1.0.2 
  │ │ └── unpipe@1.0.0 
  │ ├── fresh@0.3.0 
  │ ├─┬ http-errors@1.3.1 
  │ │ ├── inherits@2.0.3 
  │ │ └── statuses@1.3.1 
  │ ├─┬ method-override@2.3.10 
  │ │ ├─┬ debug@2.6.9 
  │ │ │ └── ms@2.0.0 
  │ │ ├── methods@1.1.2 
  │ │ └── vary@1.1.2 
  │ ├─┬ morgan@1.6.1 
  │ │ └── basic-auth@1.0.4 
  │ ├─┬ multiparty@3.3.2 
  │ │ ├─┬ readable-stream@1.1.14 
  │ │ │ ├── core-util-is@1.0.2 
  │ │ │ ├── isarray@0.0.1 
  │ │ │ └── string_decoder@0.10.31 
  │ │ └── stream-counter@0.2.0 
  │ ├── on-headers@1.0.1 
  │ ├── parseurl@1.3.2 
  │ ├── pause@0.1.0 
  │ ├── qs@4.0.0 
  │ ├─┬ response-time@2.3.2 
  │ │ └── depd@1.1.1 
  │ ├─┬ serve-favicon@2.3.2 
  │ │ ├── etag@1.7.0 
  │ │ └── ms@0.7.2 
  │ ├─┬ serve-index@1.7.3 
  │ │ ├── batch@0.5.3 
  │ │ └── mime-types@2.1.17 
  │ ├─┬ serve-static@1.10.3 
  │ │ └─┬ send@0.13.2 
  │ │   ├── depd@1.1.1 
  │ │   ├── destroy@1.0.4 
  │ │   ├── mime@1.3.4 
  │ │   ├── range-parser@1.0.3 
  │ │   └── statuses@1.2.1 
  │ ├─┬ type-is@1.6.15 
  │ │ └── media-typer@0.3.0 
  │ ├── utils-merge@1.0.0 
  │ └── vhost@3.0.2 
  ├─┬ connect-rest@3.0.3 
  │ ├── assign.js@2.7.8 
  │ ├─┬ axios@0.16.2 
  │ │ ├─┬ follow-redirects@1.2.4 
  │ │ │ └─┬ debug@2.6.9 
  │ │ │   └── ms@2.0.0 
  │ │ └── is-buffer@1.1.5 
  │ ├── isa.js@2.1.0 
  │ ├─┬ pino@4.7.2 
  │ │ ├─┬ chalk@2.1.0 
  │ │ │ ├─┬ ansi-styles@3.2.0 
  │ │ │ │ └─┬ color-convert@1.9.0 
  │ │ │ │   └── color-name@1.1.3 
  │ │ │ ├── escape-string-regexp@1.0.5 
  │ │ │ └─┬ supports-color@4.4.0 
  │ │ │   └── has-flag@2.0.0 
  │ │ ├── fast-json-parse@1.0.3 
  │ │ ├── fast-safe-stringify@1.2.0 
  │ │ ├── flatstr@1.0.5 
  │ │ ├─┬ pump@1.0.2 
  │ │ │ ├── end-of-stream@1.4.0 
  │ │ │ └─┬ once@1.4.0 
  │ │ │   └── wrappy@1.0.2 
  │ │ ├── quick-format-unescaped@1.1.1 
  │ │ └─┬ split2@2.2.0 
  │ │   └─┬ through2@2.0.3 
  │ │     ├─┬ readable-stream@2.3.3 
  │ │     │ ├── isarray@1.0.0 
  │ │     │ └── string_decoder@1.0.3 
  │ │     └── xtend@4.0.1 
  │ ├── proback.js@2.1.3 
  │ └── semver@5.4.1 
  ├── funcsync@1.2.1 
  ├── knockout@2.3.0 
  ├── knockout-parsley@0.2.1 
  ├─┬ knockout.mapper.js@1.7.0 
  │ └── knockout@3.4.2 
  ├─┬ mongoose@3.9.7 
  │ ├── async@0.9.0 
  │ ├── hooks@0.3.2 
  │ ├── kareem@0.0.4 
  │ ├─┬ mongodb@1.4.12 
  │ │ ├─┬ bson@0.2.22 
  │ │ │ └── nan@1.8.4 
  │ │ ├── kerberos@0.0.4 
  │ │ └─┬ readable-stream@2.3.3 
  │ │   ├── isarray@1.0.0 
  │ │   ├── process-nextick-args@1.0.7 
  │ │   ├── safe-buffer@5.1.1 
  │ │   ├── string_decoder@1.0.3 
  │ │   └── util-deprecate@1.0.2 
  │ ├── mpath@0.1.1 
  │ ├── mpromise@0.5.4 
  │ ├─┬ mquery@1.0.0 
  │ │ └── debug@0.7.4 
  │ ├── ms@0.1.0 
  │ ├── muri@0.3.1 
  │ ├── regexp-clone@0.0.1 
  │ └── sliced@0.0.5 
  ├── mongoose-function@0.1.0 
  ├── mongoose-schemagen@0.1.2 
  ├── underscore@1.8.3 
  └── vindication.js@4.11.5 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/division.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","captureStackTrace","cwd","max","getFileName","getLineNumber","getColumnNumber","isEval","getFunctionName","create","parseInt","Number","toUpperCase","join","getOwnPropertyDescriptor"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.072 took 19.5549s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Object.prototype.__defineGetter__: Expecting function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/division.js/node_modules/division.js/server/server.js. Coverage (Term): 9% Coverage (LOC): 9%
*- File /root/Targets/division.js/node_modules/connect/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/division.js/node_modules/connect/lib/connect.js. Coverage (Term): 60% Coverage (LOC): 58%
*- File /root/Targets/division.js/node_modules/depd/index.js. Coverage (Term): 39% Coverage (LOC): 43%
*- File /root/Targets/division.js/node_modules/depd/lib/compat/index.js. Coverage (Term): 81% Coverage (LOC): 94%
*- File /root/Targets/division.js/node_modules/connect/lib/proto.js. Coverage (Term): 14% Coverage (LOC): 19%
*- File /root/Targets/division.js/node_modules/finalhandler/index.js. Coverage (Term): 20% Coverage (LOC): 22%
*- File /root/Targets/division.js/node_modules/debug/node.js. Coverage (Term): 30% Coverage (LOC): 41%
*- File /root/Targets/division.js/node_modules/debug/debug.js. Coverage (Term): 35% Coverage (LOC): 42%
*- File /root/Targets/division.js/node_modules/ms/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/division.js/node_modules/finalhandler/node_modules/escape-html/index.js. Coverage (Term): 38% Coverage (LOC): 80%
*- File /root/Targets/division.js/node_modules/on-finished/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/division.js/node_modules/ee-first/index.js. Coverage (Term): 9% Coverage (LOC): 13%
*- File /root/Targets/division.js/node_modules/unpipe/index.js. Coverage (Term): 16% Coverage (LOC): 20%
*- File /root/Targets/division.js/node_modules/parseurl/index.js. Coverage (Term): 15% Coverage (LOC): 18%
*- File /root/Targets/division.js/node_modules/connect/lib/utils.js. Coverage (Term): 47% Coverage (LOC): 58%
*- File /root/Targets/division.js/node_modules/bytes/index.js. Coverage (Term): 18% Coverage (LOC): 25%
*- File /root/Targets/division.js/node_modules/content-type/index.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/division.js/node_modules/cookie-parser/index.js. Coverage (Term): 34% Coverage (LOC): 37%
*- File /root/Targets/division.js/node_modules/cookie/index.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/division.js/node_modules/cookie-parser/lib/parse.js. Coverage (Term): 16% Coverage (LOC): 30%
*- File /root/Targets/division.js/node_modules/cookie-signature/index.js. Coverage (Term): 19% Coverage (LOC): 40%
*- File /root/Targets/division.js/node_modules/http-errors/index.js. Coverage (Term): 42% Coverage (LOC): 37%
*- File /root/Targets/division.js/node_modules/statuses/index.js. Coverage (Term): 56% Coverage (LOC): 67%
*- File /root/Targets/division.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/division.js/node_modules/type-is/index.js. Coverage (Term): 13% Coverage (LOC): 20%
*- File /root/Targets/division.js/node_modules/media-typer/index.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/division.js/node_modules/mime-types/index.js. Coverage (Term): 48% Coverage (LOC): 51%
*- File /root/Targets/division.js/node_modules/mime-db/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/division.js/node_modules/utils-merge/index.js. Coverage (Term): 40% Coverage (LOC): 40%
*- File eval. Coverage (Term): 42% Coverage (LOC): 50%
*- File /root/Targets/division.js/node_modules/connect/lib/patch.js. Coverage (Term): 29% Coverage (LOC): 38%
*- File /root/Targets/division.js/node_modules/on-headers/index.js. Coverage (Term): 10% Coverage (LOC): 17%
*- File /root/Targets/division.js/node_modules/connect/lib/middleware/static.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/division.js/node_modules/serve-static/index.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/division.js/node_modules/escape-html/index.js. Coverage (Term): 16% Coverage (LOC): 18%
*- File /root/Targets/division.js/node_modules/send/index.js. Coverage (Term): 15% Coverage (LOC): 20%
*- File /root/Targets/division.js/node_modules/send/node_modules/depd/index.js. Coverage (Term): 32% Coverage (LOC): 34%
*- File /root/Targets/division.js/node_modules/send/node_modules/depd/lib/compat/index.js. Coverage (Term): 87% Coverage (LOC): 97%
*- File /root/Targets/division.js/node_modules/destroy/index.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/division.js/node_modules/range-parser/index.js. Coverage (Term): 12% Coverage (LOC): 19%
*- File /root/Targets/division.js/node_modules/mime/mime.js. Coverage (Term): 56% Coverage (LOC): 75%
*- File /root/Targets/division.js/node_modules/fresh/index.js. Coverage (Term): 13% Coverage (LOC): 14%
*- File /root/Targets/division.js/node_modules/etag/index.js. Coverage (Term): 17% Coverage (LOC): 34%
*- File /root/Targets/division.js/node_modules/send/node_modules/statuses/index.js. Coverage (Term): 50% Coverage (LOC): 63%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
