/root/Targets/sqs.js
└─┬ sqs.js@0.10.2 
  └─┬ aws-sdk@2.124.0 
    ├─┬ buffer@4.9.1 
    │ ├── base64-js@1.2.1 
    │ ├── ieee754@1.1.8 
    │ └── isarray@1.0.0 
    ├── crypto-browserify@1.0.9 
    ├── events@1.1.1 
    ├── jmespath@0.15.0 
    ├── querystring@0.2.0 
    ├── sax@1.2.1 
    ├─┬ url@0.10.3 
    │ └── punycode@1.3.2 
    ├── uuid@3.0.1 
    ├── xml2js@0.4.17 
    └─┬ xmlbuilder@4.2.1 
      └── lodash@4.17.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/sqs.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0956 took 7.4552s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (3:4) on program 'use strict';

var assert = require('assert');
var utils = require('./utils.js');
var Emitter = require('events').EventEmitter;

// config object options
// sqs
// region
// accessKeyId
// secretAccessKey
// version (default to 'latest')
// queueUrl
// visibility
// pollInterval
// debug
// parseJSON

function Reader(config) {
  this.sqs = config.sqs;
  if (!config.sqs) {
    this.sqs = utils.buildSQS(config);
  }
  assert(config.queueUrl, 'queueUrl required');

  this.visibility = config.visibility || config.VisibilityTimeout;
  this.pollInterval = config.pollInterval || 1000;
  this.queueUrl = config.queueUrl || config.QueueUrl;
  this.parseJSON = config.parseJSON;
  this.pollingSize = config.pollingSize || config.MaxNumberOfMessages || 10;
  this.attributes = config.attributes;
  if (config.startPolling) this.poll();
}

Reader.prototype.__proto__ = Emitter.prototype;

Reader.prototype.buildMessage = function(msg) {
  var self = this;

  if (this.parseJSON) {
    try {
      msg.Body = JSON.parse(msg.Body);
    } catch(e) {}
  }
  msg.body = msg.Body;
  msg.ack = function(cb) {
    self.sqs.deleteMessage({
      QueueUrl: self.queueUrl, ReceiptHandle: this.ReceiptHandle
    }, function(err, data) {
      if (err) self.emit('error', err);
      if (msg.expirationTimeout) clearTimeout(msg.expirationTimeout);
      if (cb) return cb(err, data);
    });
  };
  msg.extendTimeout = function(amount, cb) {
    self.sqs.changeMessageVisibility({
      QueueUrl: self.queueUrl, ReceiptHandle: this.ReceiptHandle, VisibilityTimeout: amount
    }, function(err, data) {
      if (err) self.emit('error', err);
      else {
        msg.expirationTimeout = setTimeout(function() {
          self.emit('expiring', msg);
        }, (amount * 1000) - 60000);
      }

      if (cb) return cb(err, data);
    });
  };
  if (self.visibility) {
    msg.expirationTimeout = setTimeout(function() {
      self.emit('expiring', msg);
    }, (self.visibility * 1000) - 60000);
  }
  return msg;
};

Reader.prototype.receiveMessages = function() {
  var self = this;

  var opts = {
    QueueUrl: self.queueUrl,
    MaxNumberOfMessages: self.pollingSize
  };

  if (self.visibility) opts.VisibilityTimeout = self.visibility;
  if (self.attributes) opts.AttributeNames = self.attributes;

  self.sqs.receiveMessage(opts, function(err, data) {
    if (err) return self.emit('error', err);
    if (data && data.Messages) {
      var msgs = data.Messages.map(self.buildMessage.bind(self));
      msgs.forEach(function(msg) {
        self.emit('message', msg);
      });
    }
  });
};

Reader.prototype.poll = function() {
  var self = this;
  self.receiveMessages();
  self.interval = setInterval(self.receiveMessages.bind(self), self.pollInterval);
};

Reader.prototype.purge = function(cb) {
  var self = this;
  var opts = {
    QueueUrl: this.queueUrl
  };
  self.sqs.purgeQueue(opts, function(err, data) {
    if (err) self.emit('error', err);
    if (cb) return cb(err, data);
  });
};

Reader.prototype.close = function() {
  clearInterval(this.interval);
};

module.exports = Reader;
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
*- File /root/Targets/sqs.js/node_modules/sqs.js/index.js. Coverage (Term): 34% Coverage (LOC): 45%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
