
> modern-syslog@1.1.2 install /root/Targets/download.jqueryui.com/node_modules/modern-syslog
> node-gyp rebuild

make: Entering directory '/root/Targets/download.jqueryui.com/node_modules/modern-syslog/build'
  CXX(target) Release/obj.target/core/core.o
  SOLINK_MODULE(target) Release/obj.target/core.node
  COPY Release/core.node
make: Leaving directory '/root/Targets/download.jqueryui.com/node_modules/modern-syslog/build'
/root/Targets/download.jqueryui.com
└─┬ download.jqueryui.com@2.1.15 
  ├─┬ archiver@0.14.4 
  │ ├── async@0.9.2 
  │ ├── buffer-crc32@0.2.13 
  │ ├─┬ glob@4.3.5 
  │ │ ├─┬ inflight@1.0.6 
  │ │ │ └── wrappy@1.0.2 
  │ │ ├─┬ minimatch@2.0.10 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ └── once@1.4.0 
  │ ├── lazystream@0.1.0 
  │ ├── lodash@3.2.0 
  │ ├─┬ readable-stream@1.0.34 
  │ │ ├── core-util-is@1.0.2 
  │ │ ├── isarray@0.0.1 
  │ │ └── string_decoder@0.10.31 
  │ ├─┬ tar-stream@1.1.5 
  │ │ ├── bl@0.9.5 
  │ │ ├── end-of-stream@1.4.0 
  │ │ └── xtend@4.0.1 
  │ └─┬ zip-stream@0.5.2 
  │   └─┬ compress-commons@0.2.9 
  │     ├── crc32-stream@0.3.4 
  │     └── node-int64@0.3.3 
  ├── async@0.1.22 
  ├─┬ bower@1.3.8 
  │ ├── abbrev@1.0.9 
  │ ├── archy@0.0.2 
  │ ├─┬ bower-config@0.5.3 
  │ │ ├── graceful-fs@2.0.3 
  │ │ ├─┬ optimist@0.6.1 
  │ │ │ └── minimist@0.0.10 
  │ │ └── osenv@0.0.3 
  │ ├── bower-endpoint-parser@0.2.2 
  │ ├─┬ bower-json@0.4.0 
  │ │ ├── deep-extend@0.2.11 
  │ │ ├── graceful-fs@2.0.3 
  │ │ └── intersect@0.0.3 
  │ ├── bower-logger@0.2.2 
  │ ├─┬ bower-registry-client@0.2.4 
  │ │ ├── async@0.2.10 
  │ │ ├── graceful-fs@2.0.3 
  │ │ ├── lru-cache@2.3.1 
  │ │ ├── mkdirp@0.3.5 
  │ │ ├─┬ request@2.51.0 
  │ │ │ ├── caseless@0.8.0 
  │ │ │ ├─┬ combined-stream@0.0.7 
  │ │ │ │ └── delayed-stream@0.0.5 
  │ │ │ ├─┬ form-data@0.2.0 
  │ │ │ │ ├── async@0.9.2 
  │ │ │ │ └─┬ mime-types@2.0.14 
  │ │ │ │   └── mime-db@1.12.0 
  │ │ │ ├── hawk@1.1.1 
  │ │ │ ├── mime-types@1.0.2 
  │ │ │ ├── oauth-sign@0.5.0 
  │ │ │ ├── qs@2.3.3 
  │ │ │ └── stringstream@0.0.5 
  │ │ ├── request-replay@0.2.0 
  │ │ └── rimraf@2.2.8 
  │ ├─┬ cardinal@0.4.4 
  │ │ ├── ansicolors@0.2.1 
  │ │ └── redeyed@0.4.4 
  │ ├─┬ chalk@0.4.0 
  │ │ ├── ansi-styles@1.0.0 
  │ │ ├── has-color@0.1.7 
  │ │ └── strip-ansi@0.1.1 
  │ ├── chmodr@0.1.2 
  │ ├─┬ decompress-zip@0.0.8 
  │ │ ├─┬ binary@0.3.0 
  │ │ │ ├── buffers@0.1.1 
  │ │ │ └─┬ chainsaw@0.1.0 
  │ │ │   └── traverse@0.3.9 
  │ │ ├── mkpath@0.1.0 
  │ │ ├── nopt@2.2.1 
  │ │ ├── q@1.0.1 
  │ │ ├── readable-stream@1.1.14 
  │ │ └─┬ touch@0.0.2 
  │ │   └── nopt@1.0.10 
  │ ├── fstream@0.1.31 
  │ ├─┬ fstream-ignore@0.0.10 
  │ │ └── minimatch@0.3.0 
  │ ├─┬ glob@4.0.6 
  │ │ └── minimatch@1.0.0 
  │ ├─┬ graceful-fs@3.0.11 
  │ │ └── natives@1.1.0 
  │ ├─┬ handlebars@1.3.0 
  │ │ └─┬ uglify-js@2.3.6 
  │ │   ├── async@0.2.10 
  │ │   └── optimist@0.3.7 
  │ ├─┬ inquirer@0.5.1 
  │ │ ├── async@0.8.0 
  │ │ ├─┬ cli-color@0.3.3 
  │ │ │ ├── d@0.1.1 
  │ │ │ ├─┬ es5-ext@0.10.30 
  │ │ │ │ ├─┬ es6-iterator@2.0.1 
  │ │ │ │ │ └── d@1.0.0 
  │ │ │ │ └─┬ es6-symbol@3.1.1 
  │ │ │ │   └── d@1.0.0 
  │ │ │ ├─┬ memoizee@0.3.10 
  │ │ │ │ ├─┬ es6-weak-map@0.1.4 
  │ │ │ │ │ ├── es6-iterator@0.1.3 
  │ │ │ │ │ └── es6-symbol@2.0.1 
  │ │ │ │ ├─┬ event-emitter@0.3.5 
  │ │ │ │ │ └── d@1.0.0 
  │ │ │ │ ├── lru-queue@0.1.0 
  │ │ │ │ └── next-tick@0.2.2 
  │ │ │ └─┬ timers-ext@0.1.2 
  │ │ │   └── next-tick@1.0.0 
  │ │ ├── lodash@2.4.2 
  │ │ ├── mute-stream@0.0.4 
  │ │ ├─┬ readline2@0.1.1 
  │ │ │ └─┬ strip-ansi@2.0.1 
  │ │ │   └── ansi-regex@1.1.1 
  │ │ └── through@2.3.8 
  │ ├─┬ insight@0.3.1 
  │ │ ├── async@0.2.10 
  │ │ ├─┬ configstore@0.2.3 
  │ │ │ ├── graceful-fs@2.0.3 
  │ │ │ ├── js-yaml@3.0.2 
  │ │ │ ├── mkdirp@0.3.5 
  │ │ │ ├── osenv@0.0.3 
  │ │ │ └── uuid@1.4.2 
  │ │ ├─┬ inquirer@0.4.1 
  │ │ │ ├─┬ cli-color@0.2.3 
  │ │ │ │ ├── es5-ext@0.9.2 
  │ │ │ │ └─┬ memoizee@0.2.6 
  │ │ │ │   ├── event-emitter@0.2.2 
  │ │ │ │   └── next-tick@0.1.0 
  │ │ │ └── lodash@2.4.2 
  │ │ ├─┬ lodash.debounce@2.4.1 
  │ │ │ ├── lodash.isfunction@2.4.1 
  │ │ │ ├─┬ lodash.isobject@2.4.1 
  │ │ │ │ └── lodash._objecttypes@2.4.1 
  │ │ │ └─┬ lodash.now@2.4.1 
  │ │ │   └── lodash._isnative@2.4.1 
  │ │ ├── object-assign@0.1.2 
  │ │ └─┬ request@2.27.0 
  │ │   ├── aws-sign@0.3.0 
  │ │   ├── cookie-jar@0.3.0 
  │ │   ├─┬ form-data@0.1.4 
  │ │   │ └── async@0.9.2 
  │ │   ├── hawk@1.0.0 
  │ │   ├── oauth-sign@0.3.0 
  │ │   ├── qs@0.6.6 
  │ │   └── tunnel-agent@0.3.0 
  │ ├── is-root@0.1.0 
  │ ├── junk@0.3.0 
  │ ├── lockfile@0.4.3 
  │ ├── lru-cache@2.5.2 
  │ ├─┬ mkdirp@0.5.1 
  │ │ └── minimist@0.0.8 
  │ ├── mout@0.9.1 
  │ ├── nopt@3.0.6 
  │ ├── opn@0.1.2 
  │ ├─┬ osenv@0.1.4 
  │ │ ├── os-homedir@1.0.2 
  │ │ └── os-tmpdir@1.0.2 
  │ ├─┬ p-throttler@0.0.1 
  │ │ └── q@0.9.7 
  │ ├─┬ promptly@0.2.1 
  │ │ └── read@1.0.7 
  │ ├── q@1.0.1 
  │ ├─┬ request@2.36.0 
  │ │ ├── aws-sign2@0.5.0 
  │ │ ├── forever-agent@0.5.2 
  │ │ ├─┬ form-data@0.1.4 
  │ │ │ └── async@0.9.2 
  │ │ ├─┬ hawk@1.0.0 
  │ │ │ ├── boom@0.4.2 
  │ │ │ ├── cryptiles@0.2.2 
  │ │ │ ├── hoek@0.9.1 
  │ │ │ └── sntp@0.2.4 
  │ │ ├─┬ http-signature@0.10.1 
  │ │ │ ├── asn1@0.1.11 
  │ │ │ ├── assert-plus@0.1.5 
  │ │ │ └── ctype@0.5.3 
  │ │ ├── json-stringify-safe@5.0.1 
  │ │ ├── node-uuid@1.4.8 
  │ │ ├── oauth-sign@0.3.0 
  │ │ ├── qs@0.6.6 
  │ │ ├─┬ tough-cookie@2.3.3 
  │ │ │ └── punycode@1.4.1 
  │ │ └── tunnel-agent@0.4.3 
  │ ├─┬ request-progress@0.3.1 
  │ │ └── throttleit@0.0.2 
  │ ├── retry@0.6.1 
  │ ├── rimraf@2.2.8 
  │ ├── semver@2.3.2 
  │ ├─┬ shell-quote@1.4.3 
  │ │ ├── array-filter@0.0.1 
  │ │ ├── array-map@0.0.0 
  │ │ ├── array-reduce@0.0.0 
  │ │ └── jsonify@0.0.0 
  │ ├── stringify-object@0.2.1 
  │ ├─┬ tar@0.1.20 
  │ │ └── block-stream@0.0.9 
  │ ├── tmp@0.0.23 
  │ ├─┬ update-notifier@0.2.2 
  │ │ ├─┬ chalk@0.5.1 
  │ │ │ ├── ansi-styles@1.1.0 
  │ │ │ ├── escape-string-regexp@1.0.5 
  │ │ │ ├─┬ has-ansi@0.1.0 
  │ │ │ │ └── ansi-regex@0.2.1 
  │ │ │ ├─┬ strip-ansi@0.3.0 
  │ │ │ │ └── ansi-regex@0.2.1 
  │ │ │ └── supports-color@0.2.0 
  │ │ ├─┬ configstore@0.3.2 
  │ │ │ ├─┬ js-yaml@3.10.0 
  │ │ │ │ ├─┬ argparse@1.0.9 
  │ │ │ │ │ └── sprintf-js@1.0.3 
  │ │ │ │ └── esprima@4.0.0 
  │ │ │ ├── object-assign@2.1.1 
  │ │ │ ├── user-home@1.1.1 
  │ │ │ ├── uuid@2.0.3 
  │ │ │ └── xdg-basedir@1.0.1 
  │ │ ├── is-npm@1.0.0 
  │ │ ├─┬ latest-version@1.0.1 
  │ │ │ └─┬ package-json@1.2.0 
  │ │ │   ├─┬ got@3.3.1 
  │ │ │   │ ├─┬ duplexify@3.5.1 
  │ │ │   │ │ ├─┬ readable-stream@2.3.3 
  │ │ │   │ │ │ ├── isarray@1.0.0 
  │ │ │   │ │ │ ├── process-nextick-args@1.0.7 
  │ │ │   │ │ │ ├── safe-buffer@5.1.1 
  │ │ │   │ │ │ ├── string_decoder@1.0.3 
  │ │ │   │ │ │ └── util-deprecate@1.0.2 
  │ │ │   │ │ └── stream-shift@1.0.0 
  │ │ │   │ ├── infinity-agent@2.0.3 
  │ │ │   │ ├── is-redirect@1.0.0 
  │ │ │   │ ├── is-stream@1.1.0 
  │ │ │   │ ├── lowercase-keys@1.0.0 
  │ │ │   │ ├── nested-error-stacks@1.0.2 
  │ │ │   │ ├── object-assign@3.0.0 
  │ │ │   │ ├── prepend-http@1.0.4 
  │ │ │   │ ├─┬ read-all-stream@3.1.0 
  │ │ │   │ │ ├─┬ pinkie-promise@2.0.1 
  │ │ │   │ │ │ └── pinkie@2.0.4 
  │ │ │   │ │ └─┬ readable-stream@2.3.3 
  │ │ │   │ │   ├── isarray@1.0.0 
  │ │ │   │ │   └── string_decoder@1.0.3 
  │ │ │   │ └── timed-out@2.0.0 
  │ │ │   └─┬ registry-url@3.1.0 
  │ │ │     └─┬ rc@1.2.1 
  │ │ │       ├── deep-extend@0.4.2 
  │ │ │       ├── ini@1.3.4 
  │ │ │       ├── minimist@1.2.0 
  │ │ │       └── strip-json-comments@2.0.1 
  │ │ ├─┬ semver-diff@2.1.0 
  │ │ │ └── semver@5.4.1 
  │ │ └─┬ string-length@1.0.1 
  │ │   └─┬ strip-ansi@3.0.1 
  │ │     └── ansi-regex@2.1.1 
  │ └── which@1.0.9 
  ├─┬ builder-amd@0.0.3 
  │ └─┬ requirejs-memfiles@2.1.15-3 
  │   └── requirejs@2.1.15 
  ├─┬ builder-jquery-css@0.0.4 
  │ └─┬ builder-amd-css@0.0.7 
  │   └── glob@4.3.5 
  ├─┬ connect@1.9.2 
  │ └── mime@1.2.11 
  ├── dateformat@1.0.2-1.2.3 
  ├── formidable@1.0.9 
  ├─┬ glob@4.0.0 
  │ ├── inherits@2.0.3 
  │ └─┬ minimatch@0.3.0 
  │   └── sigmund@1.0.1 
  ├─┬ gm@1.8.1 
  │ └── debug@0.7.0 
  ├─┬ grunt@0.4.5 
  │ ├── coffee-script@1.3.3 
  │ ├── colors@0.6.2 
  │ ├── eventemitter2@0.4.14 
  │ ├── exit@0.1.2 
  │ ├─┬ findup-sync@0.1.3 
  │ │ ├─┬ glob@3.2.11 
  │ │ │ └── minimatch@0.3.0 
  │ │ └── lodash@2.4.2 
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
  │ ├─┬ grunt-legacy-util@0.2.0 
  │ │ ├── lodash@0.9.2 
  │ │ └── underscore.string@2.2.1 
  │ ├── hooker@0.2.3 
  │ ├── iconv-lite@0.2.11 
  │ ├─┬ js-yaml@2.0.5 
  │ │ ├─┬ argparse@0.1.16 
  │ │ │ ├── underscore@1.7.0 
  │ │ │ └── underscore.string@2.4.0 
  │ │ └── esprima@1.0.4 
  │ ├── lodash@0.9.2 
  │ ├── minimatch@0.2.14 
  │ ├── nopt@1.0.10 
  │ ├── rimraf@2.2.8 
  │ └── underscore.string@2.2.1 
  ├── grunt-check-modules@0.2.0 
  ├─┬ grunt-contrib-clean@0.5.0 
  │ └── rimraf@2.2.8 
  ├── grunt-contrib-copy@0.4.1 
  ├─┬ grunt-contrib-handlebars@0.5.7 
  │ └─┬ grunt-lib-contrib@0.5.3 
  │   └── zlib-browserify@0.0.1 
  ├─┬ grunt-contrib-jshint@0.9.2 
  │ └─┬ jshint@2.4.4 
  │   ├── cli@0.4.5 
  │   ├── console-browserify@0.1.6 
  │   ├─┬ htmlparser2@3.3.0 
  │   │ ├── domelementtype@1.3.0 
  │   │ ├── domhandler@2.1.0 
  │   │ └── domutils@1.1.6 
  │   ├── minimatch@0.4.0 
  │   └── shelljs@0.1.4 
  ├─┬ grunt-contrib-uglify@0.2.0 
  │ └── grunt-lib-contrib@0.6.1 
  ├─┬ handlebars@1.0.12 
  │ └─┬ uglify-js@2.3.6 
  │   ├── async@0.2.10 
  │   └── optimist@0.3.7 
  ├─┬ jquery-ui-themeroller@0.0.4 
  │ └── async@0.9.0 
  ├── lzma@1.2.1 
  ├── node-packager@0.0.6 
  ├─┬ optimist@0.3.4 
  │ └── wordwrap@0.0.3 
  ├── q@1.1.2 
  ├── qs@5.2.1 
  ├── requirejs@2.1.8 
  ├─┬ rimraf@2.0.2 
  │ └── graceful-fs@1.1.14 
  ├── semver@1.1.0 
  ├─┬ simple-log@1.3.0 
  │ └─┬ modern-syslog@1.1.2 
  │   └── nan@2.7.0 
  ├── sqwish@0.2.0 
  ├─┬ uglify-js@2.2.5 
  │ ├── optimist@0.3.7 
  │ └─┬ source-map@0.1.43 
  │   └── amdefine@1.0.1 
  ├── underscore@1.4.4 
  └─┬ winston@0.7.3 
    ├── async@0.2.10 
    ├── cycle@1.0.3 
    ├── eyes@0.1.8 
    ├── pkginfo@0.3.1 
    ├─┬ request@2.16.6 
    │ ├── aws-sign@0.2.0 
    │ ├── cookie-jar@0.2.0 
    │ ├── forever-agent@0.2.0 
    │ ├── form-data@0.0.10 
    │ ├─┬ hawk@0.10.2 
    │ │ ├── boom@0.3.8 
    │ │ ├── cryptiles@0.1.3 
    │ │ ├── hoek@0.7.6 
    │ │ └── sntp@0.1.4 
    │ ├── json-stringify-safe@3.0.0 
    │ ├── oauth-sign@0.2.0 
    │ ├── qs@0.5.6 
    │ └── tunnel-agent@0.2.0 
    └── stack-trace@0.0.10 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/download.jqueryui.com/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 26% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0611 took 7.4368s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: 'return' outside of function (7:1) on program if ( process.argv.indexOf( "--console" ) !== -1 ) {
	module.exports = {
		init: function() {
			return console;
		}
	};
	return;
}

var format = require( "util" ).format,
	syslog = require( "modern-syslog" );

module.exports = {
	init: function( name ) {
		syslog.init( name, syslog.LOG_PID, syslog.LOG_LOCAL0 );

		return {
			log: function() {
				syslog.log( syslog.LOG_INFO, format.apply( null, arguments ) );
			},

			warn: function() {
				syslog.log( syslog.LOG_NOTICE, format.apply( null, arguments ) );
			},

			error: function() {
				syslog.log( syslog.LOG_ERR, format.apply( null, arguments ) );
			}
		};
	}
};
 at SyntaxError: 'return' outside of function (7:1)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$1.parseReturnStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:831:12)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:699:34)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseBlock (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseIfStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:824:28)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:698:30)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/download.jqueryui.com/node_modules/download.jqueryui.com/main.js. Coverage (Term): 27% Coverage (LOC): 38%
*- File /root/Targets/download.jqueryui.com/node_modules/download.jqueryui.com/lib/builder.js. Coverage (Term): 6% Coverage (LOC): 9%
*- File /root/Targets/download.jqueryui.com/node_modules/download.jqueryui.com/lib/cache.js. Coverage (Term): 8% Coverage (LOC): 8%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
