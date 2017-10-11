
> iconv@2.3.0 install /root/Targets/spider.io/node_modules/iconv
> node-gyp rebuild

make: Entering directory '/root/Targets/spider.io/node_modules/iconv/build'
  CXX(target) Release/obj.target/iconv/src/binding.o
  CC(target) Release/obj.target/iconv/deps/libiconv/lib/iconv.o
  CC(target) Release/obj.target/iconv/support/localcharset.o
  SOLINK_MODULE(target) Release/obj.target/iconv.node
  COPY Release/iconv.node
make: Leaving directory '/root/Targets/spider.io/node_modules/iconv/build'
/root/Targets/spider.io
└─┬ spider.io@4.2.7 
  └─┬ node-web-crawler@0.0.6 
    ├─┬ cheerio@0.18.0 
    │ ├─┬ CSSselect@0.4.1 
    │ │ ├── CSSwhat@0.4.7 
    │ │ └── domutils@1.4.3 
    │ ├─┬ dom-serializer@0.0.1 
    │ │ └── domelementtype@1.1.3 
    │ ├── entities@1.1.1 
    │ └─┬ htmlparser2@3.8.3 
    │   ├── domelementtype@1.3.0 
    │   ├── domhandler@2.3.0 
    │   ├── domutils@1.5.1 
    │   ├── entities@1.0.0 
    │   └─┬ readable-stream@1.1.14 
    │     ├── core-util-is@1.0.2 
    │     ├── inherits@2.0.3 
    │     ├── isarray@0.0.1 
    │     └── string_decoder@0.10.31 
    ├── generic-pool@2.1.1 
    ├─┬ iconv@2.3.0 
    │ └── nan@2.7.0 
    ├── iconv-lite@0.4.4 
    ├── jschardet@1.1.0 
    ├── lodash@2.4.1 
    └─┬ request@2.42.0 
      ├── aws-sign2@0.5.0 
      ├─┬ bl@0.9.5 
      │ └── readable-stream@1.0.34 
      ├── caseless@0.6.0 
      ├── forever-agent@0.5.2 
      ├─┬ form-data@0.1.4 
      │ ├── async@0.9.2 
      │ ├─┬ combined-stream@0.0.7 
      │ │ └── delayed-stream@0.0.5 
      │ └── mime@1.2.11 
      ├─┬ hawk@1.1.1 
      │ ├── boom@0.4.2 
      │ ├── cryptiles@0.2.2 
      │ ├── hoek@0.9.1 
      │ └── sntp@0.2.4 
      ├─┬ http-signature@0.10.1 
      │ ├── asn1@0.1.11 
      │ ├── assert-plus@0.1.5 
      │ └── ctype@0.5.3 
      ├── json-stringify-safe@5.0.1 
      ├── mime-types@1.0.2 
      ├── node-uuid@1.4.8 
      ├── oauth-sign@0.4.0 
      ├── qs@1.2.2 
      ├── stringstream@0.0.5 
      ├─┬ tough-cookie@2.3.3 
      │ └── punycode@1.4.1 
      └── tunnel-agent@0.4.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/spider.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0108 took 1.8332s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
