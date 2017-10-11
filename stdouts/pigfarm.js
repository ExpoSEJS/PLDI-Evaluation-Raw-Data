/root/Targets/pigfarm.js
└─┬ pigfarm.js@1.1.5 
  ├─┬ debug@2.6.9 
  │ └── ms@2.0.0 
  ├── es6-promise@4.1.1 
  ├── extend@3.0.1 
  ├── pigfarm-fetcher@1.0.8 
  ├── pigfarm-render@1.0.1 
  └── process.hrtime@1.0.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pigfarm.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0897 took 2.9557s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (3:4) on program 'use strict';
var nodedebug = require("debug");
var assert = require("assert");
var extend = require("extend");
var pigfarmRender = require("pigfarm-render");

var runDependenciesTree = require("./lib/asyncDependencies");
var createInjector = require("./lib/data-injector");
var fetchersFactory = require("./lib/fetchers");
var Promise = require("./lib/promise");

var createlog = nodedebug("auto-creating");
var servelog = nodedebug("auto-serving");
var EventEmitter = require("events");

var exportee = module.exports = function (config, option) {
	option = option || {};

	assert.equal(typeof (config.data = config.data || {}), 'object', 'please give pigfarm.js a datasource map');

	if (!config.render) {
		config = extend({}, config);
		if (config.template) {
			config.render = pigfarmRender(config.template, config.helper || {})
		} else {
			config.render = config.render || (d=>JSON.stringify(d));
		}
	}

	// static data
	var _staticJSON = {};
    // static function
    var _staticFunc = {};
	// read data sources
	var fetchers = {};

	var render = config.render;

	var exportee = function (fetchContext) {
		var self = this;
		return new Promise(function (resolve, reject) {
			servelog('start');
			if (option.timeout && !isNaN(+option.timeout)) {
				setTimeout(function () {
				    reject(new Error('pigfarm timeout'));
				}, option.timeout)
			}
			const contextParam = fetchContext || {};

			// copy the staticJSON
			var renderData = extend(contextParam, JSON.parse(JSON.stringify(_staticJSON)));

            // inject the return value of staticFunc
            Object.keys(_staticFunc).forEach(key => {
                var result = _staticFunc[key](contextParam);
                if (typeof(result) === 'object') {
                    createInjector(key, renderData)(result);
                }else{
                    console.log(`WARNING: static ${key} is ignored, function of value must return object`);
                }
            });

			var requestTree = {};

			servelog('fetch start');
			emitEvent(exportee, ['fetchstart', self]);

			// make the dependency tree for all requests
			Object.keys(fetchers).forEach(key=> {

				requestTree[key] = {
					dep: config.data[key].dependencies,
					factory: datas=> {

						return fetchers[key].call(self, extend({}, datas, contextParam))
							.then(function (ret) {
								ret = ret.data;
								if (ret === void 0 || ret === null || ret === false) {
									return {};

								} else {
									return ret;
								}
							});
					}
				};

			});
			runDependenciesTree.call(self, requestTree)
				.then(function (fetched) {
					servelog('fetch end');
					emitEvent(exportee, ['fetchend', self]);

					Object.keys(fetched).forEach(key=> {
						let result = fetched[key];
						let dep = config.data[key].dependencies;
						if (dep && !config.data[key].mountatglobal) {
							createInjector(key)(result, fetched[dep[0]])

						} else {
							createInjector(key, renderData)(result);

						}
					});
					emitEvent(exportee, ['renderstart', self]);
					// render
					servelog('renderData keys', Object.keys(renderData));

					try {
						var html = render(renderData);

					} catch (e) {
						e.status = e.status || 555;
						e.renderData = renderData;
						return reject(e);
					}

					emitEvent(exportee, ['renderend', self]);

					resolve(html);
				})
				.catch(reject);
		}).catch(function (err) {
			err.status = err.status || 503;
			throw err
		});
	};

	extend(exportee, EventEmitter.prototype);

	createlog('reading data sources');

	Object.keys(config.data).forEach(key=> {
		var dataSource = config.data[key];

		if (dataSource.type == 'request') {
			// request, fetch them when user's requests come in
			// if this config is request, create fetchers
			fetchers[key] = dataSource.action;
			fetchers[key].name = key;

		} else if (dataSource.type == 'static') {
			// static json, put it into result
			// _staticJSON[key] = value;

			typeof(dataSource.value) === 'function' ? (_staticFunc[key] = dataSource.value) // put the static function
                : createInjector(key, _staticJSON)(dataSource.value); // put the static data into result

		} else {
			throw new Error('must indicate a type for datasource');

		}
	});
	fetchers = fetchersFactory(fetchers);

	createlog('readed data sources, static:', _staticJSON);

	return exportee;
};

exportee.useFetcher = function (fetcher) {
	fetchersFactory.useFetcher.apply(this, arguments);
};

function emitEvent(emitter, args) {
	try {
		emitter.emit.apply(emitter, args);
	} catch (e) {
	}
}

function noop() {
}
 at SyntaxError: Unexpected token (3:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$2.parseBindingAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1417:12)
    at Parser.parseBindingAtom (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:49:30)
    at Parser.pp$1.parseVarId (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1049:20)
    at Parser.pp$1.parseVar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1032:14)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:917:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseTopLevel (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:638:25)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
