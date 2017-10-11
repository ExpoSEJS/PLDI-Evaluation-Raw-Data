/root/Targets/express-train.io
└── express-train.io@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/express-train.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0385 took 4.4031s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: The keyword 'package' is reserved (9:4) on program /**
 * module dependencies
 */

var express = require('express.io'),
    fs = require('fs'),
    hbs = require('handlebars'),
    path = require('path'),
    package = require('../package.json'),
    _ = require('underscore'),
    winston = require('winston'),
    nject = require('nject');

/**
 * expose `createApplication()`
 */

module.exports = createApplication;

/**
 * framework version
 */
createApplication.version = package.version;

/**
 * expose objects that can be overridden
 */
var LOCATIONS = createApplication.locations = {
    pkg:{
        path: '../package.json'
    },
    config:{
        path: '../config'
    },
    logs:{
        path: '../logs'
    },
    models: {
        path: 'models',
        autoinject: true,
        aggregateOn: 'models'
    },
    views: {
        path: 'views'
    },
    lib: {
        path: 'lib',
        autoinject: true
    },
    controllers: {
        path: 'controllers',
        autoinject: true
    },
    pub: {
        path: 'public'
    },
    middleware: {
        path: 'middleware',
        autoinject: true
    }
};

/**
 * Create a train application
 */
/*
TODO: ideas -
replace loc with a config object that takes locations, autoinject locations and aggregate on keys so users can add or remove their own autoinject locations
 */
function createApplication(dir, locs) {
    catchErrors();

    var app = express(),
        locations = _.defaults((locs || {}), LOCATIONS);
        tree = new nject.Tree();

    app.set('views', path.join(dir, locations.views.path));
    app.set('public', path.join(dir, locations.pub.path));

    var config = loadConfig(path.join(dir, locations.config.path));

    tree.constant('app', app);
    tree.constant('config', config);

    _.each(_.where(locations, {autoinject: true}), function(location) {
        traverseAndRegister(path.join(dir, location.path), tree, location.aggregateOn)
    });

    return tree.resolve();
}

function traverseAndRegister(p, tree, aggregateOn) {
    var stat,
        key = path.basename(p, path.extname(p));

    try {
        stat = fs.statSync(p);
    }
    catch (err) {
        throw new Error('File or directory ' + p + ' could not be found. This is necessary for your application to conform to the express train framework!');
    }

    if (path.extname(p) == '.json' || path.extname(p) == '.js') {
        var loaded = require(p);
        if (_.isFunction(loaded)) {
            tree.register(key, loaded, {
                identifier: p,
                aggregateOn: aggregateOn
            });
        }
        else {
            tree.constant(key, loaded, {
                identifier: p,
                aggregateOn: aggregateOn
            });
        }
    }
    else if (stat.isDirectory()) {
        var files = fs.readdirSync(p);
        files.forEach(function (file) {
            var filePath = path.join(p, file);
            traverseAndRegister(filePath, tree, aggregateOn);
        });
    }
}

function catchErrors() {
    process.on("uncaughtException", function (err) {
        console.error("Exiting process due to uncaught exception!");
        console.error(err.stack || err);
        process.exit();
    });
}

function loadConfig(p) {
    var env = process.env.NODE_ENV;

    var configFile = path.join(p, env + '.json');

    // Appfog doesn't like this =/
    //if (!fs.existsSync(configFile)) {
        configFile = path.join(p, 'default.json');
    //}

    var config = require(configFile);
    var template = hbs.compile(JSON.stringify(config));
    return JSON.parse(template(process.env));
}




 at SyntaxError: The keyword 'package' is reserved (9:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$3.parseIdent (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2182:14)
    at Parser.parseBindingAtom (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:41:34)
    at Parser.pp$1.parseVarId (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1049:20)
    at Parser.pp$1.parseVar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1032:14)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:917:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseTopLevel (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:516:17)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
