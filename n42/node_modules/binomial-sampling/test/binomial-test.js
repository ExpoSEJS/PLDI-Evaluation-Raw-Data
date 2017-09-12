var vows = require('vows'),
    assert = require('assert');

var binomial = require('../lib/binomial.js');

vows.describe('binomial test').addBatch({
    'sigmoid function': {
        'get correct answer': {
            topic: binomial(1, 0.0),
            
            'should receive 0.5': function (topic) {
                assert.equal(topic, 0)
            }
        }
    }

}).export(module); // Export the Suite