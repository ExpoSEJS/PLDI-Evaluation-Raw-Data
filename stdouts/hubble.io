/root/Targets/hubble.io
└─┬ hubble.io@0.1.20 
  ├── async@0.1.22 
  ├── bubble@0.1.0 
  ├── director@1.1.10 
  ├── flatware-cookie-parser@0.1.0 
  ├── flatware-session@0.1.1 
  ├── github-flavored-markdown@1.0.1 
  ├── highlight@0.2.4 
  ├─┬ nano@3.3.8 
  │ ├── errs@0.2.4 
  │ ├─┬ follow@0.8.0 
  │ │ └── request@2.2.9 
  │ ├─┬ request@2.16.6 
  │ │ ├── aws-sign@0.2.0 
  │ │ ├── cookie-jar@0.2.0 
  │ │ ├── forever-agent@0.2.0 
  │ │ ├─┬ form-data@0.0.10 
  │ │ │ ├── async@0.2.10 
  │ │ │ └─┬ combined-stream@0.0.7 
  │ │ │   └── delayed-stream@0.0.5 
  │ │ ├─┬ hawk@0.10.2 
  │ │ │ ├── boom@0.3.8 
  │ │ │ ├── cryptiles@0.1.3 
  │ │ │ ├── hoek@0.7.6 
  │ │ │ └── sntp@0.1.4 
  │ │ ├── json-stringify-safe@3.0.0 
  │ │ ├── node-uuid@1.4.8 
  │ │ ├── oauth-sign@0.2.0 
  │ │ └── tunnel-agent@0.2.0 
  │ └── underscore@1.4.4 
  ├─┬ node-static@0.6.9 
  │ ├── colors@1.1.2 
  │ └── mime@1.2.11 
  ├─┬ optimist@0.3.4 
  │ └── wordwrap@0.0.3 
  ├── plates@0.4.8 
  ├── redis@0.8.6 
  ├─┬ request@2.11.4 
  │ ├─┬ form-data@0.0.3 
  │ │ ├── async@0.1.9 
  │ │ └─┬ combined-stream@0.0.3 
  │ │   └── delayed-stream@0.0.5 
  │ └── mime@1.2.7 
  ├─┬ sendgrid-web@0.0.5 
  │ └─┬ request@2.27.0 
  │   ├── aws-sign@0.3.0 
  │   ├── cookie-jar@0.3.0 
  │   ├── forever-agent@0.5.2 
  │   ├─┬ form-data@0.1.4 
  │   │ └── async@0.9.2 
  │   ├─┬ hawk@1.0.0 
  │   │ ├── boom@0.4.2 
  │   │ ├── cryptiles@0.2.2 
  │   │ ├── hoek@0.9.1 
  │   │ └── sntp@0.2.4 
  │   ├─┬ http-signature@0.10.1 
  │   │ ├── asn1@0.1.11 
  │   │ ├── assert-plus@0.1.5 
  │   │ └── ctype@0.5.3 
  │   ├── json-stringify-safe@5.0.1 
  │   ├── oauth-sign@0.3.0 
  │   ├── qs@0.6.6 
  │   └── tunnel-agent@0.3.0 
  ├─┬ tar@0.1.20 
  │ ├── block-stream@0.0.9 
  │ ├─┬ fstream@0.1.31 
  │ │ ├─┬ graceful-fs@3.0.11 
  │ │ │ └── natives@1.1.0 
  │ │ ├─┬ mkdirp@0.5.1 
  │ │ │ └── minimist@0.0.8 
  │ │ └─┬ rimraf@2.6.2 
  │ │   └─┬ glob@7.1.2 
  │ │     ├── fs.realpath@1.0.0 
  │ │     ├─┬ inflight@1.0.6 
  │ │     │ └── wrappy@1.0.2 
  │ │     ├─┬ minimatch@3.0.4 
  │ │     │ └─┬ brace-expansion@1.1.8 
  │ │     │   ├── balanced-match@1.0.0 
  │ │     │   └── concat-map@0.0.1 
  │ │     ├── once@1.4.0 
  │ │     └── path-is-absolute@1.0.1 
  │ └── inherits@2.0.3 
  ├── underscore@1.3.3 
  └─┬ union@0.3.8 
    ├── pkginfo@0.2.3 
    └── qs@0.5.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hubble.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 27% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","isArray","parse"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0614 took 21.534s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Invalid number (262:22) on program var fs     = require('fs')
  , events = require('events')
  , buffer = require('buffer')
  , http   = require('http')
  , url    = require('url')
  , path   = require('path')
  , mime   = require('mime')
  , util   = require('./node-static/util');

// Current version
var version = [0, 6, 9];

// In-memory file store
var store      = {};
var indexStore = {};

Server = function (root, options) {
    if (root && (typeof(root) === 'object')) { options = root; root = null }

    this.root    = path.resolve(root || '.');
    this.options = options || {};
    this.cache   = 3600;

    this.defaultHeaders  = {};
    this.options.headers = this.options.headers || {};

    if ('cache' in this.options) {
        if (typeof(this.options.cache) === 'number') {
            this.cache = this.options.cache;
        } else if (! this.options.cache) {
            this.cache = false;
        }
    }

    if ('serverInfo' in this.options) {
        this.serverInfo = this.options.serverInfo.toString();
    } else {
        this.serverInfo = 'node-static/' + version.join('.');
    }

    this.defaultHeaders['server'] = this.serverInfo;

    if (this.cache !== false) {
        this.defaultHeaders['cache-control'] = 'max-age=' + this.cache;
    }

    for (var k in this.defaultHeaders) {
        this.options.headers[k] = this.options.headers[k] ||
                                  this.defaultHeaders[k];
    }
};

Server.prototype.serveDir = function (pathname, req, res, finish) {
    var htmlIndex = path.join(pathname, 'index.html'),
        that = this;

    fs.stat(htmlIndex, function (e, stat) {
        if (!e) {
            that.respond(null, 200, {}, [htmlIndex], stat, req, res, finish);
        } else {
            if (pathname in indexStore) {
                streamFiles(indexStore[pathname].files);
            } else {
                // Stream a directory of files as a single file.
                fs.readFile(path.join(pathname, 'index.json'), function (e, contents) {
                    if (e) { return finish(404, {}) }
                    var index = JSON.parse(contents);
                    indexStore[pathname] = index;
                    streamFiles(index.files);
                });
            }
        }
    });
    function streamFiles(files) {
        util.mstat(pathname, files, function (e, stat) {
            if (e) { return finish(404, {}) }
            that.respond(pathname, 200, {}, files, stat, req, res, finish);
        });
    }
};

Server.prototype.serveFile = function (pathname, status, headers, req, res) {
    var that = this;
    var promise = new(events.EventEmitter);

    pathname = this.resolve(pathname);

    fs.stat(pathname, function (e, stat) {
        if (e) {
            return promise.emit('error', e);
        }
        that.respond(null, status, headers, [pathname], stat, req, res, function (status, headers) {
            that.finish(status, headers, req, res, promise);
        });
    });
    return promise;
};

Server.prototype.finish = function (status, headers, req, res, promise, callback) {
    var result = {
        status:  status,
        headers: headers,
        message: http.STATUS_CODES[status]
    };

    headers['server'] = this.serverInfo;

    if (!status || status >= 400) {
        if (callback) {
            callback(result);
        } else {
            if (promise.listeners('error').length > 0) {
                promise.emit('error', result);
            }
            else {
              res.writeHead(status, headers);
              res.end();
            }
        }
    } else {
        // Don't end the request here, if we're streaming;
        // it's taken care of in `prototype.stream`.
        if (status !== 200 || req.method !== 'GET') {
            res.writeHead(status, headers);
            res.end();
        }
        callback && callback(null, result);
        promise.emit('success', result);
    }
};

Server.prototype.servePath = function (pathname, status, headers, req, res, finish) {
    var that = this,
        promise = new(events.EventEmitter);

    pathname = this.resolve(pathname);

    // Only allow GET and HEAD requests
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        finish(405, { 'Allow': 'GET, HEAD' });
        return promise;
    }

    // Make sure we're not trying to access a
    // file outside of the root.
    if (pathname.indexOf(that.root) === 0) {
        fs.stat(pathname, function (e, stat) {
            if (e) {
                finish(404, {});
            } else if (stat.isFile()) {      // Stream a single file.
                that.respond(null, status, headers, [pathname], stat, req, res, finish);
            } else if (stat.isDirectory()) { // Stream a directory of files.
                that.serveDir(pathname, req, res, finish);
            } else {
                finish(400, {});
            }
        });
    } else {
        // Forbidden
        finish(403, {});
    }
    return promise;
};

Server.prototype.resolve = function (pathname) {
    return path.resolve(path.join(this.root, pathname));
};

Server.prototype.serve = function (req, res, callback) {
    var that    = this,
        promise = new(events.EventEmitter),
        pathname;

    var finish = function (status, headers) {
        that.finish(status, headers, req, res, promise, callback);
    };

    try {
        pathname = decodeURI(url.parse(req.url).pathname);
    }
    catch(e) {
        return process.nextTick(function() {
            return finish(400, {});
        });
    }

    process.nextTick(function () {
        that.servePath(pathname, 200, {}, req, res, finish).on('success', function (result) {
            promise.emit('success', result);
        }).on('error', function (err) {
            promise.emit('error');
        });
    });
    if (! callback) { return promise }
};

Server.prototype.respond = function (pathname, status, _headers, files, stat, req, res, finish) {
    var mtime           = Date.parse(stat.mtime),
        key             = pathname || files[0],
        headers         = {},
        clientETag      = req.headers['if-none-match'],
        clientMTime     = Date.parse(req.headers['if-modified-since']);

    // Copy default headers
    for (var k in this.options.headers) {  headers[k] = this.options.headers[k] }

    headers['etag']          = JSON.stringify([stat.ino, stat.size, mtime].join('-'));
    headers['date']          = new(Date)().toUTCString();
    headers['last-modified'] = new(Date)(stat.mtime).toUTCString();

    // Conditional GET
    // If the "If-Modified-Since" or "If-None-Match" headers
    // match the conditions, send a 304 Not Modified.
    if ((clientMTime  || clientETag) &&
        (!clientETag  || clientETag === headers['etag']) &&
        (!clientMTime || clientMTime >= mtime)) {
        finish(304, headers);
    } else {
        headers['content-length'] = stat.size;
        headers['content-type']   = mime.lookup(files[0]);
                                   'application/octet-stream';

        for (var k in _headers) { headers[k] = _headers[k] }

        res.writeHead(status, headers);

        if (req.method === 'HEAD') {
            finish(200, headers);
            return;
        }

        // If the file was cached and it's not older
        // than what's on disk, serve the cached version.
        if (this.cache && (key in store) &&
            store[key].stat.mtime >= stat.mtime) {
            res.end(store[key].buffer);
            finish(status, headers);
        } else {
            this.stream(pathname, files, new(buffer.Buffer)(stat.size), res, function (e, buffer) {
                if (e) { return finish(500, {}) }
                store[key] = {
                    stat:      stat,
                    buffer:    buffer,
                    timestamp: Date.now()
                };
                finish(status, headers);
            });
        }
    }
};

Server.prototype.stream = function (pathname, files, buffer, res, callback) {
    (function streamFile(files, offset) {
        var file = files.shift();

        if (file) {
            file = file[0] === '/' ? file : path.join(pathname || '.', file);

            // Stream the file to the client
            fs.createReadStream(file, {
                flags: 'r',
                mode: 0666
            }).on('data', function (chunk) {
                chunk.copy(buffer, offset);
                offset += chunk.length;
            }).on('close', function () {
                streamFile(files, offset);
            }).on('error', function (err) {
                callback(err);
                console.error(err);
            }).pipe(res, { end: false });
        } else {
            res.end();
            callback(null, buffer, offset);
        }
    })(files.slice(0), 0);
};

// Exports
exports.Server       = Server;
exports.version      = version;
exports.mime         = mime;
exports.store        = store;
exports.indexStore   = indexStore;




 at SyntaxError: Invalid number (262:22)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.readNumber (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2896:52)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2720:19)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp.eat (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:536:12)
    at Parser.pp$3.parsePropertyValue (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1997:14)
    at Parser.pp$3.parseObj (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1989:14)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/hubble.io/node_modules/hubble.io/index.js. Coverage (Term): 17% Coverage (LOC): 19%
*- File /root/Targets/hubble.io/node_modules/hubble.io/lib/options.js. Coverage (Term): 34% Coverage (LOC): 64%
*- File /root/Targets/hubble.io/node_modules/hubble.io/server/index.js. Coverage (Term): 9% Coverage (LOC): 8%
*- File /root/Targets/hubble.io/node_modules/director/lib/director.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/hubble.io/node_modules/director/lib/director/router.js. Coverage (Term): 4% Coverage (LOC): 8%
*- File /root/Targets/hubble.io/node_modules/director/lib/director/http/index.js. Coverage (Term): 17% Coverage (LOC): 18%
*- File /root/Targets/hubble.io/node_modules/director/lib/director/http/responses.js. Coverage (Term): 34% Coverage (LOC): 40%
*- File /root/Targets/hubble.io/node_modules/director/lib/director/http/methods.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/hubble.io/node_modules/director/lib/director/cli.js. Coverage (Term): 27% Coverage (LOC): 27%
*- File /root/Targets/hubble.io/node_modules/union/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/hubble.io/node_modules/pkginfo/lib/pkginfo.js. Coverage (Term): 85% Coverage (LOC): 91%
*- File /root/Targets/hubble.io/node_modules/union/lib/buffered-stream.js. Coverage (Term): 26% Coverage (LOC): 29%
*- File /root/Targets/hubble.io/node_modules/union/lib/http-stream.js. Coverage (Term): 35% Coverage (LOC): 32%
*- File /root/Targets/hubble.io/node_modules/qs/index.js. Coverage (Term): 6% Coverage (LOC): 13%
*- File /root/Targets/hubble.io/node_modules/union/lib/response-stream.js. Coverage (Term): 16% Coverage (LOC): 24%
*- File /root/Targets/hubble.io/node_modules/union/lib/routing-stream.js. Coverage (Term): 17% Coverage (LOC): 19%
*- File /root/Targets/hubble.io/node_modules/union/lib/request-stream.js. Coverage (Term): 36% Coverage (LOC): 41%
*- File /root/Targets/hubble.io/node_modules/union/lib/core.js. Coverage (Term): 17% Coverage (LOC): 13%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
