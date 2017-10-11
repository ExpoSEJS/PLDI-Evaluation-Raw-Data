/root/Targets/dma.js
└── dma.js@0.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/dma.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.05 took 3.3933s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (182:11) on program 
var DEBUG = true;

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

var apis = {
  parse_csv: require('./apis/parse_csv'),
  validate: require('./apis/validate'),
  scalarize_m: require('./apis/scalarize_m'),
  scalarize_v: require('./apis/scalarize_v'),
  normalize_m: require('./apis/normalize_m'),
  normalize_w: require('./apis/normalize_w'),
  obtains_v_form_m: require('./apis/obtain_v_from_m'),
};

var utils = {
  entropy: require('./utils/entropy')
}

/**
 * this.data
 * 
 * {
 *   current: {
 *     'M': …,
 *     'W': …,
 *     'V': …
 *   },
 *   input: {
 *     'D': D,
 *     'A': A,
 *     'M': M,
 *     'V': V,
 *     'S': S,
 *     'W': W,
 *     'Q': Q,
 *     'P': P
 *   },
 *   normalized: {
 *     'M': …,
 *     'W': …,
 *   },
 *   scalarized: {
 *     'M': …
 *   }
 * }
 *
 */

/**
 * Expose DMA constructor
 * 
 * @constructor
 */

var DMA = module.exports = function () {
  EventEmitter.call(this);

  this.data = {
    current: {},
    input: {},
    normalized: {},
    scalarized: {}
  };
  this.errors = [];
  this.warnings = [];

  this.is_validated = false;
  this.is_scalarized = false;
  this.is_normalized = false;

  DEBUG && new Logger(this);
};

inherits(DMA, EventEmitter);

/**
 * DMA.methods
 * Popolated by DMA.use.
 *
 */

DMA.methods = {};

/**
 * use
 * Add a multi-criteria method to the ones can actually use.
 * 
 * @param {Function} method
 *   method Function must have three properties:
 *     - name: the unique name of this methods
 *     - min_input: define minimal input requirements for this method
 *     - input: define input requirements for this method
 *     - charts: define output charts for this method
 */ 

DMA.use = function (method) {
  var name = method.name;
  if (!name || name === '') {
    throw new Error('Can\'t use method: name missing or invalid'); 
    return;
  }

  if ((!method.min_input && !method.input) || 
       (!method.min_input.length === 0 && !method.input === 0)) {
    throw new Error('Can\'t use `' + name + '` method: invalid definition of input'); 
    return;
  }

  if (!method.charts || method.charts.length === 0) {
    throw new Error('Can\'t use `' + name + '` this method: invalid definition of charts'); 
    return;
  }

  DMA.methods[name] = method;
};

/**
 * Add default methods
 */

DMA.use(require('./methods/ahp'));
DMA.use(require('./methods/conjuntive'));
DMA.use(require('./methods/disjuntive'));
DMA.use(require('./methods/lessicographic'));
DMA.use(require('./methods/maxmax'));
DMA.use(require('./methods/maxmin'));
DMA.use(require('./methods/pareto'));
DMA.use(require('./methods/saw'));
DMA.use(require('./methods/topsis'));
// DMA.use(require('./methods/electre.js'));


/** 
 * _use_api
 * Utility function to use apis.
 * Conformed apis must return an object of this type:
 * {
 *   result: <result of api computation>
 *   warnings: <warnings arose during api computation>
 *   errors: <errors arose during api computation>
 * }
 *
 * @api private
 */

DMA.prototype._use_api = function (api, parameters /* ... */) {
  var args = Array.prototype.slice.call(arguments, 0); 
  var api = args.shift();
  var result = api.call(null, args);
  var warning = result.warning;
  var error = result.error;

  if (!result.ok) {
    if (warning) {
      this.warnings.push(warning);
      this.emit('warning', warning);
    }

    if (error) {
      this.errors.push(error); 
      this.emit('error', error); 
    }  
  }

  return result.result || result.ok;
};

/** 
 * _rise_error
 * Perform all the stuff needed to rise an error
 * notifing it throught event life-cycle.
 *
 * @api private
 */

DMA.prototype._rise_error = function (code, message) {
  var error = {
    code: code,
    message = message,
    t: Date.now();
  };
  this.errors.push(out.error);
  this.emit('error', out.error);
};

/**
 * set
 * Set input data
 *
 * @param {Object} data
 *   @param {Array} data.M
 *   @param {Array} data.V
 *   @param {Array} data.S
 *   @param {Array} data.W
 *   @param {Array} data.Q
 *   @param {Array} data.P
 */

DMA.prototype.set = function (data) {
  this.data.input = data;
  this.data.current.M = data.M || this.data.M;
  this.data.current.W = data.V || this.data.V;
  this.data.current.M = data.S || this.data.S;
  this.data.current.W = data.W || this.data.W;
  this.data.current.M = data.Q || this.data.Q;
  this.data.current.W = data.P || this.data.P;
  this.is_validated = false;
  this.is_scalarized = false;
  this.is_normalized = false;
  return this;
};

/**
 * set_M
 */

DMA.prototype.set_M = function (M) {
  this.data.M = M;
  this.data.current.M = M;
  this.is_validated = false;
  this.is_scalarized = false;
  this.is_normalized = false;
  return this;
};

/**
 * set_V
 */

DMA.prototype.set_V = function (V) {
  this.data.V = V;
  this.is_validated = false;
  return this;
};

/**
 * set_S
 */

DMA.prototype.set_S = function (S) {
  this.data.S = S;
  this.is_validated = false;
  return this;
};

/**
 * set_W
 */

DMA.prototype.set_W = function (W) {
  this.data.W = W;
  this.data.current.W = W;
  this.is_validated = false;
  this.is_normalized = false;
  return this;
};

/**
 * set_Q
 */

DMA.prototype.set_Q = function (Q) {
  this.data.Q = Q;
  this.is_validated = false;
  return this;
};

/**
 * parse
 * Parse cvs data string
 * 
 * Error - cvs not valid
 * Error - cvs not normalized, please get DMA.js cvs template
 * 
 * @param {String} text
 */

DMA.prototype.parse = function (text) {
  var parsed = apis.parse_csv(text);
  this.data.input = parsed;
  this.data.current = parsed;
  this.parsed = true;
  this.is_validated = false;
  this.is_scalarized = false;
  this.is_normalized = false;
  return this;
};

/**
 * validate
 * Error - validation error
 * ex. values in M are out of bounds defined by V
 * ex. qualitative value in M not present in Q
 * ex. not-positive weights found
 *
 */

DMA.prototype.validate = function () {
  var result = this._use_api(apis.validate, this.data);
  if (result) {
    this.is_validated = true;
  }
  return !!result;
};

/**
 * scalarize_M
 * 
 * @api private
 */

DMA.prototype._scalarize_M = function () {
  var scalarized_M = apis.scalarize_m(this.data.current);
  this.data.current.M = this.data.scalarized.M = scalarized_M;
  return this;
};

/**
 * scalarized_V
 * 
 * @api private
 */

DMA.prototype._scalarize_V = function () {
  var scalarized_V = apis.scalarize_v(this.data.current);
  this.data.current.V = this.data.scalarized.V = scalarized_V;
  return this;
};

/** 
 * scalarize
 * Convert M values from qualitative to quantitative.
 * Obtain V from M if not present.
 * 
 * - scalarize_M();
 * - scalarize_V();
 */

DMA.prototype.scalarize = function () {
  if (!this.is_validated) {
    // do something
    // i.e. throw an error or call validate in turn
  }

  if (!this.data.current.V) {
    this.obtain_V_from_M();
  }

  this._scalarize_M();
  this._scalarize_V();
  this.is_scalarized = true;
  
  return this;
};

/**
 * normalize_M
 * 
 * @api private
 */

DMA.prototype._normalize_M = function () {
  var normalized_M = apis.normalize_m(this.data.current);
  this.data.current.M = this.data.normalized.M = normalized_M;
  return this;
};

/**
 * normalize_W
 * 
 * @api private
 */

DMA.prototype._normalize_W = function () {
  var normalized_W = apis.normalize_w(this.data.current);
  this.data.current.W = this.data.normalized.W = normalized_W;
  return this;
};

/** 
 * normalize
 * - normalize_M();
 * - normalize_W();
 */

DMA.prototype.normalize = function () {
  if (!this.is_validated) {
    // do something
    // i.e. throw an error or call validate in turn
  }

  if (!this.is_scalarized) {
    // do something
    // i.e. throw an error or call scalarized in turn
  }

  if (!this.data.current.W) {
    this.obtain_W_from_M();
  }

  this._normalize_M();
  this._normalize_W();
  this.is_normalized = true;

  return this;
};

/**
 * obtain_V_form_M
 *
 */

DMA.prototype.obtain_V_form_M = function () {
  var current = this.data.current;
  current.V = apis.obtain_v_from_m(current);
  var warning = {
    code: 8,
    message: 'V is not present and it is obtained from M: descending rank in applyied',
    t: Date.now()
  };
  this.warnigns.push(warning);
  this.emit('warning', warning);
  return this;
};

/**
 * obtain_W_form_M
 * Apply entropy method to M to obtain W.]
 *
 */

DMA.prototype.obtain_W_form_M = function () {
  var current = this.data.current;
  current.W = utils.entropy(current);
  var warning = {
    code: 9,
    message: 'W is not present and it is obtained from M',
    t: Date.now()
  };
  this.warnigns.push(warning);
  this.emit('warning', warning);
  return this;
};

/**
 * can_apply
 * Test the applicability of the given method.
 *
 */

DMA.prototype.can_apply = function (method) {
  var current = this.data.current;
  var min_input = method.min_input;
  var input = method.input;
  var is_applicable = min_input.every(function (item) { return !!current[item]; });
  if (!is_applicable) {
    return false;
  }
  // gli unici input calcolabili sono V e W entrambi calcolati preventivamente in ogni caso
  // se si dovesse venire ad aggiungere la matrice dei confronti a coppie si potrebbe richiederne 
  // il calcolo all'occorrenza in questo punto confrontando current con input.
};

/**
 * run
 * apply the selected multi criteria method
 * check presence of input
 * give an error if not present
 */

DMA.prototype.run = function (method) {
  var data = this.data;
  var out = {
    data: {},
    error: {},
    warning: {}
  };

  if (!data) {
    this._rise_error(10, 'No input data found');
    return;
  }

  var method = DMA.methods[method].method;
  if (!method) {
    this._rise_error(11, 'No `' + method + '` method data found');
    return;
  }
  
  if (!this.is_validated || !this.is_scalarized || !this.is_normalized) {
    // alternatively it could be possible to call validate, scalarize and normalized here 
    // and warn about their not explicit invocation, instead of rise an error
    this._rise_error(12, 'Don\'t forget to call: \n\tdma.validate();\n\tdma.scalarize();\n\tdma.normalize();\nbefore run',);
    return;
  }

  var is_applicable = this.can_apply(method);
  if (!is_applicable) {
    this._rise_error(13, 'Method `' + method + '` is not applicable due to lack of required parameter(s)');
    return;
  }

  // run the method
  out = method(data);
  return out;
};


// support, info, log methods

/**
 * input
 *
 * M -> [✔]
 * V -> [✔]
 * S -> [✘]
 * W -> [✘]
 * Q -> [✔]
 */

DMA.prototype.input = function () {
  var data = this.data.input;
  var M = data.M ? '✔' : '✘';
  var V = data.V ? '✔' : '✘';
  var S = data.S ? '✔' : '✘';
  var W = data.W ? '✔' : '✘';
  var Q = data.Q ? '✔' : '✘';
  var P = data.P ? '✔' : '✘';
  var input = '';
  input += '\n********************\n';
  input += '*     M -> [' + M + ']     *\n';
  input += '*     V -> [' + V + ']     *\n';
  input += '*     S -> [' + S + ']     *\n';
  input += '*     W -> [' + W + ']     *\n';
  input += '*     Q -> [' + Q + ']     *\n';
  input += '*     P -> [' + P + ']     *\n';
  input += '*------------------*\n';
  input += '* input has been:  *\n';
  input += this.is_validated ?  '*   - validated    *\n' : '';
  input += this.is_scalarized ? '*   - scalarized   *\n' : '';
  input += this.is_normalized ? '*   - normalized   *\n' : '';
  input += '********************\n';
  console.log(input);
};

/**
 * Logger
 *
 */

function Logger (dma) {
  
  dma.on('warning', function (e) {
    console.warn('WARNING', e);
  });
  
  dma.on('error', function (e) {
    console.err('ERROR', e);
  });
  
  dma.on('message', function (e) {
    console.log('LOG', e);
  });
};
 at SyntaxError: Unexpected token (182:11)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.expect (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:597:28)
    at Parser.pp$3.parseObj (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1973:16)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1805:19)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1620:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/dma.js/node_modules/dma.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
