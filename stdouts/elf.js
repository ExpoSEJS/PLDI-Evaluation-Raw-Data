/root/Targets/elf.js
└─┬ elf.js@0.3.0 
  └─┬ funargs@0.0.5 
    └── eyes@0.1.8 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/elf.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 36% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","create","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0464 took 8.4946s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Binding arguments in strict mode (69:20) on program var inspect = require('eyes').inspector({stream: null, pretty: false, styles: false});

// -----------------------
//  Module
// --------------------

var Fun = {};

// -----------------------
//  Class: Arguments
// --------------------

function FunArguments (args) {
  var _args = Array.prototype.slice.apply(args);
  _args.__proto__ = FunArguments.prototype;
  return _args;
}

FunArguments.type = function(type) {
  return function() {
    var matching_args = [], matching_type, arg;

    for (var i = 0; i < this.length; i++) {
      arg = this[i];

      if (Array.isArray(arg)) {
        matching_type = (type === 'array');
      } else {
        matching_type = ((arg || arg === false) && typeof arg === type);
      }

      if (matching_type) {
        matching_args.push(arg);
      }
    }

    return matching_args;
  };
};

FunArguments.prototype = {
  __proto__: Array.prototype,
  booleans: FunArguments.type('boolean'),
  strings: FunArguments.type('string'),
  numbers: FunArguments.type('number'),
  arrays: FunArguments.type('array'),
  objects: FunArguments.type('object'),
  functions: FunArguments.type('function'),
  inspect: function() {
    return inspect(this);
  },
  debug: function() {
    console.log(this.inspect());
  }
};

FunArguments.prototype._inspect = function() {
  return inspect(this);
};

FunArguments.prototype._debug = function() {
  console.log(this.inspect());
};

// -----------------------
//  Expose
// --------------------

Fun.args = function(arguments) {
  return new FunArguments(arguments);
};

// -----------------------
//  Export
// --------------------

module.exports = Fun.args;
 at SyntaxError: Binding arguments in strict mode (69:20)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$2.checkLVal (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1472:14)
    at Parser.pp$3.checkParams (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2136:16)
    at Parser.pp$3.parseFunctionBody (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2119:12)
    at Parser.parseFunctionBody (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:14:32)
    at Parser.pp$1.parseFunction (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1065:10)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1810:19)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/elf.js/node_modules/elf.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/elf.js. Coverage (Term): 37% Coverage (LOC): 27%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/runtime/runtime.js. Coverage (Term): 60% Coverage (LOC): 90%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/runtime/core_ext.js. Coverage (Term): 67% Coverage (LOC): 80%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/runtime/object.js. Coverage (Term): 59% Coverage (LOC): 88%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/runtime/evented.js. Coverage (Term): 35% Coverage (LOC): 55%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/lexer/token/token.js. Coverage (Term): 28% Coverage (LOC): 50%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/lexer/token/error_token.js. Coverage (Term): 47% Coverage (LOC): 58%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/lexer/lexer.js. Coverage (Term): 11% Coverage (LOC): 17%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/lexer/dsl.js. Coverage (Term): 17% Coverage (LOC): 49%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/lexer/rule/rule.js. Coverage (Term): 23% Coverage (LOC): 38%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/parser/parser.js. Coverage (Term): 9% Coverage (LOC): 9%
*- File /root/Targets/elf.js/node_modules/elf.js/lib/parser/dsl.js. Coverage (Term): 6% Coverage (LOC): 8%
*- File /root/Targets/elf.js/node_modules/funargs/index.js. Coverage (Term): 76% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
