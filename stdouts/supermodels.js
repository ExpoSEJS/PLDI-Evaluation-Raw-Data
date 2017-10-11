/root/Targets/supermodels.js
└── supermodels.js@0.2.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/supermodels.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 24% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0536 took 3.4453s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (79:13) on program 'use strict'

var util = require('./util')
var createModelPrototype = require('./proto')
var Wrapper = require('./wrapper')

function createModelDescriptors (def, parent) {
  var __ = {}

  var desc = {
    __: {
      value: __
    },
    __def: {
      value: def
    },
    __parent: {
      value: parent,
      writable: true
    },
    __callbacks: {
      value: {},
      writable: true
    }
  }

  return desc
}

function defineProperties (model) {
  var defs = model.__def.defs
  for (var key in defs) {
    defineProperty(model, key, defs[key])
  }
}

function defineProperty (model, key, def) {
  var desc = {
    get: function () {
      return this.__get(key)
    },
    enumerable: def.enumerable,
    configurable: def.configurable
  }

  if (def.writable) {
    desc.set = function (value) {
      this.__setNotifyChange(key, value)
    }
  }

  Object.defineProperty(model, key, desc)

  // Silently initialize the property wrapper
  model.__[key] = def.create(model)
}

function createWrapperFactory (def) {
  var wrapper, defaultValue, assert

  if (def.isSimple) {
    wrapper = new Wrapper(def.value, def.writable, def.validators, def.getter, def.setter, def.cast, null)
  } else if (def.isReference) {
    // Hold a reference to the
    // refererenced types' definition
    var refDef = def.type.def

    if (refDef.isSimple) {
      // If the referenced type is itself simple,
      // we can set just return a wrapper and
      // the property will get initialized.
      wrapper = new Wrapper(refDef.value, refDef.writable, refDef.validators, def.getter, def.setter, refDef.cast, null)
    } else {
      // If we're not dealing with a simple reference model
      // we need to define an assertion that the instance
      // being set is of the correct type. We do this be
      // comparing the defs.

      assert = function (value) {
        // compare the defintions of the value instance
        // being passed and the def property attached
        // to the type SupermodelConstructor. Allow the
        // value to be undefined or null also.
        var isCorrectType = false

        if (util.isNullOrUndefined(value)) {
          isCorrectType = true
        } else {
          isCorrectType = refDef === value.__def
        }

        if (!isCorrectType) {
          throw new Error('Value should be an instance of the referenced model, null or undefined')
        }
      }

      wrapper = new Wrapper(def.value, def.writable, def.validators, def.getter, def.setter, null, assert)
    }
  } else if (def.isArray) {
    defaultValue = function (parent) {
      // for Arrays, we create a new Array and each
      // time, mix the model properties into it
      var model = createModelPrototype(def)
      Object.defineProperties(model, createModelDescriptors(def, parent))
      defineProperties(model)
      return model
    }

    assert = function (value) {
      // todo: further array type validation
      if (!util.isArray(value)) {
        throw new Error('Value should be an array')
      }
    }

    wrapper = new Wrapper(defaultValue, def.writable, def.validators, def.getter, def.setter, null, assert)
  } else {
    // for Objects, we can create and reuse
    // a prototype object. We then need to only
    // define the defs and the 'instance' properties
    // e.g. __, parent etc.
    var proto = createModelPrototype(def)

    defaultValue = function (parent) {
      var model = Object.create(proto, createModelDescriptors(def, parent))
      defineProperties(model)
      return model
    }

    assert = function (value) {
      if (!proto.isPrototypeOf(value)) {
        throw new Error('Invalid prototype')
      }
    }

    wrapper = new Wrapper(defaultValue, def.writable, def.validators, def.getter, def.setter, null, assert)
  }

  var factory = function (parent) {
    var wrap = Object.create(wrapper)
    // if (!wrap.isInitialized) {
    wrap._initialize(parent)
    // }
    return wrap
  }

  // expose the wrapper, this is used
  // for validating array items later
  factory.wrapper = wrapper

  return factory
}

module.exports = createWrapperFactory
 at SyntaxError: Unexpected token (79:13)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1822:12)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExpression (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1573:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/supermodels.js. Coverage (Term): 28% Coverage (LOC): 36%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/prop.js. Coverage (Term): 7% Coverage (LOC): 8%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/merge.js. Coverage (Term): 10% Coverage (LOC): 14%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/def.js. Coverage (Term): 7% Coverage (LOC): 8%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/util.js. Coverage (Term): 10% Coverage (LOC): 27%
*- File /root/Targets/supermodels.js/node_modules/supermodels.js/lib/supermodel.js. Coverage (Term): 95% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
