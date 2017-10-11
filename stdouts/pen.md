
> websocket@1.0.24 install /root/Targets/pen.md/node_modules/websocket
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/pen.md/node_modules/websocket/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
  SOLINK_MODULE(target) Release/obj.target/bufferutil.node
  COPY Release/bufferutil.node
  CXX(target) Release/obj.target/validation/src/validation.o
  SOLINK_MODULE(target) Release/obj.target/validation.node
  COPY Release/validation.node
make: Leaving directory '/root/Targets/pen.md/node_modules/websocket/build'
/root/Targets/pen.md
└─┬ pen.md@0.1.3 
  ├── github-markdown-css@2.8.0 
  ├─┬ markdown-it@7.0.1 
  │ ├─┬ argparse@1.0.9 
  │ │ └── sprintf-js@1.0.3 
  │ ├── entities@1.1.1 
  │ ├── linkify-it@2.0.3 
  │ ├── mdurl@1.0.1 
  │ └── uc.micro@1.0.3 
  ├─┬ markdown-it-anchor@2.7.1 
  │ └── string@3.3.3 
  ├─┬ markdown-it-checkbox@1.1.0 
  │ └── underscore@1.8.3 
  ├── markdown-it-emoji@1.4.0 
  ├─┬ opn@4.0.2 
  │ ├── object-assign@4.1.1 
  │ └─┬ pinkie-promise@2.0.1 
  │   └── pinkie@2.0.4 
  ├─┬ pug@2.0.0-rc.4 
  │ ├─┬ pug-code-gen@2.0.0 
  │ │ ├─┬ constantinople@3.1.0 
  │ │ │ ├── acorn@3.3.0 
  │ │ │ └── is-expression@2.1.0 
  │ │ ├── doctypes@1.1.0 
  │ │ ├── js-stringify@1.0.2 
  │ │ ├── pug-attrs@2.0.2 
  │ │ ├── pug-error@1.3.2 
  │ │ ├── void-elements@2.0.1 
  │ │ └─┬ with@5.1.1 
  │ │   └─┬ acorn-globals@3.1.0 
  │ │     └── acorn@4.0.13 
  │ ├─┬ pug-filters@2.1.5 
  │ │ ├─┬ clean-css@3.4.28 
  │ │ │ ├─┬ commander@2.8.1 
  │ │ │ │ └── graceful-readlink@1.0.1 
  │ │ │ └─┬ source-map@0.4.4 
  │ │ │   └── amdefine@1.0.1 
  │ │ ├─┬ jstransformer@1.0.0 
  │ │ │ └── is-promise@2.1.0 
  │ │ ├── pug-walk@1.1.5 
  │ │ ├─┬ resolve@1.4.0 
  │ │ │ └── path-parse@1.0.5 
  │ │ └─┬ uglify-js@2.8.29 
  │ │   ├── source-map@0.5.7 
  │ │   ├── uglify-to-browserify@1.0.2 
  │ │   └─┬ yargs@3.10.0 
  │ │     ├── camelcase@1.2.1 
  │ │     ├─┬ cliui@2.1.0 
  │ │     │ ├─┬ center-align@0.1.3 
  │ │     │ │ ├─┬ align-text@0.1.4 
  │ │     │ │ │ ├─┬ kind-of@3.2.2 
  │ │     │ │ │ │ └── is-buffer@1.1.5 
  │ │     │ │ │ ├── longest@1.0.1 
  │ │     │ │ │ └── repeat-string@1.6.1 
  │ │     │ │ └── lazy-cache@1.0.4 
  │ │     │ ├── right-align@0.1.3 
  │ │     │ └── wordwrap@0.0.2 
  │ │     └── window-size@0.1.0 
  │ ├─┬ pug-lexer@3.1.0 
  │ │ ├─┬ character-parser@2.2.0 
  │ │ │ └─┬ is-regex@1.0.4 
  │ │ │   └─┬ has@1.0.1 
  │ │ │     └── function-bind@1.1.1 
  │ │ └─┬ is-expression@3.0.0 
  │ │   └── acorn@4.0.13 
  │ ├── pug-linker@3.0.3 
  │ ├── pug-load@2.0.9 
  │ ├─┬ pug-parser@4.0.0 
  │ │ └── token-stream@0.0.1 
  │ ├── pug-runtime@2.0.3 
  │ └── pug-strip-comments@1.0.2 
  ├─┬ react@15.6.2 
  │ ├── create-react-class@15.6.2 
  │ ├─┬ fbjs@0.8.16 
  │ │ ├── core-js@1.2.7 
  │ │ ├─┬ isomorphic-fetch@2.2.1 
  │ │ │ ├─┬ node-fetch@1.7.3 
  │ │ │ │ ├─┬ encoding@0.1.12 
  │ │ │ │ │ └── iconv-lite@0.4.19 
  │ │ │ │ └── is-stream@1.1.0 
  │ │ │ └── whatwg-fetch@2.0.3 
  │ │ ├─┬ promise@7.3.1 
  │ │ │ └── asap@2.0.6 
  │ │ ├── setimmediate@1.0.5 
  │ │ └── ua-parser-js@0.7.14 
  │ ├─┬ loose-envify@1.3.1 
  │ │ └── js-tokens@3.0.2 
  │ └── prop-types@15.6.0 
  ├── react-dom@15.6.2 
  ├─┬ react-render-html@0.1.4 
  │ ├── parse5@2.2.3 
  │ ├── react-attr-converter@0.1.0 
  │ └─┬ react-styling@1.6.4 
  │   ├─┬ babel-runtime@6.26.0 
  │   │ ├── core-js@2.5.1 
  │   │ └── regenerator-runtime@0.11.0 
  │   └── style-builder@1.0.13 
  ├─┬ websocket@1.0.24 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├── nan@2.7.0 
  │ ├─┬ typedarray-to-buffer@3.1.2 
  │ │ └── is-typedarray@1.0.0 
  │ └── yaeti@0.0.6 
  └─┬ yargs@4.8.1 
    ├─┬ cliui@3.2.0 
    │ └── wrap-ansi@2.1.0 
    ├── decamelize@1.2.0 
    ├── get-caller-file@1.0.2 
    ├── lodash.assign@4.2.0 
    ├─┬ os-locale@1.4.0 
    │ └─┬ lcid@1.0.0 
    │   └── invert-kv@1.0.0 
    ├─┬ read-pkg-up@1.0.1 
    │ ├─┬ find-up@1.1.2 
    │ │ └── path-exists@2.1.0 
    │ └─┬ read-pkg@1.1.0 
    │   ├─┬ load-json-file@1.1.0 
    │   │ ├── graceful-fs@4.1.11 
    │   │ ├─┬ parse-json@2.2.0 
    │   │ │ └─┬ error-ex@1.3.1 
    │   │ │   └── is-arrayish@0.2.1 
    │   │ ├── pify@2.3.0 
    │   │ └─┬ strip-bom@2.0.0 
    │   │   └── is-utf8@0.2.1 
    │   ├─┬ normalize-package-data@2.4.0 
    │   │ ├── hosted-git-info@2.5.0 
    │   │ ├─┬ is-builtin-module@1.0.0 
    │   │ │ └── builtin-modules@1.1.1 
    │   │ ├── semver@5.4.1 
    │   │ └─┬ validate-npm-package-license@3.0.1 
    │   │   ├─┬ spdx-correct@1.0.2 
    │   │   │ └── spdx-license-ids@1.2.2 
    │   │   └── spdx-expression-parse@1.0.4 
    │   └── path-type@1.1.0 
    ├── require-directory@2.1.1 
    ├── require-main-filename@1.0.1 
    ├── set-blocking@2.0.0 
    ├─┬ string-width@1.0.2 
    │ ├── code-point-at@1.1.0 
    │ ├─┬ is-fullwidth-code-point@1.0.0 
    │ │ └── number-is-nan@1.0.1 
    │ └─┬ strip-ansi@3.0.1 
    │   └── ansi-regex@2.1.1 
    ├── which-module@1.0.0 
    ├── window-size@0.2.0 
    ├── y18n@3.2.1 
    └─┬ yargs-parser@2.4.1 
      └── camelcase@3.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pen.md/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0723 took 3.4363s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
