/root/Targets/demo.location.io
└─┬ demo.location.io@0.0.3 
  └─┬ location.io@0.0.4
    └── addTimeout@0.4.0  (git://github.com/alexbirkett/addTimeout.git#65cf80ca5f5b624ccdb472a16178248c521a19ec)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/demo.location.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0578 took 6.9297s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected character '#' (1:78) on program #!/usr/bin/env node
// -*- js -*-

function getPortParameter() {
	
	var args = process.argv.slice(2);
	if (args.length < 1) {
		console.log("usage  <port>");
		process.exit(1);
	}
	
	return args[0];
}


var http = require('http'),
    ss = require('socketstream');

ss.api.root = ss.root = __dirname;

// Define a single-page client called 'main'
ss.client.define('main', {
  view: 'app.html',
  css:  ['libs/reset.css', 'app.css', 'libs/angular-ui.css', 'libs/bootstrap.css', 'libs/bootstrap-responsive.css'],
  code: ['libs/jquery-1.9.1.js',
         'libs/angular.min.js', 
         'libs/bootstrap.js',
         'app'
        ],
  tmpl: '*'
});

// Serve this client on the root URL
ss.http.route('/', function(req, res){
  res.serveClient('main');
});

// Code Formatters
ss.client.formatters.add(require('ss-stylus'));

// Use server-side compiled Hogan (Mustache) templates. Others engines available
//ss.client.templateEngine.use(require('ss-hogan'));
ss.client.formatters.add(require('ss-less'));
ss.client.templateEngine.use('angular');

ss.responders.add(require('ss-angular'));

// Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') ss.client.packAssets();

// Start web server
var server = http.Server(ss.http.middleware);
try {
	server.listen(getPortParameter(), "0.0.0.0");
} catch (err) {
	console.error("Error: [%s] Call: [%s]", err.message, err.syscall);
	process.exit(1);
}

// Start SocketStream
ss.start(server);



/*setInterval(function() {
	ss.api.publish.all('newMessage', "test message"); 	
}, 1000);*/

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
