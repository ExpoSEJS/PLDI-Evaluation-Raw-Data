/root/Targets/coral.js
└─┬ coral.js@0.3.21 
  ├── accounting@0.4.1 
  ├─┬ aws-sdk@2.127.0 
  │ ├─┬ buffer@4.9.1 
  │ │ ├── base64-js@1.2.1 
  │ │ ├── ieee754@1.1.8 
  │ │ └── isarray@1.0.0 
  │ ├── crypto-browserify@1.0.9 
  │ ├── events@1.1.1 
  │ ├── jmespath@0.15.0 
  │ ├── querystring@0.2.0 
  │ ├── sax@1.2.1 
  │ ├─┬ url@0.10.3 
  │ │ └── punycode@1.3.2 
  │ ├── uuid@3.1.0 
  │ ├── xml2js@0.4.17 
  │ └─┬ xmlbuilder@4.2.1 
  │   └── lodash@4.17.4 
  ├── UNMET PEER DEPENDENCY awssum-amazon@~1
  ├─┬ awssum-amazon-s3@1.5.0 
  │ ├── data2xml@0.8.1 
  │ ├── dateformat@1.0.4-1.2.3 
  │ └── underscore@1.4.4 
  ├─┬ connect@3.6.5 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├─┬ finalhandler@1.0.6 
  │ │ ├── encodeurl@1.0.1 
  │ │ ├── escape-html@1.0.3 
  │ │ ├─┬ on-finished@2.3.0 
  │ │ │ └── ee-first@1.1.1 
  │ │ ├── statuses@1.3.1 
  │ │ └── unpipe@1.0.0 
  │ ├── parseurl@1.3.2 
  │ └── utils-merge@1.0.1 
  ├── connect-ensure-login@0.1.1 
  ├── connect-flash@0.1.1 
  ├── connect-redis@1.4.7 
  ├─┬ express@3.4.1 
  │ ├── buffer-crc32@0.2.1 
  │ ├── commander@2.0.0 
  │ ├─┬ connect@2.9.1 
  │ │ ├── bytes@0.2.0 
  │ │ ├─┬ multiparty@2.2.0 
  │ │ │ └── stream-counter@0.2.0 
  │ │ ├── pause@0.0.1 
  │ │ └── qs@0.6.5 
  │ ├── cookie@0.1.0 
  │ ├── cookie-signature@1.0.1 
  │ ├── fresh@0.2.0 
  │ ├── methods@0.0.1 
  │ ├── mkdirp@0.3.5 
  │ ├── range-parser@0.0.4 
  │ └─┬ send@0.1.4 
  │   └── mime@1.2.11 
  ├─┬ gm@1.16.0 
  │ ├── array-parallel@0.1.3 
  │ ├── array-series@0.1.5 
  │ ├── debug@0.7.0 
  │ ├── stream-to-buffer@0.0.1 
  │ └── through@2.3.8 
  ├─┬ grunt@1.0.1 
  │ ├── coffee-script@1.10.0 
  │ ├─┬ dateformat@1.0.12 
  │ │ ├── get-stdin@4.0.1 
  │ │ └─┬ meow@3.7.0 
  │ │   ├── camelcase-keys@2.1.0 
  │ │   ├─┬ loud-rejection@1.6.0 
  │ │   │ └─┬ currently-unhandled@0.4.1 
  │ │   │   └── array-find-index@1.0.2 
  │ │   ├── map-obj@1.0.1 
  │ │   ├── minimist@1.2.0 
  │ │   ├─┬ normalize-package-data@2.4.0 
  │ │   │ ├── hosted-git-info@2.5.0 
  │ │   │ ├─┬ is-builtin-module@1.0.0 
  │ │   │ │ └── builtin-modules@1.1.1 
  │ │   │ ├── semver@5.4.1 
  │ │   │ └─┬ validate-npm-package-license@3.0.1 
  │ │   │   ├─┬ spdx-correct@1.0.2 
  │ │   │   │ └── spdx-license-ids@1.2.2 
  │ │   │   └── spdx-expression-parse@1.0.4 
  │ │   ├── object-assign@4.1.1 
  │ │   ├─┬ read-pkg-up@1.0.1 
  │ │   │ ├─┬ find-up@1.1.2 
  │ │   │ │ ├── path-exists@2.1.0 
  │ │   │ │ └─┬ pinkie-promise@2.0.1 
  │ │   │ │   └── pinkie@2.0.4 
  │ │   │ └─┬ read-pkg@1.1.0 
  │ │   │   ├─┬ load-json-file@1.1.0 
  │ │   │   │ ├── graceful-fs@4.1.11 
  │ │   │   │ ├─┬ parse-json@2.2.0 
  │ │   │   │ │ └─┬ error-ex@1.3.1 
  │ │   │   │ │   └── is-arrayish@0.2.1 
  │ │   │   │ ├── pify@2.3.0 
  │ │   │   │ └─┬ strip-bom@2.0.0 
  │ │   │   │   └── is-utf8@0.2.1 
  │ │   │   └── path-type@1.1.0 
  │ │   ├─┬ redent@1.0.0 
  │ │   │ ├─┬ indent-string@2.1.0 
  │ │   │ │ └─┬ repeating@2.0.1 
  │ │   │ │   └── is-finite@1.0.2 
  │ │   │ └── strip-indent@1.0.1 
  │ │   └── trim-newlines@1.0.0 
  │ ├── eventemitter2@0.4.14 
  │ ├── exit@0.1.2 
  │ ├─┬ findup-sync@0.3.0 
  │ │ └── glob@5.0.15 
  │ ├─┬ glob@7.0.6 
  │ │ ├── fs.realpath@1.0.0 
  │ │ ├─┬ inflight@1.0.6 
  │ │ │ └── wrappy@1.0.2 
  │ │ ├── inherits@2.0.3 
  │ │ └── once@1.4.0 
  │ ├─┬ grunt-cli@1.2.0 
  │ │ └── resolve@1.1.7 
  │ ├── grunt-known-options@1.1.0 
  │ ├─┬ grunt-legacy-log@1.0.0 
  │ │ ├── colors@1.1.2 
  │ │ ├─┬ grunt-legacy-log-utils@1.0.0 
  │ │ │ └── lodash@4.3.0 
  │ │ ├── hooker@0.2.3 
  │ │ ├── lodash@3.10.1 
  │ │ └── underscore.string@3.2.3 
  │ ├─┬ grunt-legacy-util@1.0.0 
  │ │ ├── getobject@0.1.0 
  │ │ ├── lodash@4.3.0 
  │ │ └── which@1.2.14 
  │ ├── iconv-lite@0.4.19 
  │ ├─┬ js-yaml@3.5.5 
  │ │ ├─┬ argparse@1.0.9 
  │ │ │ └── sprintf-js@1.0.3 
  │ │ └── esprima@2.7.3 
  │ ├─┬ minimatch@3.0.4 
  │ │ └─┬ brace-expansion@1.1.8 
  │ │   ├── balanced-match@1.0.0 
  │ │   └── concat-map@0.0.1 
  │ ├─┬ nopt@3.0.6 
  │ │ └── abbrev@1.1.1 
  │ ├── path-is-absolute@1.0.1 
  │ └── rimraf@2.2.8 
  ├─┬ grunt-bumpup@0.6.3 
  │ ├── moment@2.18.1 
  │ └── semver@4.3.6 
  ├─┬ grunt-contrib-clean@1.1.0 
  │ ├── async@1.5.2 
  │ └── rimraf@2.6.2 
  ├─┬ grunt-contrib-concat@1.0.1 
  │ ├─┬ chalk@1.1.3 
  │ │ ├── ansi-styles@2.2.1 
  │ │ ├── escape-string-regexp@1.0.5 
  │ │ ├─┬ has-ansi@2.0.0 
  │ │ │ └── ansi-regex@2.1.1 
  │ │ ├── strip-ansi@3.0.1 
  │ │ └── supports-color@2.0.0 
  │ └── source-map@0.5.7 
  ├── grunt-text-replace@0.4.0 
  ├─┬ i18n@0.5.0 
  │ ├── mustache@2.3.0 
  │ └── sprintf@0.1.5 
  ├── json2xml@0.1.1 
  ├─┬ log4js@0.6.9 
  │ ├── async@0.1.15 
  │ ├─┬ readable-stream@1.0.34 
  │ │ ├── core-util-is@1.0.2 
  │ │ ├── isarray@0.0.1 
  │ │ └── string_decoder@0.10.31 
  │ └── semver@1.1.4 
  ├── moment@2.5.1 
  ├─┬ moment-timezone@0.5.13 
  │ └── moment@2.18.1 
  ├─┬ mysql@2.14.1 
  │ ├── bignumber.js@4.0.2 
  │ ├─┬ readable-stream@2.3.3 
  │ │ ├── process-nextick-args@1.0.7 
  │ │ ├── string_decoder@1.0.3 
  │ │ └── util-deprecate@1.0.2 
  │ ├── safe-buffer@5.1.1 
  │ └── sqlstring@2.2.0 
  ├─┬ nconf@0.8.5 
  │ ├── ini@1.3.4 
  │ ├── secure-keys@1.0.0 
  │ └─┬ yargs@3.32.0 
  │   ├── camelcase@2.1.1 
  │   ├─┬ cliui@3.2.0 
  │   │ └── wrap-ansi@2.1.0 
  │   ├── decamelize@1.2.0 
  │   ├─┬ os-locale@1.4.0 
  │   │ └─┬ lcid@1.0.0 
  │   │   └── invert-kv@1.0.0 
  │   ├─┬ string-width@1.0.2 
  │   │ ├── code-point-at@1.1.0 
  │   │ └─┬ is-fullwidth-code-point@1.0.0 
  │   │   └── number-is-nan@1.0.1 
  │   ├── window-size@0.1.4 
  │   └── y18n@3.2.1 
  ├─┬ nodemailer@0.6.0 
  │ ├── directmail@0.1.8 
  │ ├── he@0.3.6 
  │ ├─┬ mailcomposer@0.2.12 
  │ │ ├─┬ dkim-signer@0.1.2 
  │ │ │ └── punycode@1.2.4 
  │ │ ├─┬ follow-redirects@0.0.3 
  │ │ │ └── underscore@1.8.3 
  │ │ └─┬ mimelib@0.2.19 
  │ │   ├── addressparser@0.3.2 
  │ │   └── encoding@0.1.12 
  │ ├── public-address@0.1.2 
  │ ├─┬ readable-stream@1.1.14 
  │ │ └── isarray@0.0.1 
  │ └─┬ simplesmtp@0.3.35 
  │   ├── rai@0.1.12 
  │   └── xoauth2@0.1.8 
  ├─┬ nodeunit@0.8.2 
  │ └─┬ tap@10.7.2 
  │   ├── bind-obj-methods@1.0.0 
  │   ├── clean-yaml-object@0.1.0 
  │   ├── color-support@1.1.3 
  │   ├─┬ coveralls@2.13.3 
  │   │ ├── js-yaml@3.6.1 
  │   │ ├── lcov-parse@0.0.10 
  │   │ ├── log-driver@1.2.5 
  │   │ └─┬ request@2.79.0 
  │   │   ├── caseless@0.11.0 
  │   │   ├─┬ har-validator@2.0.6 
  │   │   │ ├── commander@2.11.0 
  │   │   │ └─┬ is-my-json-valid@2.16.1 
  │   │   │   ├── generate-function@2.0.0 
  │   │   │   ├─┬ generate-object-property@1.2.0 
  │   │   │   │ └── is-property@1.0.2 
  │   │   │   ├── jsonpointer@4.0.1 
  │   │   │   └── xtend@4.0.1 
  │   │   ├── qs@6.3.2 
  │   │   └── tunnel-agent@0.4.3 
  │   ├─┬ foreground-child@1.5.6 
  │   │ └─┬ cross-spawn@4.0.2 
  │   │   └─┬ lru-cache@4.1.1 
  │   │     ├── pseudomap@1.0.2 
  │   │     └── yallist@2.1.2 
  │   ├── fs-exists-cached@1.0.0 
  │   ├── function-loop@1.0.1 
  │   ├── isexe@2.0.0 
  │   ├─┬ nyc@11.2.1 
  │   │ ├── archy@1.0.0 
  │   │ ├── arrify@1.0.1 
  │   │ ├─┬ caching-transform@1.0.1 
  │   │ │ └─┬ write-file-atomic@1.3.4 
  │   │ │   ├── graceful-fs@4.1.11 
  │   │ │   ├── imurmurhash@0.1.4 
  │   │ │   └── slide@1.1.6 
  │   │ ├── convert-source-map@1.5.0 
  │   │ ├── debug-log@1.0.1 
  │   │ ├─┬ default-require-extensions@1.0.0 
  │   │ │ └─┬ strip-bom@2.0.0 
  │   │ │   └── is-utf8@0.2.1 
  │   │ ├─┬ find-cache-dir@0.1.1 
  │   │ │ ├── commondir@1.0.1 
  │   │ │ └─┬ pkg-dir@1.0.0 
  │   │ │   └─┬ find-up@1.1.2 
  │   │ │     ├── path-exists@2.1.0 
  │   │ │     └─┬ pinkie-promise@2.0.1 
  │   │ │       └── pinkie@2.0.4 
  │   │ ├─┬ find-up@2.1.0 
  │   │ │ └─┬ locate-path@2.0.0 
  │   │ │   ├─┬ p-locate@2.0.0 
  │   │ │   │ └── p-limit@1.1.0 
  │   │ │   └── path-exists@3.0.0 
  │   │ ├─┬ foreground-child@1.5.6 
  │   │ │ └─┬ cross-spawn@4.0.2 
  │   │ │   └─┬ lru-cache@4.1.1 
  │   │ │     ├── pseudomap@1.0.2 
  │   │ │     └── yallist@2.1.2 
  │   │ ├─┬ glob@7.1.2 
  │   │ │ ├── fs.realpath@1.0.0 
  │   │ │ ├─┬ inflight@1.0.6 
  │   │ │ │ └── wrappy@1.0.2 
  │   │ │ ├── inherits@2.0.3 
  │   │ │ ├─┬ minimatch@3.0.4 
  │   │ │ │ └─┬ brace-expansion@1.1.8 
  │   │ │ │   ├── balanced-match@1.0.0 
  │   │ │ │   └── concat-map@0.0.1 
  │   │ │ ├── once@1.4.0 
  │   │ │ └── path-is-absolute@1.0.1 
  │   │ ├── istanbul-lib-coverage@1.1.1 
  │   │ ├─┬ istanbul-lib-hook@1.0.7 
  │   │ │ └── append-transform@0.4.0 
  │   │ ├─┬ istanbul-lib-instrument@1.8.0 
  │   │ │ ├─┬ babel-generator@6.26.0 
  │   │ │ │ ├── babel-messages@6.23.0 
  │   │ │ │ ├─┬ babel-runtime@6.26.0 
  │   │ │ │ │ ├── core-js@2.5.1 
  │   │ │ │ │ └── regenerator-runtime@0.11.0 
  │   │ │ │ ├─┬ detect-indent@4.0.0 
  │   │ │ │ │ └─┬ repeating@2.0.1 
  │   │ │ │ │   └── is-finite@1.0.2 
  │   │ │ │ ├── jsesc@1.3.0 
  │   │ │ │ ├── lodash@4.17.4 
  │   │ │ │ └── trim-right@1.0.1 
  │   │ │ ├── babel-template@6.26.0 
  │   │ │ ├─┬ babel-traverse@6.26.0 
  │   │ │ │ ├─┬ babel-code-frame@6.26.0 
  │   │ │ │ │ ├─┬ chalk@1.1.3 
  │   │ │ │ │ │ ├── ansi-styles@2.2.1 
  │   │ │ │ │ │ ├── escape-string-regexp@1.0.5 
  │   │ │ │ │ │ ├── has-ansi@2.0.0 
  │   │ │ │ │ │ └── supports-color@2.0.0 
  │   │ │ │ │ └── js-tokens@3.0.2 
  │   │ │ │ ├── globals@9.18.0 
  │   │ │ │ └─┬ invariant@2.2.2 
  │   │ │ │   └── loose-envify@1.3.1 
  │   │ │ ├─┬ babel-types@6.26.0 
  │   │ │ │ ├── esutils@2.0.2 
  │   │ │ │ └── to-fast-properties@1.0.3 
  │   │ │ ├── babylon@6.18.0 
  │   │ │ └── semver@5.4.1 
  │   │ ├─┬ istanbul-lib-report@1.1.1 
  │   │ │ ├── path-parse@1.0.5 
  │   │ │ └─┬ supports-color@3.2.3 
  │   │ │   └── has-flag@1.0.0 
  │   │ ├─┬ istanbul-lib-source-maps@1.2.1 
  │   │ │ ├─┬ debug@2.6.8 
  │   │ │ │ └── ms@2.0.0 
  │   │ │ └── source-map@0.5.7 
  │   │ ├─┬ istanbul-reports@1.1.2 
  │   │ │ └─┬ handlebars@4.0.10 
  │   │ │   ├── async@1.5.2 
  │   │ │   ├─┬ optimist@0.6.1 
  │   │ │   │ └── wordwrap@0.0.3 
  │   │ │   ├─┬ source-map@0.4.4 
  │   │ │   │ └── amdefine@1.0.1 
  │   │ │   └─┬ uglify-js@2.8.29 
  │   │ │     ├── uglify-to-browserify@1.0.2 
  │   │ │     └─┬ yargs@3.10.0 
  │   │ │       ├── camelcase@1.2.1 
  │   │ │       ├─┬ cliui@2.1.0 
  │   │ │       │ ├─┬ center-align@0.1.3 
  │   │ │       │ │ ├─┬ align-text@0.1.4 
  │   │ │       │ │ │ └── longest@1.0.1 
  │   │ │       │ │ └── lazy-cache@1.0.4 
  │   │ │       │ ├── right-align@0.1.3 
  │   │ │       │ └── wordwrap@0.0.2 
  │   │ │       └── window-size@0.1.0 
  │   │ ├─┬ md5-hex@1.3.0 
  │   │ │ └── md5-o-matic@0.1.1 
  │   │ ├── merge-source-map@1.0.4 
  │   │ ├─┬ micromatch@2.3.11 
  │   │ │ ├─┬ arr-diff@2.0.0 
  │   │ │ │ └── arr-flatten@1.1.0 
  │   │ │ ├── array-unique@0.2.1 
  │   │ │ ├─┬ braces@1.8.5 
  │   │ │ │ ├─┬ expand-range@1.8.2 
  │   │ │ │ │ └─┬ fill-range@2.2.3 
  │   │ │ │ │   ├── is-number@2.1.0 
  │   │ │ │ │   ├─┬ isobject@2.1.0 
  │   │ │ │ │   │ └── isarray@1.0.0 
  │   │ │ │ │   ├─┬ randomatic@1.1.7 
  │   │ │ │ │   │ ├─┬ is-number@3.0.0 
  │   │ │ │ │   │ │ └── kind-of@3.2.2 
  │   │ │ │ │   │ └── kind-of@4.0.0 
  │   │ │ │ │   └── repeat-string@1.6.1 
  │   │ │ │ ├── preserve@0.2.0 
  │   │ │ │ └── repeat-element@1.1.2 
  │   │ │ ├─┬ expand-brackets@0.1.5 
  │   │ │ │ └── is-posix-bracket@0.1.1 
  │   │ │ ├── extglob@0.3.2 
  │   │ │ ├── filename-regex@2.0.1 
  │   │ │ ├── is-extglob@1.0.0 
  │   │ │ ├── is-glob@2.0.1 
  │   │ │ ├─┬ kind-of@3.2.2 
  │   │ │ │ └── is-buffer@1.1.5 
  │   │ │ ├─┬ normalize-path@2.1.1 
  │   │ │ │ └── remove-trailing-separator@1.1.0 
  │   │ │ ├─┬ object.omit@2.0.1 
  │   │ │ │ ├─┬ for-own@0.1.5 
  │   │ │ │ │ └── for-in@1.0.2 
  │   │ │ │ └── is-extendable@0.1.1 
  │   │ │ ├─┬ parse-glob@3.0.4 
  │   │ │ │ ├─┬ glob-base@0.3.0 
  │   │ │ │ │ └── glob-parent@2.0.0 
  │   │ │ │ └── is-dotfile@1.0.3 
  │   │ │ └─┬ regex-cache@0.4.4 
  │   │ │   └─┬ is-equal-shallow@0.1.3 
  │   │ │     └── is-primitive@2.0.0 
  │   │ ├─┬ mkdirp@0.5.1 
  │   │ │ └── minimist@0.0.8 
  │   │ ├── resolve-from@2.0.0 
  │   │ ├── rimraf@2.6.1 
  │   │ ├── signal-exit@3.0.2 
  │   │ ├─┬ spawn-wrap@1.3.8 
  │   │ │ ├── os-homedir@1.0.2 
  │   │ │ └─┬ which@1.3.0 
  │   │ │   └── isexe@2.0.0 
  │   │ ├─┬ test-exclude@4.1.1 
  │   │ │ ├── object-assign@4.1.1 
  │   │ │ ├─┬ read-pkg-up@1.0.1 
  │   │ │ │ ├── find-up@1.1.2 
  │   │ │ │ └─┬ read-pkg@1.1.0 
  │   │ │ │   ├─┬ load-json-file@1.1.0 
  │   │ │ │   │ ├─┬ parse-json@2.2.0 
  │   │ │ │   │ │ └─┬ error-ex@1.3.1 
  │   │ │ │   │ │   └── is-arrayish@0.2.1 
  │   │ │ │   │ └── pify@2.3.0 
  │   │ │ │   ├─┬ normalize-package-data@2.4.0 
  │   │ │ │   │ ├── hosted-git-info@2.5.0 
  │   │ │ │   │ ├─┬ is-builtin-module@1.0.0 
  │   │ │ │   │ │ └── builtin-modules@1.1.1 
  │   │ │ │   │ └─┬ validate-npm-package-license@3.0.1 
  │   │ │ │   │   ├─┬ spdx-correct@1.0.2 
  │   │ │ │   │   │ └── spdx-license-ids@1.2.2 
  │   │ │ │   │   └── spdx-expression-parse@1.0.4 
  │   │ │ │   └── path-type@1.1.0 
  │   │ │ └── require-main-filename@1.0.1 
  │   │ ├─┬ yargs@8.0.2 
  │   │ │ ├── camelcase@4.1.0 
  │   │ │ ├─┬ cliui@3.2.0 
  │   │ │ │ ├─┬ string-width@1.0.2 
  │   │ │ │ │ ├── code-point-at@1.1.0 
  │   │ │ │ │ └─┬ is-fullwidth-code-point@1.0.0 
  │   │ │ │ │   └── number-is-nan@1.0.1 
  │   │ │ │ ├─┬ strip-ansi@3.0.1 
  │   │ │ │ │ └── ansi-regex@2.1.1 
  │   │ │ │ └─┬ wrap-ansi@2.1.0 
  │   │ │ │   └── string-width@1.0.2 
  │   │ │ ├── decamelize@1.2.0 
  │   │ │ ├── get-caller-file@1.0.2 
  │   │ │ ├─┬ os-locale@2.1.0 
  │   │ │ │ ├─┬ execa@0.7.0 
  │   │ │ │ │ ├─┬ cross-spawn@5.1.0 
  │   │ │ │ │ │ └─┬ shebang-command@1.2.0 
  │   │ │ │ │ │   └── shebang-regex@1.0.0 
  │   │ │ │ │ ├── get-stream@3.0.0 
  │   │ │ │ │ ├── is-stream@1.1.0 
  │   │ │ │ │ ├─┬ npm-run-path@2.0.2 
  │   │ │ │ │ │ └── path-key@2.0.1 
  │   │ │ │ │ ├── p-finally@1.0.0 
  │   │ │ │ │ └── strip-eof@1.0.0 
  │   │ │ │ ├─┬ lcid@1.0.0 
  │   │ │ │ │ └── invert-kv@1.0.0 
  │   │ │ │ └─┬ mem@1.1.0 
  │   │ │ │   └── mimic-fn@1.1.0 
  │   │ │ ├─┬ read-pkg-up@2.0.0 
  │   │ │ │ └─┬ read-pkg@2.0.0 
  │   │ │ │   ├─┬ load-json-file@2.0.0 
  │   │ │ │   │ └── strip-bom@3.0.0 
  │   │ │ │   └── path-type@2.0.0 
  │   │ │ ├── require-directory@2.1.1 
  │   │ │ ├── set-blocking@2.0.0 
  │   │ │ ├─┬ string-width@2.1.1 
  │   │ │ │ ├── is-fullwidth-code-point@2.0.0 
  │   │ │ │ └─┬ strip-ansi@4.0.0 
  │   │ │ │   └── ansi-regex@3.0.0 
  │   │ │ ├── which-module@2.0.0 
  │   │ │ ├── y18n@3.2.1 
  │   │ │ └── yargs-parser@7.0.0 
  │   │ └─┬ yargs-parser@5.0.0 
  │   │   └── camelcase@3.0.0 
  │   ├── opener@1.4.3 
  │   ├── os-homedir@1.0.2 
  │   ├── own-or@1.0.0 
  │   ├── own-or-env@1.0.0 
  │   ├─┬ readable-stream@2.3.3 
  │   │ └── string_decoder@1.0.3 
  │   ├── signal-exit@3.0.2 
  │   ├── source-map-support@0.4.18 
  │   ├── stack-utils@1.0.1 
  │   ├─┬ tap-mocha-reporter@3.0.6 
  │   │ ├── diff@1.4.0 
  │   │ ├─┬ readable-stream@2.3.3 
  │   │ │ └── string_decoder@1.0.3 
  │   │ └── unicode-length@1.0.3 
  │   ├─┬ tap-parser@5.4.0 
  │   │ ├── events-to-array@1.1.2 
  │   │ └─┬ readable-stream@2.3.3 
  │   │   └── string_decoder@1.0.3 
  │   ├── tmatch@3.1.0 
  │   ├── trivial-deferred@1.0.1 
  │   ├── tsame@1.1.2 
  │   └── yapool@1.0.0 
  ├── oauth@0.9.15 
  ├─┬ oauth2orize@1.10.0 
  │ └── uid2@0.0.2 
  ├── q@0.9.7 
  ├── redis@0.10.0 
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
  │ │ │ ├── co@4.6.0 
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
  │ │ │ ├── assert-plus@1.0.0 
  │ │ │ ├── extsprintf@1.3.0 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └─┬ verror@1.10.0 
  │ │ │   └── assert-plus@1.0.0 
  │ │ └─┬ sshpk@1.13.1 
  │ │   ├── asn1@0.2.3 
  │ │   ├── assert-plus@1.0.0 
  │ │   ├── bcrypt-pbkdf@1.0.1 
  │ │   ├─┬ dashdash@1.14.1 
  │ │   │ └── assert-plus@1.0.0 
  │ │   ├── ecc-jsbn@0.1.1 
  │ │   ├─┬ getpass@0.1.7 
  │ │   │ └── assert-plus@1.0.0 
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
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.3 
  │ │ └── punycode@1.4.1 
  │ └── tunnel-agent@0.6.0 
  ├─┬ solr-client@0.7.0 
  │ ├── bluebird@3.5.1 
  │ ├── duplexer@0.1.1 
  │ ├─┬ httperror@0.2.3 
  │ │ └── hnp@0.0.1 
  │ ├─┬ json-bigint@0.1.4 
  │ │ └── bignumber.js@1.1.1 
  │ ├─┬ JSONStream@1.0.7 
  │ │ └── jsonparse@1.3.1 
  │ └─┬ request@2.81.0 
  │   ├── aws-sign2@0.6.0 
  │   ├── caseless@0.12.0 
  │   ├── form-data@2.1.4 
  │   ├─┬ har-validator@4.2.1 
  │   │ ├── ajv@4.11.8 
  │   │ └── har-schema@1.0.5 
  │   ├─┬ hawk@3.1.3 
  │   │ ├── boom@2.10.1 
  │   │ ├── cryptiles@2.0.5 
  │   │ ├── hoek@2.16.3 
  │   │ └── sntp@1.0.9 
  │   ├─┬ http-signature@1.1.1 
  │   │ └── assert-plus@0.2.0 
  │   ├── performance-now@0.2.0 
  │   ├── qs@6.4.0 
  │   └── tunnel-agent@0.6.0 
  ├─┬ twilio@1.5.0 
  │ ├── jwt-simple@0.1.0 
  │ └─┬ request@2.27.0 
  │   ├── aws-sign@0.3.0 
  │   ├── cookie-jar@0.3.0 
  │   ├── forever-agent@0.5.2 
  │   ├─┬ form-data@0.1.4 
  │   │ ├── async@0.9.2 
  │   │ └─┬ combined-stream@0.0.7 
  │   │   └── delayed-stream@0.0.5 
  │   ├─┬ hawk@1.0.0 
  │   │ ├── boom@0.4.2 
  │   │ ├── cryptiles@0.2.2 
  │   │ ├── hoek@0.9.1 
  │   │ └── sntp@0.2.4 
  │   ├─┬ http-signature@0.10.1 
  │   │ ├── asn1@0.1.11 
  │   │ ├── assert-plus@0.1.5 
  │   │ └── ctype@0.5.3 
  │   ├── node-uuid@1.4.8 
  │   ├── oauth-sign@0.3.0 
  │   └── tunnel-agent@0.3.0 
  ├── underscore@1.5.2 
  ├── URIjs@1.16.1 
  ├── validator@9.0.0 
  └── watch@0.9.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/coral.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 37% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toUpperCase","bind","bound configure","call","isArray","Error","Number","Function","join","RegExp","sort","toString","Object","binding","max","now","apply","ArrayBuffer","DataView","Map","resolve","Set","WeakMap","create","reduce","fromCharCode","parseInt","Date","getTime","Boolean"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1046 took 90.1259s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'awssum'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/coral.js/node_modules/coral.js/index.js. Coverage (Term): 53% Coverage (LOC): 30%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/CountryCode.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/CountryName.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/DayName.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/ForeignKeyType.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/ImageSize.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/IndustryCode.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/MoneyUnit.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/PhoneType.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/SMSStatus.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/Salutation.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/enums/ServiceRequestStatus.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/coral.js/models/AbstractModel.js. Coverage (Term): 11% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/log4js/lib/log4js.js. Coverage (Term): 51% Coverage (LOC): 58%
*- File /root/Targets/coral.js/node_modules/log4js/lib/layouts.js. Coverage (Term): 15% Coverage (LOC): 37%
*- File /root/Targets/coral.js/node_modules/log4js/lib/date_format.js. Coverage (Term): 13% Coverage (LOC): 27%
*- File /root/Targets/coral.js/node_modules/log4js/lib/levels.js. Coverage (Term): 57% Coverage (LOC): 68%
*- File /root/Targets/coral.js/node_modules/log4js/lib/logger.js. Coverage (Term): 43% Coverage (LOC): 62%
*- File /root/Targets/coral.js/node_modules/log4js/lib/connect-logger.js. Coverage (Term): 7% Coverage (LOC): 12%
*- File /root/Targets/coral.js/node_modules/log4js/lib/appenders/console.js. Coverage (Term): 74% Coverage (LOC): 87%
*- File /root/Targets/coral.js/node_modules/q/q.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File evalIndirect. Coverage (Term): 14% Coverage (LOC): 20%
*- File /root/Targets/coral.js/node_modules/underscore/underscore.js. Coverage (Term): 18% Coverage (LOC): 32%
*- File /root/Targets/coral.js/node_modules/coral.js/common/Utils.js. Coverage (Term): 11% Coverage (LOC): 27%
*- File /root/Targets/coral.js/node_modules/URIjs/src/URI.js. Coverage (Term): 9% Coverage (LOC): 20%
*- File /root/Targets/coral.js/node_modules/URIjs/src/punycode.js. Coverage (Term): 16% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/URIjs/src/IPv6.js. Coverage (Term): 11% Coverage (LOC): 15%
*- File /root/Targets/coral.js/node_modules/URIjs/src/SecondLevelDomains.js. Coverage (Term): 39% Coverage (LOC): 76%
*- File /root/Targets/coral.js/node_modules/coral.js/models/BaseModel.js. Coverage (Term): 60% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/coral.js/models/BaseS3Model.js. Coverage (Term): 56% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/coral.js/models/ForeignKey.js. Coverage (Term): 37% Coverage (LOC): 59%
*- File /root/Targets/coral.js/node_modules/coral.js/dao/SolrDao.js. Coverage (Term): 11% Coverage (LOC): 17%
*- File /root/Targets/coral.js/node_modules/coral.js/dao/S3Dao.js. Coverage (Term): 7% Coverage (LOC): 7%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/aws.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/node_loader.js. Coverage (Term): 70% Coverage (LOC): 77%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/util.js. Coverage (Term): 26% Coverage (LOC): 53%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/core.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/protocol/json.js. Coverage (Term): 14% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/json/builder.js. Coverage (Term): 14% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/json/parser.js. Coverage (Term): 13% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/protocol/query.js. Coverage (Term): 13% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/query/query_param_serializer.js. Coverage (Term): 9% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/shape.js. Coverage (Term): 7% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/collection.js. Coverage (Term): 29% Coverage (LOC): 38%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/protocol/rest.js. Coverage (Term): 5% Coverage (LOC): 13%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/protocol/rest_json.js. Coverage (Term): 18% Coverage (LOC): 28%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/protocol/rest_xml.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/xml/builder.js. Coverage (Term): 11% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/index.js. Coverage (Term): 59% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/lodash/assign.js. Coverage (Term): 60% Coverage (LOC): 47%
*- File /root/Targets/coral.js/node_modules/lodash/_assignValue.js. Coverage (Term): 49% Coverage (LOC): 64%
*- File /root/Targets/coral.js/node_modules/lodash/_baseAssignValue.js. Coverage (Term): 45% Coverage (LOC): 36%
*- File /root/Targets/coral.js/node_modules/lodash/_defineProperty.js. Coverage (Term): 94% Coverage (LOC): 89%
*- File /root/Targets/coral.js/node_modules/lodash/_getNative.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsNative.js. Coverage (Term): 95% Coverage (LOC): 94%
*- File /root/Targets/coral.js/node_modules/lodash/isFunction.js. Coverage (Term): 84% Coverage (LOC): 91%
*- File /root/Targets/coral.js/node_modules/lodash/_baseGetTag.js. Coverage (Term): 87% Coverage (LOC): 91%
*- File /root/Targets/coral.js/node_modules/lodash/_Symbol.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_root.js. Coverage (Term): 76% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_freeGlobal.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_getRawTag.js. Coverage (Term): 91% Coverage (LOC): 90%
*- File /root/Targets/coral.js/node_modules/lodash/_objectToString.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/isObject.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_isMasked.js. Coverage (Term): 81% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_coreJsData.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_toSource.js. Coverage (Term): 79% Coverage (LOC): 69%
*- File /root/Targets/coral.js/node_modules/lodash/_getValue.js. Coverage (Term): 92% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/eq.js. Coverage (Term): 49% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_copyObject.js. Coverage (Term): 26% Coverage (LOC): 25%
*- File /root/Targets/coral.js/node_modules/lodash/_createAssigner.js. Coverage (Term): 25% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_baseRest.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/identity.js. Coverage (Term): 68% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_overRest.js. Coverage (Term): 38% Coverage (LOC): 42%
*- File /root/Targets/coral.js/node_modules/lodash/_apply.js. Coverage (Term): 21% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/lodash/_setToString.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_baseSetToString.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/constant.js. Coverage (Term): 74% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_shortOut.js. Coverage (Term): 84% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/lodash/_isIterateeCall.js. Coverage (Term): 43% Coverage (LOC): 38%
*- File /root/Targets/coral.js/node_modules/lodash/isArrayLike.js. Coverage (Term): 60% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/isLength.js. Coverage (Term): 46% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_isIndex.js. Coverage (Term): 37% Coverage (LOC): 75%
*- File /root/Targets/coral.js/node_modules/lodash/_isPrototype.js. Coverage (Term): 44% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/keys.js. Coverage (Term): 66% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_arrayLikeKeys.js. Coverage (Term): 33% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/lodash/_baseTimes.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/lodash/isArguments.js. Coverage (Term): 70% Coverage (LOC): 92%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsArguments.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/isObjectLike.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/isArray.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/isBuffer.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/stubFalse.js. Coverage (Term): 70% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/isTypedArray.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsTypedArray.js. Coverage (Term): 90% Coverage (LOC): 91%
*- File /root/Targets/coral.js/node_modules/lodash/_baseUnary.js. Coverage (Term): 68% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_nodeUtil.js. Coverage (Term): 97% Coverage (LOC): 91%
*- File /root/Targets/coral.js/node_modules/lodash/_baseKeys.js. Coverage (Term): 47% Coverage (LOC): 41%
*- File /root/Targets/coral.js/node_modules/lodash/_nativeKeys.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_overArg.js. Coverage (Term): 66% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLBuilder.js. Coverage (Term): 23% Coverage (LOC): 31%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLStringifier.js. Coverage (Term): 25% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDeclaration.js. Coverage (Term): 29% Coverage (LOC): 34%
*- File /root/Targets/coral.js/node_modules/lodash/create.js. Coverage (Term): 55% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_baseAssign.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseCreate.js. Coverage (Term): 48% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLNode.js. Coverage (Term): 17% Coverage (LOC): 31%
*- File /root/Targets/coral.js/node_modules/lodash/isEmpty.js. Coverage (Term): 46% Coverage (LOC): 30%
*- File /root/Targets/coral.js/node_modules/lodash/_getTag.js. Coverage (Term): 69% Coverage (LOC): 38%
*- File /root/Targets/coral.js/node_modules/lodash/_DataView.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_Map.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_Promise.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_Set.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_WeakMap.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDocType.js. Coverage (Term): 23% Coverage (LOC): 40%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLCData.js. Coverage (Term): 36% Coverage (LOC): 48%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLComment.js. Coverage (Term): 36% Coverage (LOC): 48%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDTDAttList.js. Coverage (Term): 14% Coverage (LOC): 17%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDTDEntity.js. Coverage (Term): 13% Coverage (LOC): 15%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDTDElement.js. Coverage (Term): 19% Coverage (LOC): 27%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLDTDNotation.js. Coverage (Term): 15% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js. Coverage (Term): 21% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLElement.js. Coverage (Term): 17% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/lodash/every.js. Coverage (Term): 56% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/lodash/_arrayEvery.js. Coverage (Term): 29% Coverage (LOC): 36%
*- File /root/Targets/coral.js/node_modules/lodash/_baseEvery.js. Coverage (Term): 40% Coverage (LOC): 45%
*- File /root/Targets/coral.js/node_modules/lodash/_baseEach.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_baseForOwn.js. Coverage (Term): 66% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseFor.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_createBaseFor.js. Coverage (Term): 29% Coverage (LOC): 42%
*- File /root/Targets/coral.js/node_modules/lodash/_createBaseEach.js. Coverage (Term): 30% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIteratee.js. Coverage (Term): 49% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_baseMatches.js. Coverage (Term): 39% Coverage (LOC): 45%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsMatch.js. Coverage (Term): 19% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/lodash/_Stack.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_ListCache.js. Coverage (Term): 60% Coverage (LOC): 63%
*- File /root/Targets/coral.js/node_modules/lodash/_listCacheClear.js. Coverage (Term): 59% Coverage (LOC): 67%
*- File /root/Targets/coral.js/node_modules/lodash/_listCacheDelete.js. Coverage (Term): 38% Coverage (LOC): 39%
*- File /root/Targets/coral.js/node_modules/lodash/_assocIndexOf.js. Coverage (Term): 42% Coverage (LOC): 42%
*- File /root/Targets/coral.js/node_modules/lodash/_listCacheGet.js. Coverage (Term): 45% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_listCacheHas.js. Coverage (Term): 61% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_listCacheSet.js. Coverage (Term): 36% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_stackClear.js. Coverage (Term): 64% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_stackDelete.js. Coverage (Term): 41% Coverage (LOC): 57%
*- File /root/Targets/coral.js/node_modules/lodash/_stackGet.js. Coverage (Term): 59% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_stackHas.js. Coverage (Term): 59% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_stackSet.js. Coverage (Term): 37% Coverage (LOC): 27%
*- File /root/Targets/coral.js/node_modules/lodash/_MapCache.js. Coverage (Term): 85% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/lodash/_mapCacheClear.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_Hash.js. Coverage (Term): 85% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/lodash/_hashClear.js. Coverage (Term): 93% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_nativeCreate.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_hashDelete.js. Coverage (Term): 39% Coverage (LOC): 57%
*- File /root/Targets/coral.js/node_modules/lodash/_hashGet.js. Coverage (Term): 48% Coverage (LOC): 57%
*- File /root/Targets/coral.js/node_modules/lodash/_hashHas.js. Coverage (Term): 57% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/lodash/_hashSet.js. Coverage (Term): 42% Coverage (LOC): 60%
*- File /root/Targets/coral.js/node_modules/lodash/_mapCacheDelete.js. Coverage (Term): 46% Coverage (LOC): 63%
*- File /root/Targets/coral.js/node_modules/lodash/_getMapData.js. Coverage (Term): 45% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_isKeyable.js. Coverage (Term): 35% Coverage (LOC): 67%
*- File /root/Targets/coral.js/node_modules/lodash/_mapCacheGet.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_mapCacheHas.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_mapCacheSet.js. Coverage (Term): 38% Coverage (LOC): 56%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsEqual.js. Coverage (Term): 36% Coverage (LOC): 42%
*- File /root/Targets/coral.js/node_modules/lodash/_baseIsEqualDeep.js. Coverage (Term): 29% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/lodash/_equalArrays.js. Coverage (Term): 17% Coverage (LOC): 14%
*- File /root/Targets/coral.js/node_modules/lodash/_SetCache.js. Coverage (Term): 55% Coverage (LOC): 58%
*- File /root/Targets/coral.js/node_modules/lodash/_setCacheAdd.js. Coverage (Term): 59% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_setCacheHas.js. Coverage (Term): 59% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_arraySome.js. Coverage (Term): 30% Coverage (LOC): 36%
*- File /root/Targets/coral.js/node_modules/lodash/_cacheHas.js. Coverage (Term): 59% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_equalByTag.js. Coverage (Term): 36% Coverage (LOC): 17%
*- File /root/Targets/coral.js/node_modules/lodash/_Uint8Array.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/lodash/_mapToArray.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_setToArray.js. Coverage (Term): 33% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/lodash/_equalObjects.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/coral.js/node_modules/lodash/_getAllKeys.js. Coverage (Term): 74% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseGetAllKeys.js. Coverage (Term): 53% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_arrayPush.js. Coverage (Term): 32% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/lodash/_getSymbols.js. Coverage (Term): 57% Coverage (LOC): 56%
*- File /root/Targets/coral.js/node_modules/lodash/_arrayFilter.js. Coverage (Term): 23% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/stubArray.js. Coverage (Term): 70% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_getMatchData.js. Coverage (Term): 39% Coverage (LOC): 33%
*- File /root/Targets/coral.js/node_modules/lodash/_isStrictComparable.js. Coverage (Term): 61% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_matchesStrictComparable.js. Coverage (Term): 32% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/lodash/_baseMatchesProperty.js. Coverage (Term): 53% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/lodash/get.js. Coverage (Term): 45% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/_baseGet.js. Coverage (Term): 36% Coverage (LOC): 45%
*- File /root/Targets/coral.js/node_modules/lodash/_castPath.js. Coverage (Term): 59% Coverage (LOC): 56%
*- File /root/Targets/coral.js/node_modules/lodash/_isKey.js. Coverage (Term): 37% Coverage (LOC): 43%
*- File /root/Targets/coral.js/node_modules/lodash/isSymbol.js. Coverage (Term): 61% Coverage (LOC): 86%
*- File /root/Targets/coral.js/node_modules/lodash/_stringToPath.js. Coverage (Term): 44% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/lodash/_memoizeCapped.js. Coverage (Term): 71% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/lodash/memoize.js. Coverage (Term): 50% Coverage (LOC): 60%
*- File /root/Targets/coral.js/node_modules/lodash/toString.js. Coverage (Term): 60% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseToString.js. Coverage (Term): 49% Coverage (LOC): 39%
*- File /root/Targets/coral.js/node_modules/lodash/_arrayMap.js. Coverage (Term): 28% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/lodash/_toKey.js. Coverage (Term): 43% Coverage (LOC): 55%
*- File /root/Targets/coral.js/node_modules/lodash/hasIn.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseHasIn.js. Coverage (Term): 51% Coverage (LOC): 80%
*- File /root/Targets/coral.js/node_modules/lodash/_hasPath.js. Coverage (Term): 35% Coverage (LOC): 28%
*- File /root/Targets/coral.js/node_modules/lodash/property.js. Coverage (Term): 67% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/lodash/_baseProperty.js. Coverage (Term): 43% Coverage (LOC): 67%
*- File /root/Targets/coral.js/node_modules/lodash/_basePropertyDeep.js. Coverage (Term): 56% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/xmlbuilder/lib/XMLAttribute.js. Coverage (Term): 36% Coverage (LOC): 52%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/api.js. Coverage (Term): 18% Coverage (LOC): 22%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/operation.js. Coverage (Term): 13% Coverage (LOC): 13%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/paginator.js. Coverage (Term): 38% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/model/resource_waiter.js. Coverage (Term): 27% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/api_loader.js. Coverage (Term): 43% Coverage (LOC): 56%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/service.js. Coverage (Term): 13% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/region_config.js. Coverage (Term): 12% Coverage (LOC): 13%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/config.js. Coverage (Term): 29% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials.js. Coverage (Term): 70% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/credential_provider_chain.js. Coverage (Term): 85% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/http.js. Coverage (Term): 15% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/sequential_executor.js. Coverage (Term): 32% Coverage (LOC): 37%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/event_listeners.js. Coverage (Term): 18% Coverage (LOC): 22%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/request.js. Coverage (Term): 15% Coverage (LOC): 20%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/state_machine.js. Coverage (Term): 38% Coverage (LOC): 44%
*- File /root/Targets/coral.js/node_modules/jmespath/jmespath.js. Coverage (Term): 7% Coverage (LOC): 12%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/response.js. Coverage (Term): 11% Coverage (LOC): 15%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/resource_waiter.js. Coverage (Term): 13% Coverage (LOC): 22%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/request_signer.js. Coverage (Term): 43% Coverage (LOC): 53%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/v2.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/v3.js. Coverage (Term): 14% Coverage (LOC): 30%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/v3https.js. Coverage (Term): 55% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/v4.js. Coverage (Term): 8% Coverage (LOC): 23%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/v4_credentials.js. Coverage (Term): 21% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/s3.js. Coverage (Term): 14% Coverage (LOC): 38%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/signers/presign.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/param_validator.js. Coverage (Term): 3% Coverage (LOC): 10%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/temporary_credentials.js. Coverage (Term): 17% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/sts.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/sts.js. Coverage (Term): 27% Coverage (LOC): 40%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/web_identity_credentials.js. Coverage (Term): 21% Coverage (LOC): 26%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/cognito_identity_credentials.js. Coverage (Term): 11% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cognitoidentity.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/cognitoidentity.js. Coverage (Term): 40% Coverage (LOC): 73%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/saml_credentials.js. Coverage (Term): 29% Coverage (LOC): 36%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/xml/node_parser.js. Coverage (Term): 10% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/xml2js/lib/xml2js.js. Coverage (Term): 13% Coverage (LOC): 25%
*- File /root/Targets/coral.js/node_modules/sax/lib/sax.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/coral.js/node_modules/xml2js/lib/bom.js. Coverage (Term): 54% Coverage (LOC): 60%
*- File /root/Targets/coral.js/node_modules/xml2js/lib/processors.js. Coverage (Term): 35% Coverage (LOC): 58%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/http/node.js. Coverage (Term): 11% Coverage (LOC): 12%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/ec2_metadata_credentials.js. Coverage (Term): 20% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/metadata_service.js. Coverage (Term): 22% Coverage (LOC): 32%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/ecs_credentials.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/environment_credentials.js. Coverage (Term): 75% Coverage (LOC): 81%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/file_system_credentials.js. Coverage (Term): 23% Coverage (LOC): 29%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/credentials/shared_ini_file_credentials.js. Coverage (Term): 34% Coverage (LOC): 34%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/shared_ini.js. Coverage (Term): 62% Coverage (LOC): 73%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/all.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/acm.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/apigateway.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/apigateway.js. Coverage (Term): 32% Coverage (LOC): 39%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/applicationautoscaling.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/appstream.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/autoscaling.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/batch.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/budgets.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/clouddirectory.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudformation.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudfront.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/cloudfront.js. Coverage (Term): 69% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/cloudfront/signer.js. Coverage (Term): 17% Coverage (LOC): 20%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudhsm.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudsearch.js. Coverage (Term): 65% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudsearchdomain.js. Coverage (Term): 82% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/cloudsearchdomain.js. Coverage (Term): 14% Coverage (LOC): 24%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudtrail.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudwatch.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudwatchevents.js. Coverage (Term): 75% Coverage (LOC): 85%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudwatchlogs.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/codebuild.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/codecommit.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/codedeploy.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/codepipeline.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cognitoidentityserviceprovider.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cognitosync.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/configservice.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cur.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/datapipeline.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/devicefarm.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/directconnect.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/directoryservice.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/discovery.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/dms.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/dynamodb.js. Coverage (Term): 60% Coverage (LOC): 74%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/dynamodb.js. Coverage (Term): 19% Coverage (LOC): 31%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/document_client.js. Coverage (Term): 9% Coverage (LOC): 21%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/translator.js. Coverage (Term): 17% Coverage (LOC): 25%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/converter.js. Coverage (Term): 9% Coverage (LOC): 14%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/types.js. Coverage (Term): 16% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/set.js. Coverage (Term): 26% Coverage (LOC): 38%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/dynamodb/numberValue.js. Coverage (Term): 47% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/dynamodbstreams.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/ec2.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/ec2.js. Coverage (Term): 13% Coverage (LOC): 18%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/ecr.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/ecs.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/efs.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/elasticache.js. Coverage (Term): 71% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/elasticbeanstalk.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/elb.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/elbv2.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/emr.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/es.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/elastictranscoder.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/firehose.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/gamelift.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/glacier.js. Coverage (Term): 71% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/glacier.js. Coverage (Term): 9% Coverage (LOC): 19%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/health.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/iam.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/importexport.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/inspector.js. Coverage (Term): 75% Coverage (LOC): 85%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/iot.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/iotdata.js. Coverage (Term): 82% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/iotdata.js. Coverage (Term): 26% Coverage (LOC): 43%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/kinesis.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/kinesisanalytics.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/kms.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/lambda.js. Coverage (Term): 66% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/lambda.js. Coverage (Term): 58% Coverage (LOC): 67%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/lexruntime.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/lightsail.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/machinelearning.js. Coverage (Term): 71% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/machinelearning.js. Coverage (Term): 41% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/marketplacecommerceanalytics.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/marketplacemetering.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/mturk.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/mobileanalytics.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/opsworks.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/opsworkscm.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/organizations.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/pinpoint.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/polly.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/polly.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/polly/presigner.js. Coverage (Term): 12% Coverage (LOC): 22%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/rds.js. Coverage (Term): 51% Coverage (LOC): 71%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/rds.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/rds/signer.js. Coverage (Term): 14% Coverage (LOC): 23%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/redshift.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/rekognition.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/resourcegroupstaggingapi.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/route53.js. Coverage (Term): 71% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/route53.js. Coverage (Term): 31% Coverage (LOC): 50%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/route53domains.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/s3.js. Coverage (Term): 71% Coverage (LOC): 79%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/s3.js. Coverage (Term): 3% Coverage (LOC): 11%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/s3/managed_upload.js. Coverage (Term): 7% Coverage (LOC): 14%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/servicecatalog.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/ses.js. Coverage (Term): 69% Coverage (LOC): 78%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/shield.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/simpledb.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/sms.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/snowball.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/sns.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/sqs.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/sqs.js. Coverage (Term): 8% Coverage (LOC): 16%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/ssm.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/storagegateway.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/stepfunctions.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/support.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/swf.js. Coverage (Term): 76% Coverage (LOC): 83%
*- File /root/Targets/coral.js/node_modules/aws-sdk/lib/services/swf.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/xray.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/waf.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/wafregional.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/workdocs.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/workspaces.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/codestar.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/lexmodelbuildingservice.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/marketplaceentitlementservice.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/athena.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/greengrass.js. Coverage (Term): 81% Coverage (LOC): 88%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/dax.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/migrationhub.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/cloudhsmv2.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/glue.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/aws-sdk/clients/mobile.js. Coverage (Term): 75% Coverage (LOC): 82%
*- File /root/Targets/coral.js/node_modules/awssum-amazon-s3/awssum-amazon-s3.js. Coverage (Term): 6% Coverage (LOC): 5%
*- File /root/Targets/coral.js/node_modules/awssum-amazon-s3/node_modules/underscore/underscore.js. Coverage (Term): 18% Coverage (LOC): 32%
*- File /root/Targets/coral.js/node_modules/dateformat/lib/dateformat.js. Coverage (Term): 17% Coverage (LOC): 50%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
