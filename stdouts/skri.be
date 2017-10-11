/root/Targets/skri.be
└─┬ skri.be@0.3.3 
  ├─┬ anymatch@1.3.0 
  │ ├── arrify@1.0.1 
  │ └─┬ micromatch@2.3.11 
  │   ├─┬ arr-diff@2.0.0 
  │   │ └── arr-flatten@1.1.0 
  │   ├── array-unique@0.2.1 
  │   ├─┬ braces@1.8.5 
  │   │ ├─┬ expand-range@1.8.2 
  │   │ │ └─┬ fill-range@2.2.3 
  │   │ │   ├── is-number@2.1.0 
  │   │ │   ├── isobject@2.1.0 
  │   │ │   ├─┬ randomatic@1.1.7 
  │   │ │   │ ├─┬ is-number@3.0.0 
  │   │ │   │ │ └── kind-of@3.2.2 
  │   │ │   │ └── kind-of@4.0.0 
  │   │ │   └── repeat-string@1.6.1 
  │   │ ├── preserve@0.2.0 
  │   │ └── repeat-element@1.1.2 
  │   ├─┬ expand-brackets@0.1.5 
  │   │ └── is-posix-bracket@0.1.1 
  │   ├── extglob@0.3.2 
  │   ├── filename-regex@2.0.1 
  │   ├── is-extglob@1.0.0 
  │   ├─┬ kind-of@3.2.2 
  │   │ └── is-buffer@1.1.5 
  │   ├─┬ normalize-path@2.1.1 
  │   │ └── remove-trailing-separator@1.1.0 
  │   ├─┬ object.omit@2.0.1 
  │   │ └─┬ for-own@0.1.5 
  │   │   └── for-in@1.0.2 
  │   ├─┬ parse-glob@3.0.4 
  │   │ ├── glob-base@0.3.0 
  │   │ └── is-dotfile@1.0.3 
  │   └─┬ regex-cache@0.4.4 
  │     └─┬ is-equal-shallow@0.1.3 
  │       └── is-primitive@2.0.0 
  ├─┬ babel@5.8.29 
  │ ├─┬ babel-core@5.8.38 
  │ │ ├── babel-plugin-constant-folding@1.0.1 
  │ │ ├── babel-plugin-dead-code-elimination@1.0.2 
  │ │ ├── babel-plugin-eval@1.0.1 
  │ │ ├── babel-plugin-inline-environment-variables@1.0.1 
  │ │ ├── babel-plugin-jscript@1.0.4 
  │ │ ├── babel-plugin-member-expression-literals@1.0.1 
  │ │ ├── babel-plugin-property-literals@1.0.1 
  │ │ ├─┬ babel-plugin-proto-to-assign@1.0.4 
  │ │ │ └── lodash@3.10.1 
  │ │ ├── babel-plugin-react-constant-elements@1.0.3 
  │ │ ├── babel-plugin-react-display-name@1.0.3 
  │ │ ├── babel-plugin-remove-console@1.0.1 
  │ │ ├── babel-plugin-remove-debugger@1.0.1 
  │ │ ├── babel-plugin-runtime@1.0.7 
  │ │ ├─┬ babel-plugin-undeclared-variables-check@1.0.2 
  │ │ │ └── leven@1.0.2 
  │ │ ├── babel-plugin-undefined-to-void@1.1.6 
  │ │ ├── babylon@5.8.38 
  │ │ ├── bluebird@2.11.0 
  │ │ ├── core-js@1.2.7 
  │ │ ├─┬ detect-indent@3.0.1 
  │ │ │ └── get-stdin@4.0.1 
  │ │ ├── esutils@2.0.2 
  │ │ ├── globals@6.4.1 
  │ │ ├─┬ home-or-tmp@1.0.0 
  │ │ │ ├── os-tmpdir@1.0.2 
  │ │ │ └── user-home@1.1.1 
  │ │ ├─┬ is-integer@1.0.7 
  │ │ │ └─┬ is-finite@1.0.2 
  │ │ │   └── number-is-nan@1.0.1 
  │ │ ├── js-tokens@1.0.1 
  │ │ ├── json5@0.4.0 
  │ │ ├── minimatch@2.0.10 
  │ │ ├─┬ regenerator@0.8.40 
  │ │ │ ├─┬ commoner@0.10.8 
  │ │ │ │ ├─┬ detective@4.5.0 
  │ │ │ │ │ ├── acorn@4.0.13 
  │ │ │ │ │ └── defined@1.0.0 
  │ │ │ │ ├── iconv-lite@0.4.19 
  │ │ │ │ ├── q@1.5.0 
  │ │ │ │ └─┬ recast@0.11.23 
  │ │ │ │   ├── ast-types@0.9.6 
  │ │ │ │   └── esprima@3.1.3 
  │ │ │ ├─┬ defs@1.1.1 
  │ │ │ │ ├─┬ alter@0.2.0 
  │ │ │ │ │ └── stable@0.1.6 
  │ │ │ │ ├── ast-traverse@0.1.1 
  │ │ │ │ ├── breakable@1.0.0 
  │ │ │ │ ├── simple-fmt@0.1.0 
  │ │ │ │ ├── simple-is@0.2.0 
  │ │ │ │ ├── stringmap@0.2.2 
  │ │ │ │ ├── stringset@0.2.1 
  │ │ │ │ ├── tryor@0.1.2 
  │ │ │ │ └─┬ yargs@3.27.0 
  │ │ │ │   └─┬ cliui@2.1.0 
  │ │ │ │     ├─┬ center-align@0.1.3 
  │ │ │ │     │ ├─┬ align-text@0.1.4 
  │ │ │ │     │ │ └── longest@1.0.1 
  │ │ │ │     │ └── lazy-cache@1.0.4 
  │ │ │ │     └── right-align@0.1.3 
  │ │ │ ├── esprima-fb@15001.1001.0-dev-harmony-fb 
  │ │ │ ├─┬ recast@0.10.33 
  │ │ │ │ └── ast-types@0.8.12 
  │ │ │ └── through@2.3.8 
  │ │ ├─┬ regexpu@1.3.0 
  │ │ │ ├── esprima@2.7.3 
  │ │ │ ├── regenerate@1.3.3 
  │ │ │ ├── regjsgen@0.2.0 
  │ │ │ └─┬ regjsparser@0.1.5 
  │ │ │   └── jsesc@0.5.0 
  │ │ ├── repeating@1.1.3 
  │ │ ├─┬ resolve@1.4.0 
  │ │ │ └── path-parse@1.0.5 
  │ │ ├── shebang-regex@1.0.0 
  │ │ ├─┬ source-map-support@0.2.10 
  │ │ │ └── source-map@0.1.32 
  │ │ ├── to-fast-properties@1.0.3 
  │ │ ├── trim-right@1.0.1 
  │ │ └── try-resolve@1.0.1 
  │ ├── commander@2.11.0 
  │ ├── convert-source-map@1.5.0 
  │ ├── fs-readdir-recursive@0.1.2 
  │ ├─┬ glob@5.0.15 
  │ │ ├─┬ inflight@1.0.6 
  │ │ │ └── wrappy@1.0.2 
  │ │ ├── inherits@2.0.3 
  │ │ └── once@1.4.0 
  │ ├── lodash@3.10.1 
  │ ├─┬ output-file-sync@1.1.2 
  │ │ └── object-assign@4.1.1 
  │ ├── path-exists@1.0.0 
  │ ├── path-is-absolute@1.0.1 
  │ ├── slash@1.0.0 
  │ └── source-map@0.5.7 
  ├─┬ babel-core@6.26.0 
  │ ├─┬ babel-code-frame@6.26.0 
  │ │ ├── chalk@1.1.3 
  │ │ └── js-tokens@3.0.2 
  │ ├─┬ babel-generator@6.26.0 
  │ │ ├─┬ detect-indent@4.0.0 
  │ │ │ └── repeating@2.0.1 
  │ │ ├── jsesc@1.3.0 
  │ │ └── lodash@4.17.4 
  │ ├── babel-helpers@6.24.1 
  │ ├── babel-messages@6.23.0 
  │ ├─┬ babel-register@6.26.0 
  │ │ ├── core-js@2.5.1 
  │ │ ├─┬ home-or-tmp@2.0.0 
  │ │ │ └── os-homedir@1.0.2 
  │ │ ├── lodash@4.17.4 
  │ │ └── source-map-support@0.4.18 
  │ ├─┬ babel-runtime@6.26.0 
  │ │ ├── core-js@2.5.1 
  │ │ └── regenerator-runtime@0.11.0 
  │ ├─┬ babel-template@6.26.0 
  │ │ ├── babylon@6.18.0 
  │ │ └── lodash@4.17.4 
  │ ├─┬ babel-traverse@6.26.0 
  │ │ ├── babylon@6.18.0 
  │ │ ├── globals@9.18.0 
  │ │ ├── invariant@2.2.2 
  │ │ └── lodash@4.17.4 
  │ ├─┬ babel-types@6.26.0 
  │ │ └── lodash@4.17.4 
  │ ├── babylon@6.18.0 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├── json5@0.5.1 
  │ ├── lodash@4.17.4 
  │ ├─┬ minimatch@3.0.4 
  │ │ └─┬ brace-expansion@1.1.8 
  │ │   ├── balanced-match@1.0.0 
  │ │   └── concat-map@0.0.1 
  │ └── private@0.1.7 
  ├─┬ babel-plugin-transform-class-properties@6.24.1 
  │ ├─┬ babel-helper-function-name@6.24.1 
  │ │ └── babel-helper-get-function-arity@6.24.1 
  │ └── babel-plugin-syntax-class-properties@6.13.0 
  ├─┬ babel-plugin-transform-object-rest-spread@6.26.0 
  │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
  ├─┬ babel-preset-es2015@6.24.1 
  │ ├── babel-plugin-check-es2015-constants@6.22.0 
  │ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0 
  │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0 
  │ ├─┬ babel-plugin-transform-es2015-block-scoping@6.26.0 
  │ │ └── lodash@4.17.4 
  │ ├─┬ babel-plugin-transform-es2015-classes@6.24.1 
  │ │ ├─┬ babel-helper-define-map@6.26.0 
  │ │ │ └── lodash@4.17.4 
  │ │ ├── babel-helper-optimise-call-expression@6.24.1 
  │ │ └── babel-helper-replace-supers@6.24.1 
  │ ├── babel-plugin-transform-es2015-computed-properties@6.24.1 
  │ ├── babel-plugin-transform-es2015-destructuring@6.23.0 
  │ ├── babel-plugin-transform-es2015-duplicate-keys@6.24.1 
  │ ├── babel-plugin-transform-es2015-for-of@6.23.0 
  │ ├── babel-plugin-transform-es2015-function-name@6.24.1 
  │ ├── babel-plugin-transform-es2015-literals@6.22.0 
  │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 
  │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.26.0 
  │ │ └── babel-plugin-transform-strict-mode@6.24.1 
  │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1 
  │ │ └── babel-helper-hoist-variables@6.24.1 
  │ ├── babel-plugin-transform-es2015-modules-umd@6.24.1 
  │ ├── babel-plugin-transform-es2015-object-super@6.24.1 
  │ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1 
  │ │ └── babel-helper-call-delegate@6.24.1 
  │ ├── babel-plugin-transform-es2015-shorthand-properties@6.24.1 
  │ ├── babel-plugin-transform-es2015-spread@6.22.0 
  │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1 
  │ │ └─┬ babel-helper-regex@6.26.0 
  │ │   └── lodash@4.17.4 
  │ ├── babel-plugin-transform-es2015-template-literals@6.22.0 
  │ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0 
  │ ├─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1 
  │ │ └── regexpu-core@2.0.0 
  │ └─┬ babel-plugin-transform-regenerator@6.26.0 
  │   └── regenerator-transform@0.10.1 
  ├─┬ babel-preset-stage-0@6.24.1 
  │ ├─┬ babel-plugin-transform-do-expressions@6.22.0 
  │ │ └── babel-plugin-syntax-do-expressions@6.13.0 
  │ ├─┬ babel-plugin-transform-function-bind@6.22.0 
  │ │ └── babel-plugin-syntax-function-bind@6.13.0 
  │ └─┬ babel-preset-stage-1@6.24.1 
  │   ├─┬ babel-plugin-transform-class-constructor-call@6.24.1 
  │   │ └── babel-plugin-syntax-class-constructor-call@6.18.0 
  │   ├─┬ babel-plugin-transform-export-extensions@6.22.0 
  │   │ └── babel-plugin-syntax-export-extensions@6.13.0 
  │   └─┬ babel-preset-stage-2@6.24.1 
  │     ├── babel-plugin-syntax-dynamic-import@6.18.0 
  │     ├─┬ babel-plugin-transform-decorators@6.24.1 
  │     │ ├─┬ babel-helper-explode-class@6.24.1 
  │     │ │ └── babel-helper-bindify-decorators@6.24.1 
  │     │ └── babel-plugin-syntax-decorators@6.13.0 
  │     └─┬ babel-preset-stage-3@6.24.1 
  │       ├── babel-plugin-syntax-trailing-function-commas@6.22.0 
  │       ├─┬ babel-plugin-transform-async-generator-functions@6.24.1 
  │       │ ├── babel-helper-remap-async-to-generator@6.24.1 
  │       │ └── babel-plugin-syntax-async-generators@6.13.0 
  │       ├─┬ babel-plugin-transform-async-to-generator@6.24.1 
  │       │ └── babel-plugin-syntax-async-functions@6.13.0 
  │       └─┬ babel-plugin-transform-exponentiation-operator@6.24.1 
  │         ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.24.1 
  │         │ └── babel-helper-explode-assignable-expression@6.24.1 
  │         └── babel-plugin-syntax-exponentiation-operator@6.13.0 
  ├── bluebird@3.0.5 
  ├─┬ chalk@1.1.1 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ chokidar@1.2.0 
  │ ├── async-each@0.1.6 
  │ ├── glob-parent@2.0.0 
  │ ├─┬ is-binary-path@1.0.1 
  │ │ └── binary-extensions@1.10.0 
  │ ├── is-glob@2.0.1 
  │ ├─┬ lodash.flatten@3.0.2 
  │ │ ├─┬ lodash._baseflatten@3.1.4 
  │ │ │ ├── lodash.isarguments@3.1.0 
  │ │ │ └── lodash.isarray@3.0.4 
  │ │ └── lodash._isiterateecall@3.0.9 
  │ └─┬ readdirp@2.1.0 
  │   ├── minimatch@3.0.4 
  │   ├─┬ readable-stream@2.3.3 
  │   │ ├── core-util-is@1.0.2 
  │   │ ├── isarray@1.0.0 
  │   │ ├── process-nextick-args@1.0.7 
  │   │ ├── string_decoder@1.0.3 
  │   │ └── util-deprecate@1.0.2 
  │   └── set-immediate-shim@1.0.1 
  ├─┬ express@4.13.3 
  │ ├─┬ accepts@1.2.13 
  │ │ └── negotiator@0.5.3 
  │ ├── array-flatten@1.1.1 
  │ ├── content-disposition@0.5.0 
  │ ├── content-type@1.0.4 
  │ ├── cookie@0.1.3 
  │ ├── cookie-signature@1.0.6 
  │ ├─┬ debug@2.2.0 
  │ │ └── ms@0.7.1 
  │ ├── depd@1.0.1 
  │ ├── escape-html@1.0.2 
  │ ├── etag@1.7.0 
  │ ├─┬ finalhandler@0.4.0 
  │ │ ├─┬ debug@2.2.0 
  │ │ │ └── ms@0.7.1 
  │ │ └── unpipe@1.0.0 
  │ ├── fresh@0.3.0 
  │ ├── merge-descriptors@1.0.0 
  │ ├── methods@1.1.2 
  │ ├─┬ on-finished@2.3.0 
  │ │ └── ee-first@1.1.1 
  │ ├── parseurl@1.3.2 
  │ ├── path-to-regexp@0.1.7 
  │ ├─┬ proxy-addr@1.0.10 
  │ │ ├── forwarded@0.1.2 
  │ │ └── ipaddr.js@1.0.5 
  │ ├── qs@4.0.0 
  │ ├── range-parser@1.0.3 
  │ ├─┬ send@0.13.0 
  │ │ ├── debug@2.2.0 
  │ │ ├── destroy@1.0.3 
  │ │ ├── http-errors@1.3.1 
  │ │ ├── ms@0.7.1 
  │ │ └── statuses@1.2.1 
  │ ├─┬ serve-static@1.10.3 
  │ │ ├── escape-html@1.0.3 
  │ │ └─┬ send@0.13.2 
  │ │   ├── debug@2.2.0 
  │ │   ├── depd@1.1.1 
  │ │   ├── destroy@1.0.4 
  │ │   └── ms@0.7.1 
  │ ├─┬ type-is@1.6.15 
  │ │ └── media-typer@0.3.0 
  │ ├── utils-merge@1.0.0 
  │ └── vary@1.0.1 
  ├─┬ front-matter@2.0.0 
  │ └── yaml-js@0.1.5 
  ├─┬ fs-extra@0.26.2 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@2.4.0 
  │ ├── klaw@1.3.1 
  │ └─┬ rimraf@2.6.2 
  │   └─┬ glob@7.1.2 
  │     ├── fs.realpath@1.0.0 
  │     └── minimatch@3.0.4 
  ├─┬ fs-recurse@0.0.6 
  │ ├─┬ anymatch@1.1.0 
  │ │ └─┬ minimatch@1.0.0 
  │ │   ├── lru-cache@2.7.3 
  │ │   └── sigmund@1.0.1 
  │ └─┬ lowerdash@0.2.3 
  │   └── lodash@3.5.0 
  ├─┬ html-minifier@1.0.0 
  │ ├─┬ change-case@2.3.1 
  │ │ ├── camel-case@1.2.2 
  │ │ ├── constant-case@1.1.2 
  │ │ ├── dot-case@1.1.2 
  │ │ ├── is-lower-case@1.1.3 
  │ │ ├── is-upper-case@1.1.2 
  │ │ ├── lower-case@1.1.4 
  │ │ ├── lower-case-first@1.0.2 
  │ │ ├── param-case@1.1.2 
  │ │ ├── pascal-case@1.1.2 
  │ │ ├── path-case@1.1.2 
  │ │ ├── sentence-case@1.1.3 
  │ │ ├── snake-case@1.1.2 
  │ │ ├── swap-case@1.1.2 
  │ │ ├── title-case@1.1.2 
  │ │ ├── upper-case@1.1.3 
  │ │ └── upper-case-first@1.1.2 
  │ ├─┬ clean-css@3.4.28 
  │ │ ├─┬ commander@2.8.1 
  │ │ │ └── graceful-readlink@1.0.1 
  │ │ └── source-map@0.4.4 
  │ ├─┬ cli@0.11.3 
  │ │ ├── exit@0.1.2 
  │ │ └─┬ glob@7.1.2 
  │ │   └── minimatch@3.0.4 
  │ ├─┬ concat-stream@1.5.2 
  │ │ ├─┬ readable-stream@2.0.6 
  │ │ │ └── string_decoder@0.10.31 
  │ │ └── typedarray@0.0.6 
  │ └── relateurl@0.2.7 
  ├─┬ illuminate-js@0.2.0 
  │ ├── array-differ@1.0.0 
  │ ├─┬ extend-shallow@2.0.1 
  │ │ └── is-extendable@0.1.1 
  │ ├─┬ is-plain-object@2.0.4 
  │ │ └── isobject@3.0.1 
  │ └─┬ lodash.clonedeep@3.0.2 
  │   ├─┬ lodash._baseclone@3.3.0 
  │   │ ├── lodash._arraycopy@3.0.0 
  │   │ ├── lodash._arrayeach@3.0.0 
  │   │ ├─┬ lodash._baseassign@3.2.0 
  │   │ │ └── lodash._basecopy@3.0.1 
  │   │ ├── lodash._basefor@3.0.3 
  │   │ └─┬ lodash.keys@3.1.2 
  │   │   └── lodash._getnative@3.9.1 
  │   └── lodash._bindcallback@3.0.1 
  ├── imageinfo@1.0.4 
  ├─┬ jimp@0.2.13 
  │ ├── bmp-js@0.0.1 
  │ ├── es6-promise@3.3.1 
  │ ├── file-type@3.9.0 
  │ ├── jpeg-js@0.1.2 
  │ ├── mime@1.3.4 
  │ ├─┬ pixelmatch@4.0.2 
  │ │ └── pngjs@3.3.0 
  │ ├── pngjs@2.3.1 
  │ ├── read-chunk@1.0.1 
  │ ├─┬ stream-to-buffer@0.1.0 
  │ │ └── stream-to@0.2.2 
  │ └── tinycolor2@1.4.1 
  ├─┬ json2yaml@1.0.3 
  │ └── remedial@1.0.7 
  ├─┬ less@2.5.3 
  │ ├─┬ errno@0.1.4 
  │ │ └── prr@0.0.0 
  │ ├─┬ graceful-fs@3.0.11 
  │ │ └── natives@1.1.0 
  │ ├── image-size@0.3.5 
  │ ├─┬ mkdirp@0.5.1 
  │ │ └── minimist@0.0.8 
  │ ├─┬ promise@6.1.0 
  │ │ └── asap@1.0.0 
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
  │ │ │ │ └── verror@1.10.0 
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
  │ │ ├── oauth-sign@0.8.2 
  │ │ ├── performance-now@2.1.0 
  │ │ ├── qs@6.5.1 
  │ │ ├── safe-buffer@5.1.1 
  │ │ ├── stringstream@0.0.5 
  │ │ ├─┬ tough-cookie@2.3.3 
  │ │ │ └── punycode@1.4.1 
  │ │ ├── tunnel-agent@0.6.0 
  │ │ └── uuid@3.1.0 
  │ └─┬ source-map@0.4.4 
  │   └── amdefine@1.0.1 
  ├─┬ less-plugin-autoprefix@1.5.1 
  │ ├─┬ autoprefixer@6.7.7 
  │ │ ├─┬ browserslist@1.7.7 
  │ │ │ └── electron-to-chromium@1.3.24 
  │ │ ├── caniuse-db@1.0.30000741 
  │ │ ├── normalize-range@0.1.2 
  │ │ ├── num2fraction@1.2.2 
  │ │ └── postcss-value-parser@3.3.0 
  │ └─┬ postcss@5.2.17 
  │   ├─┬ chalk@1.1.3 
  │   │ └── supports-color@2.0.0 
  │   ├── js-base64@2.3.2 
  │   └─┬ supports-color@3.2.3 
  │     └── has-flag@1.0.0 
  ├── lodash@4.6.0 
  ├─┬ markdown-it@4.4.0 
  │ ├─┬ argparse@1.0.9 
  │ │ └── sprintf-js@1.0.3 
  │ ├── entities@1.1.1 
  │ ├── linkify-it@1.2.4 
  │ ├── mdurl@1.0.1 
  │ └── uc.micro@1.0.3 
  ├── markdown-it-abbr@1.0.4 
  ├─┬ markdown-it-checkbox@1.1.0 
  │ └── underscore@1.8.3 
  ├── markdown-it-deflist@1.0.0 
  ├── markdown-it-emoji@1.1.0 
  ├── markdown-it-footnote@1.0.0 
  ├── markdown-it-ins@1.0.0 
  ├── markdown-it-mark@1.0.0 
  ├─┬ markdown-it-math@3.0.2 
  │ └── ascii2mathml@0.5.4 
  ├── markdown-it-sub@1.0.0 
  ├── markdown-it-sup@1.0.0 
  ├── markdown-it-toc@1.1.0 
  ├── node-useref@0.3.15 
  ├─┬ nunjucks@2.4.0 
  │ ├── asap@2.0.6 
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
  │   │ └── is-fullwidth-code-point@1.0.0 
  │   ├── window-size@0.1.4 
  │   └── y18n@3.2.1 
  ├─┬ nunjucks-date@1.2.0 
  │ └── moment@2.18.1 
  ├── open@0.0.5 
  ├─┬ prettyjson@1.1.3 
  │ ├── colors@1.1.2 
  │ └── minimist@1.2.0 
  ├─┬ prompt@0.2.13 
  │ ├── pkginfo@0.4.1 
  │ ├─┬ read@1.0.7 
  │ │ └── mute-stream@0.0.7 
  │ ├── revalidator@0.1.8 
  │ ├─┬ utile@0.2.1 
  │ │ ├── deep-equal@1.0.1 
  │ │ ├── i@0.3.6 
  │ │ └── ncp@0.4.2 
  │ └─┬ winston@0.6.2 
  │   ├── async@0.1.22 
  │   ├── colors@0.6.2 
  │   ├── cycle@1.0.3 
  │   ├── eyes@0.1.8 
  │   ├── pkginfo@0.2.3 
  │   ├── request@2.9.203 
  │   └── stack-trace@0.0.10 
  ├── ramda@0.19.1 
  ├─┬ redux@3.3.1 
  │ ├── lodash-es@4.17.4 
  │ └─┬ loose-envify@1.3.1 
  │   └── js-tokens@3.0.2 
  ├── redux-thunk@1.0.0 
  ├─┬ request-promise@1.0.2 
  │ ├── bluebird@2.11.0 
  │ ├─┬ cls-bluebird@1.1.3 
  │ │ ├── is-bluebird@1.0.2 
  │ │ └── shimmer@1.1.0 
  │ └── lodash@3.10.1 
  ├── reselect@2.0.3 
  ├─┬ rss@1.2.0 
  │ ├─┬ grunt-cli@0.1.13 
  │ │ ├─┬ findup-sync@0.1.3 
  │ │ │ ├─┬ glob@3.2.11 
  │ │ │ │ └── minimatch@0.3.0 
  │ │ │ └── lodash@2.4.2 
  │ │ ├─┬ nopt@1.0.10 
  │ │ │ └── abbrev@1.1.1 
  │ │ └── resolve@0.3.1 
  │ ├─┬ mime-types@2.1.17 
  │ │ └── mime-db@1.30.0 
  │ └── xml@1.0.1 
  ├── spark-md5@2.0.2 
  ├── string@3.3.1 
  ├─┬ superscore.string@0.0.3 
  │ ├─┬ anymatch@1.1.0 
  │ │ └── minimatch@1.0.0 
  │ └── underscore.string@2.4.0 
  ├─┬ swig@1.4.2 
  │ ├─┬ optimist@0.6.1 
  │ │ ├── minimist@0.0.10 
  │ │ └── wordwrap@0.0.2 
  │ └─┬ uglify-js@2.4.24 
  │   ├── source-map@0.1.34 
  │   └─┬ yargs@3.5.4 
  │     └── window-size@0.1.0 
  └─┬ uglify-js@2.5.0 
    ├── async@0.2.10 
    ├── uglify-to-browserify@1.0.2 
    └─┬ yargs@3.5.4 
      ├── camelcase@1.2.1 
      └── window-size@0.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/skri.be/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 22% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0192 took 3.6629s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/skri.be/node_modules/skri.be/index.js. Coverage (Term): 60% Coverage (LOC): 100%
*- File /root/Targets/skri.be/node_modules/babel/register.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/skri.be/node_modules/babel/node_modules/babel-core/register.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/skri.be/node_modules/babel/node_modules/babel-core/lib/api/register/node-polyfill.js. Coverage (Term): 39% Coverage (LOC): 70%
*- File /root/Targets/skri.be/node_modules/babel/node_modules/babel-core/lib/polyfill.js. Coverage (Term): 46% Coverage (LOC): 56%
*- File /root/Targets/skri.be/node_modules/core-js/shim.js. Coverage (Term): 3% Coverage (LOC): 4%
*- File /root/Targets/skri.be/node_modules/core-js/modules/es5.js. Coverage (Term): 4% Coverage (LOC): 3%
*- File /root/Targets/skri.be/node_modules/core-js/modules/$.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/skri.be/node_modules/core-js/modules/$.export.js. Coverage (Term): 8% Coverage (LOC): 15%
*- File /root/Targets/skri.be/node_modules/core-js/modules/$.global.js. Coverage (Term): 55% Coverage (LOC): 80%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
