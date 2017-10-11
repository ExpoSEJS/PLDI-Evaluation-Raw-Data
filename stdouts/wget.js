/root/Targets/wget.js
└── wget.js@0.0.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/wget.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0075 took 0.6209s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected character '#' (1:78) on program #!/usr/bin/env node
'use strict';

var url = require('url');
var path = require('path');
var fs = require('fs');
var client = require('http-request');
var cheerio = require('cheerio');
var shell = require('shelljs');

function fname(urlString) {
    var parsed = url.parse(urlString);
    var pathname = parsed.pathname.replace(/\/(index\.html)?$/, '/index.html');
    return parsed.hostname + pathname.split('/').map(encodeURIComponent).join('/') + (parsed.query ? encodeURIComponent('?' + parsed.query) : '');
}

function writeAsset(name, res) {
    shell.mkdir('-p', path.dirname(name));
    fs.writeFileSync(name, res.buffer);
}

// keepalive
function setKeepalive() {
    var http = require('http');
    var https = require('https');

    var keepAliveAgent = new http.Agent({ keepAlive: true });
    http.globalAgent = keepAliveAgent;
    https.globalAgent = keepAliveAgent;
}

function parseRequest(res, options) {
    if (res.headers['content-type'] !== 'text/html') {
        return;
    }

    res.$ = cheerio.load(res.buffer.toString(), {decodeEntities: false});

    if (!options.recursive) {
        return;
    }

    // recursively go through the links
    var hrefs = [];

    // see http://html5doctor.com/microdata/ for the attributes...?
    res.$('a[href], link[href]').each((idx, e) => hrefs.push(e.attribs.href));
    res.$('script[src], img[src], embed[src], iframe[src], audio[src], video[src]').each((idx, e) => hrefs.push(e.attribs.src));

    var base = res.$('html head base[href]').attr('href') || res.url;
    hrefs.forEach(href => {
        var absHref = url.resolve(base, href);

        // strip the href fragment
        absHref = absHref.replace(/\#.*/, '');

        if (options.acceptHref(absHref, href)) {
            options._visited = options._visited || {};
            var entry = options._visited[absHref];
            if (!entry) {
                options._visited[absHref] = true;
                // console.log('href', absHref, fname(absHref));

                options._.push(absHref);
            }
        }
    });
}

function wget(urlString, options) {
    if (!urlString) return;

    console.log('fetch\\', urlString, options._.length);
    var fetchOpts = {
        url: urlString,
        headers: options.headers,

        // stream: true,
        noRedirect: false
    };
    client.get(fetchOpts, function(err, res) {
        let next = _ => {
            console.log('fetch/', res.code);
            wget(options._.shift(), options);
        };

        if (err) {
            res = err;
            console.error(urlString + ':', err);
            next();
            return;
        }

        function onEnd() {
            parseRequest(res, options);
            options.process(res, options);
            next();
        }

        res.url = urlString;

        if (!res.buffer) {
            var content = [];
            res.stream.on('error', function(err) {
                console.error('error:', err);
            });
            res.stream.on('data', chunk => (console.log('data', chunk.length), content.push(chunk)));
            res.stream.on('end', () => {
                res.buffer = Buffer.concat(content);
                onEnd();
            });
        } else {
            onEnd();
        }

    });
}


if (module.parent) {
    // for use as a node.js module
    // node -e 'require("./wget.js")("http://www.yahoo.com", {_: [], acceptHref: _ => _, process: _ => _})'
    module.exports = wget;
    return;
}

// command-line utility use
var argv = require('yargs')
    .usage('Usage: $0 [options] <url>')
    .demand(1)
    .example('$0 http://www.yahoo.com', 'fetch the site content')
    .option('np', {
        alias: 'no-parent',
        describe: `don't ascend to the parent directory`,
        boolean: true,
        default: false
    })
    .option('r', {
        alias: 'recursive',
        describe: `specify recursive download`,
        boolean: true,
        default: false
    })
    .option('P', {
        alias: 'directory-prefix',
        describe: `save files to PREFIX/...`,
        string: true,
        default: ''
    })
    .option('M', {
        alias: 'process-module',
        describe: `javascript module handling the contents`,
        optional: true
    })
    .option('process', {
        describe: `javascript function handling the contents (overriden by -M)`,
        optional: true
    })
    // .alias('H', 'header')
    // .nargs('H', 1)
    // .describe('H', 'Request header')
    .help('h')
    .alias('h', 'help')
    // .epilog('Copyright 2016')
    .argv;

var firstUrl = argv._.shift();

// single origin only
firstUrl = firstUrl.match(/\w+:\/\//) ? firstUrl : 'http://' + firstUrl;
var parsedFirst = url.parse(firstUrl);

argv.acceptHref = href => {
    var parsedHref = url.parse(href);
    return parsedHref.host === parsedFirst.host &&
           parsedHref.protocol === parsedFirst.protocol;
};

if (argv.np) {
    // no-parent hrefs only
    argv.acceptHref = ((acceptHref) => href => {
        return href.startsWith(firstUrl) && acceptHref(href);
    })(argv.acceptHref);
}

function setupProcessOption(argv) {
    try {
        argv.process = eval(argv.process);
    } catch(e) {
        console.error('Error parsing --process arg:', e);
        argv.process = undefined;
    }

    argv.process = argv.process || (res => {
        var name = path.normalize(path.join(argv.P, fname(res.url)));
        writeAsset(name, res);
        console.log('Done', res.url, res.code, '->', fname(res.url));
    });
}

if (argv.M) {
    try {
        argv.process = require(argv.M);
    } catch(e) {
        console.error('Error in using the -M module:', e);
        setupProcessOption(argv)
    }
} else {
    setupProcessOption(argv)
}

argv.headers = {
  "accept-charset" : "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
  "accept-language" : "en-US,en;q=0.8",
  "accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "user-agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
  "accept-encoding" : "gzip,deflate",
};

// if (typeof argv.header === 'string') argv.header = [argv.header];
// argv.header.forEach(h => {
//     var parts = h.split(':');
//     argv.headers[parts.shift()] = parts.join(':');
// })

setKeepalive();
wget(firstUrl, argv);
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
