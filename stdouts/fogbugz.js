/root/Targets/fogbugz.js
└─┬ fogbugz.js@0.0.33 
  ├── async@0.2.10 
  ├── jquery-xml2json@0.0.8 
  ├── q@1.0.1 
  ├─┬ request@2.44.0 
  │ ├── aws-sign2@0.5.0 
  │ ├─┬ bl@0.9.5 
  │ │ └─┬ readable-stream@1.0.34 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── inherits@2.0.3 
  │ │   ├── isarray@0.0.1 
  │ │   └── string_decoder@0.10.31 
  │ ├── caseless@0.6.0 
  │ ├── forever-agent@0.5.2 
  │ ├─┬ form-data@0.1.4 
  │ │ ├── async@0.9.2 
  │ │ ├─┬ combined-stream@0.0.7 
  │ │ │ └── delayed-stream@0.0.5 
  │ │ └── mime@1.2.11 
  │ ├─┬ hawk@1.1.1 
  │ │ ├── boom@0.4.2 
  │ │ ├── cryptiles@0.2.2 
  │ │ ├── hoek@0.9.1 
  │ │ └── sntp@0.2.4 
  │ ├─┬ http-signature@0.10.1 
  │ │ ├── asn1@0.1.11 
  │ │ ├── assert-plus@0.1.5 
  │ │ └── ctype@0.5.3 
  │ ├── json-stringify-safe@5.0.1 
  │ ├── mime-types@1.0.2 
  │ ├── node-uuid@1.4.8 
  │ ├── oauth-sign@0.4.0 
  │ ├── qs@1.2.2 
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.3 
  │ │ └── punycode@1.4.1 
  │ └── tunnel-agent@0.4.3 
  ├── underscore@1.7.0 
  └─┬ xml2js@0.4.19 
    ├── sax@1.2.4 
    └── xmlbuilder@9.0.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/fogbugz.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 64% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","freeze","RegExp","randomBytes","toString","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0446 took 37.6622s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (8:4) on program 'use strict'

var net = require('net')
  , tls = require('tls')
  , http = require('http')
  , https = require('https')
  , events = require('events')
  , assert = require('assert')
  , util = require('util')
  ;

exports.httpOverHttp = httpOverHttp
exports.httpsOverHttp = httpsOverHttp
exports.httpOverHttps = httpOverHttps
exports.httpsOverHttps = httpsOverHttps


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options)
  agent.request = http.request
  return agent
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options)
  agent.request = http.request
  agent.createSocket = createSecureSocket
  agent.defaultPort = 443
  return agent
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options)
  agent.request = https.request
  return agent
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options)
  agent.request = https.request
  agent.createSocket = createSecureSocket
  agent.defaultPort = 443
  return agent
}


function TunnelingAgent(options) {
  var self = this
  self.options = options || {}
  self.proxyOptions = self.options.proxy || {}
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets
  self.requests = []
  self.sockets = []

  self.on('free', function onFree(socket, host, port) {
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i]
      if (pending.host === host && pending.port === port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1)
        pending.request.onSocket(socket)
        return
      }
    }
    socket.destroy()
    self.removeSocket(socket)
  })
}
util.inherits(TunnelingAgent, events.EventEmitter)

TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
  var self = this

   // Legacy API: addRequest(req, host, port, path)
  if (typeof options === 'string') {
    options = {
      host: options,
      port: arguments[2],
      path: arguments[3]
    };
  }

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push({host: options.host, port: options.port, request: req})
    return
  }

  // If we are under maxSockets create a new one.
  self.createConnection({host: options.host, port: options.port, request: req})
}

TunnelingAgent.prototype.createConnection = function createConnection(pending) {
  var self = this

  self.createSocket(pending, function(socket) {
    socket.on('free', onFree)
    socket.on('close', onCloseOrRemove)
    socket.on('agentRemove', onCloseOrRemove)
    pending.request.onSocket(socket)

    function onFree() {
      self.emit('free', socket, pending.host, pending.port)
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket)
      socket.removeListener('free', onFree)
      socket.removeListener('close', onCloseOrRemove)
      socket.removeListener('agentRemove', onCloseOrRemove)
    }
  })
}

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this
  var placeholder = {}
  self.sockets.push(placeholder)

  var connectOptions = mergeOptions({}, self.proxyOptions, 
    { method: 'CONNECT'
    , path: options.host + ':' + options.port
    , agent: false
    }
  )
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {}
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64')
  }

  debug('making CONNECT request')
  var connectReq = self.request(connectOptions)
  connectReq.useChunkedEncodingByDefault = false // for v0.6
  connectReq.once('response', onResponse) // for v0.6
  connectReq.once('upgrade', onUpgrade)   // for v0.6
  connectReq.once('connect', onConnect)   // for v0.7 or later
  connectReq.once('error', onError)
  connectReq.end()

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head)
    })
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners()
    socket.removeAllListeners()

    if (res.statusCode === 200) {
      assert.equal(head.length, 0)
      debug('tunneling connection has established')
      self.sockets[self.sockets.indexOf(placeholder)] = socket
      cb(socket)
    } else {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode)
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode)
      error.code = 'ECONNRESET'
      options.request.emit('error', error)
      self.removeSocket(placeholder)
    }
  }

  function onError(cause) {
    connectReq.removeAllListeners()

    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack)
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message)
    error.code = 'ECONNRESET'
    options.request.emit('error', error)
    self.removeSocket(placeholder)
  }
}

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) return
  
  this.sockets.splice(pos, 1)

  var pending = this.requests.shift()
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createConnection(pending)
  }
}

function createSecureSocket(options, cb) {
  var self = this
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, mergeOptions({}, self.options, 
      { servername: options.host
      , socket: socket
      }
    ))
    self.sockets[self.sockets.indexOf(socket)] = secureSocket
    cb(secureSocket)
  })
}


function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i]
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides)
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j]
        if (overrides[k] !== undefined) {
          target[k] = overrides[k]
        }
      }
    }
  }
  return target
}


var debug
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments)
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0]
    } else {
      args.unshift('TUNNEL:')
    }
    console.error.apply(console, args)
  }
} else {
  debug = function() {}
}
exports.debug = debug // for test
 at SyntaxError: Unexpected token (8:4)
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
*- File /root/Targets/fogbugz.js/node_modules/fogbugz.js/fogbugz.js. Coverage (Term): 2% Coverage (LOC): 3%
*- File /root/Targets/fogbugz.js/node_modules/request/index.js. Coverage (Term): 16% Coverage (LOC): 28%
*- File /root/Targets/fogbugz.js/node_modules/request/lib/cookies.js. Coverage (Term): 38% Coverage (LOC): 29%
*- File /root/Targets/fogbugz.js/node_modules/request/lib/optional.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/cookie.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/pubsuffix.js. Coverage (Term): 98% Coverage (LOC): 99%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/store.js. Coverage (Term): 41% Coverage (LOC): 74%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/memstore.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/permuteDomain.js. Coverage (Term): 25% Coverage (LOC): 27%
*- File /root/Targets/fogbugz.js/node_modules/tough-cookie/lib/pathMatch.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/fogbugz.js/node_modules/request/lib/copy.js. Coverage (Term): 33% Coverage (LOC): 44%
*- File /root/Targets/fogbugz.js/node_modules/request/lib/helpers.js. Coverage (Term): 26% Coverage (LOC): 42%
*- File /root/Targets/fogbugz.js/node_modules/request/request.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/fogbugz.js/node_modules/qs/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/qs/lib/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/qs/lib/stringify.js. Coverage (Term): 15% Coverage (LOC): 22%
*- File /root/Targets/fogbugz.js/node_modules/qs/lib/parse.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/fogbugz.js/node_modules/qs/lib/utils.js. Coverage (Term): 8% Coverage (LOC): 15%
*- File /root/Targets/fogbugz.js/node_modules/bl/bl.js. Coverage (Term): 15% Coverage (LOC): 32%
*- File /root/Targets/fogbugz.js/node_modules/readable-stream/duplex.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/fogbugz.js/node_modules/core-util-is/lib/util.js. Coverage (Term): 33% Coverage (LOC): 64%
*- File /root/Targets/fogbugz.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/fogbugz.js/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/fogbugz.js/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/fogbugz.js/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 9% Coverage (LOC): 17%
*- File /root/Targets/fogbugz.js/node_modules/oauth-sign/index.js. Coverage (Term): 14% Coverage (LOC): 22%
*- File /root/Targets/fogbugz.js/node_modules/hawk/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/hawk/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/boom/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/boom/lib/index.js. Coverage (Term): 16% Coverage (LOC): 23%
*- File /root/Targets/fogbugz.js/node_modules/hoek/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/hoek/lib/index.js. Coverage (Term): 8% Coverage (LOC): 21%
*- File /root/Targets/fogbugz.js/node_modules/hoek/lib/escape.js. Coverage (Term): 34% Coverage (LOC): 46%
*- File /root/Targets/fogbugz.js/node_modules/sntp/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/sntp/lib/index.js. Coverage (Term): 6% Coverage (LOC): 13%
*- File /root/Targets/fogbugz.js/node_modules/hawk/lib/server.js. Coverage (Term): 5% Coverage (LOC): 8%
*- File /root/Targets/fogbugz.js/node_modules/cryptiles/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/fogbugz.js/node_modules/cryptiles/lib/index.js. Coverage (Term): 18% Coverage (LOC): 30%
*- File /root/Targets/fogbugz.js/node_modules/hawk/lib/crypto.js. Coverage (Term): 20% Coverage (LOC): 45%
*- File /root/Targets/fogbugz.js/node_modules/hawk/lib/utils.js. Coverage (Term): 17% Coverage (LOC): 23%
*- File /root/Targets/fogbugz.js/node_modules/hawk/lib/client.js. Coverage (Term): 7% Coverage (LOC): 10%
*- File /root/Targets/fogbugz.js/node_modules/aws-sign2/index.js. Coverage (Term): 26% Coverage (LOC): 51%
*- File /root/Targets/fogbugz.js/node_modules/http-signature/lib/index.js. Coverage (Term): 32% Coverage (LOC): 24%
*- File /root/Targets/fogbugz.js/node_modules/node-uuid/uuid.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/fogbugz.js/node_modules/mime-types/lib/index.js. Coverage (Term): 43% Coverage (LOC): 48%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
