/root/Targets/jser.cc
└─┬ jser.cc@0.0.1 
  ├─┬ mditor@0.1.4 
  │ ├── font-awesome@4.7.0 
  │ ├── github-markdown-css@2.8.0 
  │ ├── highlight.js@8.9.1 
  │ ├── jquery@2.2.4 
  │ ├── keymaster@1.6.2 
  │ ├── marked@0.3.6 
  │ └─┬ xss@0.2.18 
  │   ├── commander@2.11.0 
  │   └── cssfilter@0.0.8 
  ├─┬ mongoose@4.11.13 
  │ ├─┬ async@2.1.4 
  │ │ └── lodash@4.17.4 
  │ ├── bson@1.0.4 
  │ ├── hooks-fixed@2.0.0 
  │ ├── kareem@1.5.0 
  │ ├─┬ mongodb@2.2.31 
  │ │ ├── es6-promise@3.2.1 
  │ │ ├─┬ mongodb-core@2.1.15 
  │ │ │ └─┬ require_optional@1.0.1 
  │ │ │   ├── resolve-from@2.0.0 
  │ │ │   └── semver@5.4.1 
  │ │ └─┬ readable-stream@2.2.7 
  │ │   ├── buffer-shims@1.0.0 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── isarray@1.0.0 
  │ │   ├── process-nextick-args@1.0.7 
  │ │   ├── string_decoder@1.0.3 
  │ │   └── util-deprecate@1.0.2 
  │ ├── mpath@0.3.0 
  │ ├── mpromise@0.5.5 
  │ ├─┬ mquery@2.3.1 
  │ │ ├── bluebird@2.10.2 
  │ │ ├── debug@2.6.8 
  │ │ └── sliced@0.0.5 
  │ ├── ms@2.0.0 
  │ ├── muri@1.2.2 
  │ ├── regexp-clone@0.0.1 
  │ └── sliced@1.0.1 
  ├─┬ nodemailer@1.11.0 
  │ ├─┬ libmime@1.2.0 
  │ │ ├── iconv-lite@0.4.19 
  │ │ ├── libbase64@0.1.0 
  │ │ └── libqp@1.1.0 
  │ ├─┬ mailcomposer@2.1.0 
  │ │ └─┬ buildmail@2.0.0 
  │ │   ├── addressparser@0.3.2 
  │ │   └── needle@0.10.0 
  │ ├── needle@0.11.0 
  │ ├─┬ nodemailer-direct-transport@1.1.0 
  │ │ └── smtp-connection@1.3.8 
  │ └─┬ nodemailer-smtp-transport@1.1.0 
  │   ├── clone@1.0.2 
  │   └── nodemailer-wellknown@0.1.10 
  ├─┬ nokit-handler-less@1.0.1 
  │ └─┬ less@2.5.1 
  │   ├─┬ errno@0.1.4 
  │   │ └── prr@0.0.0 
  │   ├─┬ graceful-fs@3.0.11 
  │   │ └── natives@1.1.0 
  │   ├── image-size@0.3.5 
  │   ├── mime@1.4.1 
  │   ├─┬ mkdirp@0.5.1 
  │   │ └── minimist@0.0.8 
  │   ├─┬ promise@6.1.0 
  │   │ └── asap@1.0.0 
  │   └─┬ source-map@0.4.4 
  │     └── amdefine@1.0.1 
  ├─┬ nokit-session-redis@1.0.6 
  │ └─┬ redis@2.8.0 
  │   ├── double-ended-queue@2.1.0-0 
  │   ├── redis-commands@1.3.1 
  │   └── redis-parser@2.6.0 
  ├─┬ nokitjs@1.26.3 
  │ ├── bufferhelper@0.2.1 
  │ ├── bufstream@0.0.2 
  │ ├─┬ cheerio@0.19.0 
  │ │ ├─┬ css-select@1.0.0 
  │ │ │ ├── boolbase@1.0.0 
  │ │ │ ├── css-what@1.0.0 
  │ │ │ ├── domutils@1.4.3 
  │ │ │ └── nth-check@1.0.1 
  │ │ ├─┬ dom-serializer@0.1.0 
  │ │ │ └── domelementtype@1.1.3 
  │ │ ├── entities@1.1.1 
  │ │ ├─┬ htmlparser2@3.8.3 
  │ │ │ ├── domelementtype@1.3.0 
  │ │ │ ├── domhandler@2.3.0 
  │ │ │ ├── domutils@1.5.1 
  │ │ │ ├── entities@1.0.0 
  │ │ │ └─┬ readable-stream@1.1.14 
  │ │ │   ├── isarray@0.0.1 
  │ │ │   └── string_decoder@0.10.31 
  │ │ └── lodash@3.10.1 
  │ ├─┬ chokidar@1.7.0 
  │ │ ├─┬ anymatch@1.3.2 
  │ │ │ ├─┬ micromatch@2.3.11 
  │ │ │ │ ├─┬ arr-diff@2.0.0 
  │ │ │ │ │ └── arr-flatten@1.1.0 
  │ │ │ │ ├── array-unique@0.2.1 
  │ │ │ │ ├─┬ braces@1.8.5 
  │ │ │ │ │ ├─┬ expand-range@1.8.2 
  │ │ │ │ │ │ └─┬ fill-range@2.2.3 
  │ │ │ │ │ │   ├── is-number@2.1.0 
  │ │ │ │ │ │   ├── isobject@2.1.0 
  │ │ │ │ │ │   ├─┬ randomatic@1.1.7 
  │ │ │ │ │ │   │ ├─┬ is-number@3.0.0 
  │ │ │ │ │ │   │ │ └── kind-of@3.2.2 
  │ │ │ │ │ │   │ └── kind-of@4.0.0 
  │ │ │ │ │ │   └── repeat-string@1.6.1 
  │ │ │ │ │ ├── preserve@0.2.0 
  │ │ │ │ │ └── repeat-element@1.1.2 
  │ │ │ │ ├─┬ expand-brackets@0.1.5 
  │ │ │ │ │ └── is-posix-bracket@0.1.1 
  │ │ │ │ ├── extglob@0.3.2 
  │ │ │ │ ├── filename-regex@2.0.1 
  │ │ │ │ ├─┬ kind-of@3.2.2 
  │ │ │ │ │ └── is-buffer@1.1.5 
  │ │ │ │ ├─┬ object.omit@2.0.1 
  │ │ │ │ │ ├─┬ for-own@0.1.5 
  │ │ │ │ │ │ └── for-in@1.0.2 
  │ │ │ │ │ └── is-extendable@0.1.1 
  │ │ │ │ ├─┬ parse-glob@3.0.4 
  │ │ │ │ │ ├── glob-base@0.3.0 
  │ │ │ │ │ └── is-dotfile@1.0.3 
  │ │ │ │ └─┬ regex-cache@0.4.4 
  │ │ │ │   └─┬ is-equal-shallow@0.1.3 
  │ │ │ │     └── is-primitive@2.0.0 
  │ │ │ └─┬ normalize-path@2.1.1 
  │ │ │   └── remove-trailing-separator@1.1.0 
  │ │ ├── async-each@1.0.1 
  │ │ ├── glob-parent@2.0.0 
  │ │ ├── inherits@2.0.3 
  │ │ ├─┬ is-binary-path@1.0.1 
  │ │ │ └── binary-extensions@1.10.0 
  │ │ ├─┬ is-glob@2.0.1 
  │ │ │ └── is-extglob@1.0.0 
  │ │ ├── path-is-absolute@1.0.1 
  │ │ └─┬ readdirp@2.1.0 
  │ │   ├── graceful-fs@4.1.11 
  │ │   ├─┬ minimatch@3.0.4 
  │ │   │ └─┬ brace-expansion@1.1.8 
  │ │   │   ├── balanced-match@1.0.0 
  │ │   │   └── concat-map@0.0.1 
  │ │   └── set-immediate-shim@1.0.1 
  │ ├── cify@2.1.11 
  │ ├── cmdline@2.0.3 
  │ ├── co@4.6.0 
  │ ├─┬ confman@0.2.6 
  │ │ ├─┬ cson-parser@1.3.5 
  │ │ │ └── coffee-script@1.12.7 
  │ │ ├── ini-parser@0.0.2 
  │ │ ├─┬ js-yaml@3.10.0 
  │ │ │ ├─┬ argparse@1.0.9 
  │ │ │ │ └── sprintf-js@1.0.3 
  │ │ │ └── esprima@4.0.0 
  │ │ ├── pixl-xml@1.0.13 
  │ │ ├─┬ plist@1.2.0 
  │ │ │ ├── base64-js@0.0.8 
  │ │ │ ├─┬ xmlbuilder@4.0.0 
  │ │ │ │ └── lodash@3.10.1 
  │ │ │ └── xmldom@0.1.27 
  │ │ ├── properties@1.2.1 
  │ │ ├── toml@2.3.3 
  │ │ └── vmodule-webpack-plugin@1.0.4 
  │ ├─┬ console.table@0.4.0 
  │ │ └── easy-table@0.3.0 
  │ ├── formidable@1.1.1 
  │ ├── nb64@0.0.1 
  │ ├── ntils@2.1.2 
  │ ├── oneport@1.0.2 
  │ ├── smache@1.0.4 
  │ ├── thunkify@2.1.2 
  │ ├─┬ tpjs@3.8.3 
  │ │ └─┬ uglify-js@2.8.29 
  │ │   ├── source-map@0.5.7 
  │ │   ├── uglify-to-browserify@1.0.2 
  │ │   └─┬ yargs@3.10.0 
  │ │     ├── camelcase@1.2.1 
  │ │     ├─┬ cliui@2.1.0 
  │ │     │ ├─┬ center-align@0.1.3 
  │ │     │ │ ├─┬ align-text@0.1.4 
  │ │     │ │ │ └── longest@1.0.1 
  │ │     │ │ └── lazy-cache@1.0.4 
  │ │     │ ├── right-align@0.1.3 
  │ │     │ └── wordwrap@0.0.2 
  │ │     ├── decamelize@1.2.0 
  │ │     └── window-size@0.1.0 
  │ └─┬ xml2js@0.4.19 
  │   ├── sax@1.2.4 
  │   └── xmlbuilder@9.0.4 
  ├─┬ request@2.83.0 
  │ ├── aws-sign2@0.7.0 
  │ ├── aws4@1.6.0 
  │ ├── caseless@0.12.0 
  │ ├─┬ combined-stream@1.0.5 
  │ │ └── delayed-stream@1.0.0 
  │ ├── extend@3.0.1 
  │ ├── forever-agent@0.6.1 
  │ ├─┬ form-data@2.3.1 
  │ │ └── asynckit@0.4.0 
  │ ├─┬ har-validator@5.0.3 
  │ │ ├─┬ ajv@5.2.3 
  │ │ │ ├── fast-deep-equal@1.0.0 
  │ │ │ ├── json-schema-traverse@0.3.1 
  │ │ │ └─┬ json-stable-stringify@1.0.1 
  │ │ │   └── jsonify@0.0.0 
  │ │ └── har-schema@2.0.0 
  │ ├─┬ hawk@6.0.2 
  │ │ ├── boom@4.3.1 
  │ │ ├─┬ cryptiles@3.1.2 
  │ │ │ └── boom@5.2.0 
  │ │ ├── hoek@4.2.0 
  │ │ └── sntp@2.0.2 
  │ ├─┬ http-signature@1.2.0 
  │ │ ├── assert-plus@1.0.0 
  │ │ ├─┬ jsprim@1.4.1 
  │ │ │ ├── extsprintf@1.3.0 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └── verror@1.10.0 
  │ │ └─┬ sshpk@1.13.1 
  │ │   ├── asn1@0.2.3 
  │ │   ├── bcrypt-pbkdf@1.0.1 
  │ │   ├── dashdash@1.14.1 
  │ │   ├── ecc-jsbn@0.1.1 
  │ │   ├── getpass@0.1.7 
  │ │   ├── jsbn@0.1.1 
  │ │   └── tweetnacl@0.14.5 
  │ ├── is-typedarray@1.0.0 
  │ ├── isstream@0.1.2 
  │ ├── json-stringify-safe@5.0.1 
  │ ├─┬ mime-types@2.1.17 
  │ │ └── mime-db@1.30.0 
  │ ├── oauth-sign@0.8.2 
  │ ├── performance-now@2.1.0 
  │ ├── qs@6.5.1 
  │ ├── safe-buffer@5.1.1 
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.3 
  │ │ └── punycode@1.4.1 
  │ ├── tunnel-agent@0.6.0 
  │ └── uuid@3.1.0 
  └── timeago-words@0.0.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/jser.cc/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 28.999999999999996% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0558 took 2.5747s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: path is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/jser.cc/node_modules/jser.cc/app.js. Coverage (Term): 28% Coverage (LOC): 29%
*- File /root/Targets/jser.cc/node_modules/nokitjs/lib/index.js. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
