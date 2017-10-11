/root/Targets/epub.js
└── epub.js@0.2.15 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/epub.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0499 took 3.1542s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected character '#' (1:78) on program #!/usr/bin/env node
var connect = require('connect'),
	colors = require('colors'),
	argv = require('optimist').argv,
	portfinder = require('portfinder');

var port = argv.p,
	logger = argv.l,
	log = console.log;

if (!argv.p) {
	portfinder.basePort = 8080;
	portfinder.getPort(function (err, port) {
	if (err) throw err;
	listen(port);
	});
} else {
	listen(port);
}



function listen(port) {
	var server = connect();
		server.use(connect.static(__dirname))
		
		if(!logger) server.use(connect.logger(logger))
		
		server.listen(port);
	
	log('Starting up Server, serving '.yellow
		+ __dirname.green
		+ ' on port: '.yellow
		+ port.toString().cyan);
	log('Hit CTRL-C to stop the server');
	
}
	 
	

process.on('SIGINT', function () {
	log('http-server stopped.'.red);
	process.exit();
});
 at SyntaxError: Unexpected character '#' (1:78)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2756:10)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp.eat (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:536:12)
    at Parser.pp.semicolon (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:581:15)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:918:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
