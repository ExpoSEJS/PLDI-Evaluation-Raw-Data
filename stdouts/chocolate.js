
> contextify@0.1.15 install /root/Targets/chocolate.js/node_modules/contextify
> node-gyp rebuild

make: Entering directory '/root/Targets/chocolate.js/node_modules/contextify/build'
  CXX(target) Release/obj.target/contextify/src/contextify.o
contextify.target.mk:94: recipe for target 'Release/obj.target/contextify/src/contextify.o' failed
make: Leaving directory '/root/Targets/chocolate.js/node_modules/contextify/build'
/root/Targets/chocolate.js
├─┬ grunt@0.4.5 
│ ├── async@0.1.22 
│ ├── coffee-script@1.3.3 
│ ├── colors@0.6.2 
│ ├── dateformat@1.0.2-1.2.3 
│ ├── eventemitter2@0.4.14 
│ ├── exit@0.1.2 
│ ├── getobject@0.1.0 
│ ├─┬ glob@3.1.21 
│ │ ├── graceful-fs@1.2.3 
│ │ └── inherits@1.0.2 
│ ├─┬ grunt-legacy-log@0.1.3 
│ │ ├─┬ grunt-legacy-log-utils@0.1.1 
│ │ │ ├── lodash@2.4.2 
│ │ │ └── underscore.string@2.3.3 
│ │ ├── lodash@2.4.2 
│ │ └── underscore.string@2.3.3 
│ ├── grunt-legacy-util@0.2.0 
│ ├── hooker@0.2.3 
│ ├── iconv-lite@0.2.11 
│ ├─┬ js-yaml@2.0.5 
│ │ ├─┬ argparse@0.1.16 
│ │ │ ├── underscore@1.7.0 
│ │ │ └── underscore.string@2.4.0 
│ │ └── esprima@1.0.4 
│ ├── lodash@0.9.2 
│ ├─┬ minimatch@0.2.14 
│ │ ├── lru-cache@2.7.3 
│ │ └── sigmund@1.0.1 
│ ├─┬ nopt@1.0.10 
│ │ └── abbrev@1.1.1 
│ ├── underscore.string@2.2.1 
│ └── which@1.0.9 
├─┬ grunt-autoprefixer@0.7.6 
│ ├─┬ autoprefixer@1.3.1 
│ │ ├── caniuse-db@1.0.30000743 
│ │ ├─┬ fs-extra@0.9.1 
│ │ │ ├── jsonfile@1.1.1 
│ │ │ └── ncp@0.5.1 
│ │ └─┬ postcss@0.3.5 
│ │   └── base64-js@0.0.8 
│ └── diff@1.0.8 
├─┬ grunt-contrib-clean@0.5.0 
│ └── rimraf@2.2.8 
├─┬ grunt-contrib-coffee@0.10.1 
│ ├─┬ chalk@0.4.0 
│ │ ├── ansi-styles@1.0.0 
│ │ ├── has-color@0.1.7 
│ │ └── strip-ansi@0.1.1 
│ ├─┬ coffee-script@1.7.1 
│ │ └── mkdirp@0.3.5 
│ └── lodash@2.4.2 
├── grunt-contrib-copy@0.5.0 
├─┬ grunt-contrib-imagemin@0.6.1 
│ ├── async@0.2.10 
│ ├─┬ image-min@0.2.3 
│ │ ├─┬ concat-stream@1.6.0 
│ │ │ ├─┬ readable-stream@2.3.3 
│ │ │ │ ├── core-util-is@1.0.2 
│ │ │ │ ├── isarray@1.0.0 
│ │ │ │ ├── process-nextick-args@1.0.7 
│ │ │ │ ├── safe-buffer@5.1.1 
│ │ │ │ ├── string_decoder@1.0.3 
│ │ │ │ └── util-deprecate@1.0.2 
│ │ │ └── typedarray@0.0.6 
│ │ ├── filesize@2.0.4 
│ │ ├─┬ gifsicle@0.1.7 
│ │ │ ├─┬ bin-build@0.1.1 
│ │ │ │ ├─┬ download@0.1.19 
│ │ │ │ │ ├─┬ decompress@0.2.5 
│ │ │ │ │ │ ├── adm-zip@0.4.7 
│ │ │ │ │ │ ├─┬ ext-name@1.0.1 
│ │ │ │ │ │ │ ├─┬ ext-list@0.2.0 
│ │ │ │ │ │ │ │ └─┬ got@0.2.0 
│ │ │ │ │ │ │ │   └── object-assign@0.3.1 
│ │ │ │ │ │ │ └── underscore.string@2.3.3 
│ │ │ │ │ │ ├── mkdirp@0.3.5 
│ │ │ │ │ │ ├── nopt@2.2.1 
│ │ │ │ │ │ └─┬ tar@0.1.20 
│ │ │ │ │ │   ├── block-stream@0.0.9 
│ │ │ │ │ │   └─┬ fstream@0.1.31 
│ │ │ │ │ │     └── graceful-fs@3.0.11 
│ │ │ │ │ ├── each-async@0.1.3 
│ │ │ │ │ ├── get-stdin@0.1.0 
│ │ │ │ │ ├── get-urls@0.1.2 
│ │ │ │ │ ├── mkdirp@0.3.5 
│ │ │ │ │ ├── nopt@2.2.1 
│ │ │ │ │ └─┬ request@2.83.0 
│ │ │ │ │   ├── aws-sign2@0.7.0 
│ │ │ │ │   ├── aws4@1.6.0 
│ │ │ │ │   ├── caseless@0.12.0 
│ │ │ │ │   ├─┬ combined-stream@1.0.5 
│ │ │ │ │   │ └── delayed-stream@1.0.0 
│ │ │ │ │   ├── extend@3.0.1 
│ │ │ │ │   ├── forever-agent@0.6.1 
│ │ │ │ │   ├─┬ form-data@2.3.1 
│ │ │ │ │   │ └── asynckit@0.4.0 
│ │ │ │ │   ├─┬ har-validator@5.0.3 
│ │ │ │ │   │ ├─┬ ajv@5.2.3 
│ │ │ │ │   │ │ ├── co@4.6.0 
│ │ │ │ │   │ │ ├── fast-deep-equal@1.0.0 
│ │ │ │ │   │ │ ├── json-schema-traverse@0.3.1 
│ │ │ │ │   │ │ └── json-stable-stringify@1.0.1 
│ │ │ │ │   │ └── har-schema@2.0.0 
│ │ │ │ │   ├─┬ hawk@6.0.2 
│ │ │ │ │   │ ├── boom@4.3.1 
│ │ │ │ │   │ ├─┬ cryptiles@3.1.2 
│ │ │ │ │   │ │ └── boom@5.2.0 
│ │ │ │ │   │ ├── hoek@4.2.0 
│ │ │ │ │   │ └── sntp@2.0.2 
│ │ │ │ │   ├─┬ http-signature@1.2.0 
│ │ │ │ │   │ ├── assert-plus@1.0.0 
│ │ │ │ │   │ ├─┬ jsprim@1.4.1 
│ │ │ │ │   │ │ ├── extsprintf@1.3.0 
│ │ │ │ │   │ │ ├── json-schema@0.2.3 
│ │ │ │ │   │ │ └── verror@1.10.0 
│ │ │ │ │   │ └─┬ sshpk@1.13.1 
│ │ │ │ │   │   ├── asn1@0.2.3 
│ │ │ │ │   │   ├── bcrypt-pbkdf@1.0.1 
│ │ │ │ │   │   ├── dashdash@1.14.1 
│ │ │ │ │   │   ├── ecc-jsbn@0.1.1 
│ │ │ │ │   │   ├── getpass@0.1.7 
│ │ │ │ │   │   ├── jsbn@0.1.1 
│ │ │ │ │   │   └── tweetnacl@0.14.5 
│ │ │ │ │   ├── is-typedarray@1.0.0 
│ │ │ │ │   ├── isstream@0.1.2 
│ │ │ │ │   ├─┬ mime-types@2.1.17 
│ │ │ │ │   │ └── mime-db@1.30.0 
│ │ │ │ │   ├── oauth-sign@0.8.2 
│ │ │ │ │   ├── performance-now@2.1.0 
│ │ │ │ │   ├── qs@6.5.1 
│ │ │ │ │   ├── tunnel-agent@0.6.0 
│ │ │ │ │   └── uuid@3.1.0 
│ │ │ │ └─┬ tempfile@0.1.3 
│ │ │ │   └── uuid@1.4.2 
│ │ │ ├─┬ bin-wrapper@0.3.4 
│ │ │ │ ├── bin-check@0.1.5 
│ │ │ │ └── find-file@0.1.4 
│ │ │ └─┬ log-symbols@1.0.2 
│ │ │   └─┬ chalk@1.1.3 
│ │ │     ├── ansi-styles@2.2.1 
│ │ │     └── strip-ansi@3.0.1 
│ │ ├── jpegtran-bin@0.2.8 
│ │ ├─┬ map-key@0.1.5 
│ │ │ ├── lodash@2.4.2 
│ │ │ └── underscore.string@2.4.0 
│ │ ├── mout@0.9.1 
│ │ ├─┬ multipipe@0.0.2 
│ │ │ └── duplexer2@0.0.1 
│ │ ├── optipng-bin@0.3.11 
│ │ ├─┬ pngquant-bin@0.1.7 
│ │ │ └─┬ bin-wrapper@0.2.4 
│ │ │   └── executable@0.1.3 
│ │ ├─┬ stream-combiner@0.0.4 
│ │ │ └── duplexer@0.1.1 
│ │ ├─┬ through2@0.4.2 
│ │ │ ├─┬ readable-stream@1.0.34 
│ │ │ │ ├── isarray@0.0.1 
│ │ │ │ └── string_decoder@0.10.31 
│ │ │ └─┬ xtend@2.1.2 
│ │ │   └── object-keys@0.4.0 
│ │ └── win-spawn@2.0.0 
│ ├── mkdirp@0.3.5 
│ └── pretty-bytes@0.1.2 
├─┬ grunt-contrib-less@0.11.4 
│ ├── async@0.2.10 
│ ├─┬ chalk@0.5.1 
│ │ ├── ansi-styles@1.1.0 
│ │ ├── escape-string-regexp@1.0.5 
│ │ ├─┬ has-ansi@0.1.0 
│ │ │ └── ansi-regex@0.2.1 
│ │ ├── strip-ansi@0.3.0 
│ │ └── supports-color@0.2.0 
│ ├─┬ less@1.7.5 
│ │ ├─┬ clean-css@2.2.23 
│ │ │ └── commander@2.2.0 
│ │ ├─┬ graceful-fs@3.0.11 
│ │ │ └── natives@1.1.0 
│ │ ├── mime@1.2.11 
│ │ ├─┬ mkdirp@0.5.1 
│ │ │ └── minimist@0.0.8 
│ │ ├─┬ request@2.40.0 
│ │ │ ├── aws-sign2@0.5.0 
│ │ │ ├── forever-agent@0.5.2 
│ │ │ ├─┬ form-data@0.1.4 
│ │ │ │ ├── async@0.9.2 
│ │ │ │ └─┬ combined-stream@0.0.7 
│ │ │ │   └── delayed-stream@0.0.5 
│ │ │ ├─┬ hawk@1.1.1 
│ │ │ │ ├── boom@0.4.2 
│ │ │ │ ├── cryptiles@0.2.2 
│ │ │ │ ├── hoek@0.9.1 
│ │ │ │ └── sntp@0.2.4 
│ │ │ ├─┬ http-signature@0.10.1 
│ │ │ │ ├── asn1@0.1.11 
│ │ │ │ ├── assert-plus@0.1.5 
│ │ │ │ └── ctype@0.5.3 
│ │ │ ├── json-stringify-safe@5.0.1 
│ │ │ ├── mime-types@1.0.2 
│ │ │ ├── node-uuid@1.4.8 
│ │ │ ├── oauth-sign@0.3.0 
│ │ │ ├── qs@1.0.2 
│ │ │ ├── stringstream@0.0.5 
│ │ │ ├─┬ tough-cookie@2.3.3 
│ │ │ │ └── punycode@1.4.1 
│ │ │ └── tunnel-agent@0.4.3 
│ │ └─┬ source-map@0.1.43 
│ │   └── amdefine@1.0.1 
│ ├── lodash@2.4.2 
│ └─┬ maxmin@0.1.0 
│   └─┬ gzip-size@0.1.1 
│     └─┬ zlib-browserify@0.0.3 
│       └─┬ tape@0.2.2 
│         ├── deep-equal@0.0.0 
│         ├── defined@0.0.0 
│         └── jsonify@0.0.0 
├─┬ grunt-contrib-uglify@0.4.1 
│ └─┬ uglify-js@2.8.29 
│   ├── source-map@0.5.7 
│   ├── uglify-to-browserify@1.0.2 
│   └─┬ yargs@3.10.0 
│     ├── camelcase@1.2.1 
│     ├─┬ cliui@2.1.0 
│     │ ├─┬ center-align@0.1.3 
│     │ │ ├─┬ align-text@0.1.4 
│     │ │ │ ├─┬ kind-of@3.2.2 
│     │ │ │ │ └── is-buffer@1.1.5 
│     │ │ │ ├── longest@1.0.1 
│     │ │ │ └── repeat-string@1.6.1 
│     │ │ └── lazy-cache@1.0.4 
│     │ ├── right-align@0.1.3 
│     │ └── wordwrap@0.0.2 
│     ├── decamelize@1.2.0 
│     └── window-size@0.1.0 
├─┬ grunt-csso@0.6.5 
│ ├─┬ chalk@0.5.1 
│ │ ├── ansi-styles@1.1.0 
│ │ ├─┬ has-ansi@0.1.0 
│ │ │ └── ansi-regex@0.2.1 
│ │ ├── strip-ansi@0.3.0 
│ │ └── supports-color@0.2.0 
│ ├─┬ csso@1.8.2 
│ │ ├─┬ clap@1.2.3 
│ │ │ └─┬ chalk@1.1.3 
│ │ │   ├── ansi-styles@2.2.1 
│ │ │   ├── has-ansi@2.0.0 
│ │ │   ├─┬ strip-ansi@3.0.1 
│ │ │   │ └── ansi-regex@2.1.1 
│ │ │   └── supports-color@2.0.0 
│ │ └── source-map@0.5.7 
│ └─┬ maxmin@1.1.0 
│   ├─┬ chalk@1.1.3 
│   │ ├── ansi-styles@2.2.1 
│   │ ├─┬ has-ansi@2.0.0 
│   │ │ └── ansi-regex@2.1.1 
│   │ ├── strip-ansi@3.0.1 
│   │ └── supports-color@2.0.0 
│   ├─┬ figures@1.7.0 
│   │ └── object-assign@4.1.1 
│   ├─┬ gzip-size@1.0.0 
│   │ └─┬ browserify-zlib@0.1.4 
│   │   └── pako@0.2.9 
│   └─┬ pretty-bytes@1.0.4 
│     ├── get-stdin@4.0.1 
│     └─┬ meow@3.7.0 
│       ├─┬ camelcase-keys@2.1.0 
│       │ └── camelcase@2.1.1 
│       ├─┬ loud-rejection@1.6.0 
│       │ ├─┬ currently-unhandled@0.4.1 
│       │ │ └── array-find-index@1.0.2 
│       │ └── signal-exit@3.0.2 
│       ├── map-obj@1.0.1 
│       ├── minimist@1.2.0 
│       ├─┬ normalize-package-data@2.4.0 
│       │ ├── hosted-git-info@2.5.0 
│       │ ├─┬ is-builtin-module@1.0.0 
│       │ │ └── builtin-modules@1.1.1 
│       │ ├── semver@5.4.1 
│       │ └─┬ validate-npm-package-license@3.0.1 
│       │   ├─┬ spdx-correct@1.0.2 
│       │   │ └── spdx-license-ids@1.2.2 
│       │   └── spdx-expression-parse@1.0.4 
│       ├── object-assign@4.1.1 
│       ├─┬ read-pkg-up@1.0.1 
│       │ ├─┬ find-up@1.1.2 
│       │ │ ├── path-exists@2.1.0 
│       │ │ └─┬ pinkie-promise@2.0.1 
│       │ │   └── pinkie@2.0.4 
│       │ └─┬ read-pkg@1.1.0 
│       │   ├─┬ load-json-file@1.1.0 
│       │   │ ├── graceful-fs@4.1.11 
│       │   │ ├─┬ parse-json@2.2.0 
│       │   │ │ └─┬ error-ex@1.3.1 
│       │   │ │   └── is-arrayish@0.2.1 
│       │   │ ├── pify@2.3.0 
│       │   │ └─┬ strip-bom@2.0.0 
│       │   │   └── is-utf8@0.2.1 
│       │   └─┬ path-type@1.1.0 
│       │     └── graceful-fs@4.1.11 
│       ├─┬ redent@1.0.0 
│       │ ├─┬ indent-string@2.1.0 
│       │ │ └─┬ repeating@2.0.1 
│       │ │   └─┬ is-finite@1.0.2 
│       │ │     └── number-is-nan@1.0.1 
│       │ └─┬ strip-indent@1.0.1 
│       │   └── get-stdin@4.0.1 
│       └── trim-newlines@1.0.0 
├─┬ grunt-replace@0.7.9 
│ └─┬ applause@0.3.3 
│   ├─┬ cson@1.6.2 
│   │ ├─┬ ambi@2.5.0 
│   │ │ ├── editions@1.3.3 
│   │ │ └── typechecker@4.4.1 
│   │ ├─┬ coffee-script@1.8.0 
│   │ │ └── mkdirp@0.3.5 
│   │ ├─┬ extract-opts@2.2.0 
│   │ │ └── typechecker@2.0.8 
│   │ ├─┬ js2coffee@0.3.5 
│   │ │ ├─┬ coffee-script@1.7.1 
│   │ │ │ └── mkdirp@0.3.5 
│   │ │ ├── file@0.2.2 
│   │ │ ├── nopt@3.0.6 
│   │ │ └── underscore@1.6.0 
│   │ └── requirefresh@1.1.2 
│   ├─┬ js-yaml@3.10.0 
│   │ ├─┬ argparse@1.0.9 
│   │ │ └── sprintf-js@1.0.3 
│   │ └── esprima@4.0.0 
│   └── lodash@2.4.2 
└─┬ matchdep@0.3.0 
  ├─┬ findup-sync@0.1.3 
  │ ├─┬ glob@3.2.11 
  │ │ ├── inherits@2.0.3 
  │ │ └── minimatch@0.3.0 
  │ └── lodash@2.4.2 
  ├─┬ globule@0.1.0 
  │ └── lodash@1.0.2 
  ├── resolve@0.5.1 
  └── stack-trace@0.0.7 

