/root/Targets/npmtop.com
└─┬ npmtop.com@0.0.1 
  ├─┬ broomstick@0.0.2 
  │ ├── colors@1.1.2 
  │ └── mime@2.0.3 
  ├── director@1.2.8 
  └─┬ request@2.83.0 
    ├── aws-sign2@0.7.0 
    ├── aws4@1.6.0 
    ├── caseless@0.12.0 
    ├─┬ combined-stream@1.0.5 
    │ └── delayed-stream@1.0.0 
    ├── extend@3.0.1 
    ├── forever-agent@0.6.1 
    ├─┬ form-data@2.3.1 
    │ └── asynckit@0.4.0 
    ├─┬ har-validator@5.0.3 
    │ ├─┬ ajv@5.2.3 
    │ │ ├── co@4.6.0 
    │ │ ├── fast-deep-equal@1.0.0 
    │ │ ├── json-schema-traverse@0.3.1 
    │ │ └─┬ json-stable-stringify@1.0.1 
    │ │   └── jsonify@0.0.0 
    │ └── har-schema@2.0.0 
    ├─┬ hawk@6.0.2 
    │ ├── boom@4.3.1 
    │ ├─┬ cryptiles@3.1.2 
    │ │ └── boom@5.2.0 
    │ ├── hoek@4.2.0 
    │ └── sntp@2.0.2 
    ├─┬ http-signature@1.2.0 
    │ ├── assert-plus@1.0.0 
    │ ├─┬ jsprim@1.4.1 
    │ │ ├── extsprintf@1.3.0 
    │ │ ├── json-schema@0.2.3 
    │ │ └─┬ verror@1.10.0 
    │ │   └── core-util-is@1.0.2 
    │ └─┬ sshpk@1.13.1 
    │   ├── asn1@0.2.3 
    │   ├── bcrypt-pbkdf@1.0.1 
    │   ├── dashdash@1.14.1 
    │   ├── ecc-jsbn@0.1.1 
    │   ├── getpass@0.1.7 
    │   ├── jsbn@0.1.1 
    │   └── tweetnacl@0.14.5 
    ├── is-typedarray@1.0.0 
    ├── isstream@0.1.2 
    ├── json-stringify-safe@5.0.1 
    ├─┬ mime-types@2.1.17 
    │ └── mime-db@1.30.0 
    ├── oauth-sign@0.8.2 
    ├── performance-now@2.1.0 
    ├── qs@6.5.1 
    ├── safe-buffer@5.1.1 
    ├── stringstream@0.0.5 
    ├─┬ tough-cookie@2.3.3 
    │ └── punycode@1.4.1 
    ├── tunnel-agent@0.6.0 
    └── uuid@3.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/npmtop.com/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0525 took 5.1578s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: The keyword 'static' is reserved (12:4) on program /*
 * npmtop.com
 * <cam@onswipe.com>
 */

var http = require('http'),
    fs = require('fs');
    request = require('request'),
    director = require('director'),
    broomstick = require('broomstick'),
    router = new director.http.Router(),
    static = new broomstick(),
    authors = '';

function cache () {
  request('http://search.npmjs.org/_view/author?group=true', function (err, res, body) {
    authors = body;
  });
}

cache();
setInterval(cache, 30000); // every 5 minutes

router.get('/authors', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end(authors);
});
router.get('*', static);
router.get('/', static);

var server = http.createServer(function (req, res) {
  router.dispatch(req, res);
});

server.listen(8080);
 at SyntaxError: The keyword 'static' is reserved (12:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$3.parseIdent (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2182:14)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1774:21)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExpression (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1577:63)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
