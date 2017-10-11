
> bufferutil@1.2.1 install /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/bufferutil
> node-gyp rebuild

make: Entering directory '/root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/bufferutil/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
bufferutil.target.mk:95: recipe for target 'Release/obj.target/bufferutil/src/bufferutil.o' failed
make: Leaving directory '/root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/bufferutil/build'

> utf-8-validate@1.2.1 install /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/utf-8-validate
> node-gyp rebuild

make: Entering directory '/root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/utf-8-validate/build'
  CXX(target) Release/obj.target/validation/src/validation.o
validation.target.mk:95: recipe for target 'Release/obj.target/validation/src/validation.o' failed
make: Leaving directory '/root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/node_modules/utf-8-validate/build'

> angular-engine.js@0.1.1 postinstall /root/Targets/angular-engine.js/node_modules/angular-engine.js
> node scripts/npm/copy-npm-shrinkwrap.js

- npm-shrinkwrap.cached.json node_modules/angular-engine.js/node_modules/npm-shrinkwrap.cached.json
/root/Targets/angular-engine.js
└─┬ angular-engine.js@0.1.1 
  └── grunt-jasmine-node@0.1.0  extraneous (git://github.com/vojtajina/grunt-jasmine-node.git#ced17cbe52c1412b2ada53160432a5b681f37cd7)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/angular-engine.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 79% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","getOSType","parseInt","call","RegExp","Object","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0363 took 33.8007s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: 'with' in strict mode (5:0) on program (function(_) { return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (obj.useStrict) { ;
__p += '\'use strict\';\n';
 } ;
__p += 'var index, value, iteratee = ' +
((__t = ( firstArg )) == null ? '' : __t) +
', result = ' +
((__t = ( firstArg )) == null ? '' : __t) +
';\nif (!' +
((__t = ( firstArg )) == null ? '' : __t) +
') return result;\n' +
((__t = ( top )) == null ? '' : __t) +
';\n';
 if (arrayLoop) { ;
__p += 'var length = iteratee.length; index = -1;\nif (typeof length == \'number\') {  ';
 if (noCharByIndex) { ;
__p += '\n  if (isString(iteratee)) {\n    iteratee = iteratee.split(\'\')\n  }  ';
 } ;
__p += '\n  while (++index < length) {\n    value = iteratee[index];\n    ' +
((__t = ( arrayLoop )) == null ? '' : __t) +
'\n  }\n}\nelse {  ';
  } else if (noArgsEnum) { ;
__p += '\n  var length = iteratee.length; index = -1;\n  if (length && isArguments(iteratee)) {\n    while (++index < length) {\n      value = iteratee[index += \'\'];\n      ' +
((__t = ( objectLoop )) == null ? '' : __t) +
'\n    }\n  } else {  ';
 } ;
__p += '  ';
 if (!hasDontEnumBug) { ;
__p += '\n  var skipProto = typeof iteratee == \'function\' && \n    propertyIsEnumerable.call(iteratee, \'prototype\');\n  ';
 } ;
__p += '  ';
 if (isKeysFast && useHas) { ;
__p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iteratee] ? nativeKeys(iteratee) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ';
 if (!hasDontEnumBug) { ;
__p += 'if (!(skipProto && index == \'prototype\')) {\n  ';
 } ;
__p += '    value = iteratee[index];\n    ' +
((__t = ( objectLoop )) == null ? '' : __t) +
'\n    ';
 if (!hasDontEnumBug) { ;
__p += '}\n';
 } ;
__p += '  }  ';
 } else { ;
__p += '\n  for (index in iteratee) {';
    if (!hasDontEnumBug || useHas) { ;
__p += '\n    if (';
      if (!hasDontEnumBug) { ;
__p += '!(skipProto && index == \'prototype\')';
 }      if (!hasDontEnumBug && useHas) { ;
__p += ' && ';
 }      if (useHas) { ;
__p += 'hasOwnProperty.call(iteratee, index)';
 }    ;
__p += ') {    ';
 } ;
__p += '\n    value = iteratee[index];\n    ' +
((__t = ( objectLoop )) == null ? '' : __t) +
';    ';
 if (!hasDontEnumBug || useHas) { ;
__p += '\n    }';
 } ;
__p += '\n  }  ';
 } ;
__p += '  ';
 if (hasDontEnumBug) { ;
__p += '\n\n  var ctor = iteratee.constructor;\n    ';
 for (var k = 0; k < 7; k++) { ;
__p += '\n  index = \'' +
((__t = ( shadowed[k] )) == null ? '' : __t) +
'\';\n  if (';
      if (shadowed[k] == 'constructor') {        ;
__p += '!(ctor && ctor.prototype === iteratee) && ';
      } ;
__p += 'hasOwnProperty.call(iteratee, index)) {\n    value = iteratee[index];\n    ' +
((__t = ( objectLoop )) == null ? '' : __t) +
'\n  }    ';
 } ;
__p += '  ';
 } ;
__p += '  ';
 if (arrayLoop || noArgsEnum) { ;
__p += '\n}';
 } ;
__p += '\n' +
((__t = ( bottom )) == null ? '' : __t) +
';\nreturn result';

}
return __p
} }) at SyntaxError: 'with' in strict mode (5:0)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$1.parseWithStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:932:27)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:708:32)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseBlock (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$3.parseFunctionBody (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2105:24)
    at Parser.parseFunctionBody (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:14:32)
    at Parser.pp$1.parseFunction (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1065:10)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1810:19)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/Gruntfile.js. Coverage (Term): 4% Coverage (LOC): 2%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/angularFiles.js. Coverage (Term): 81% Coverage (LOC): 95%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/lib/grunt/utils.js. Coverage (Term): 3% Coverage (LOC): 4%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/shell.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/common.js. Coverage (Term): 19% Coverage (LOC): 27%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/ls.js. Coverage (Term): 11% Coverage (LOC): 12%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/cd.js. Coverage (Term): 38% Coverage (LOC): 46%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/pwd.js. Coverage (Term): 60% Coverage (LOC): 75%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/find.js. Coverage (Term): 25% Coverage (LOC): 26%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/cp.js. Coverage (Term): 7% Coverage (LOC): 9%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/rm.js. Coverage (Term): 10% Coverage (LOC): 11%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/mv.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/mkdir.js. Coverage (Term): 20% Coverage (LOC): 23%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/test.js. Coverage (Term): 17% Coverage (LOC): 13%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/cat.js. Coverage (Term): 23% Coverage (LOC): 30%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/to.js. Coverage (Term): 39% Coverage (LOC): 50%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/toEnd.js. Coverage (Term): 39% Coverage (LOC): 50%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/sed.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/grep.js. Coverage (Term): 19% Coverage (LOC): 23%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/which.js. Coverage (Term): 15% Coverage (LOC): 17%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/echo.js. Coverage (Term): 45% Coverage (LOC): 63%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/dirs.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/ln.js. Coverage (Term): 26% Coverage (LOC): 27%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/exec.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/tempdir.js. Coverage (Term): 21% Coverage (LOC): 35%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/chmod.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/shelljs/src/error.js. Coverage (Term): 71% Coverage (LOC): 83%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/lib/grunt.js. Coverage (Term): 9% Coverage (LOC): 11%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/coffee-script.js. Coverage (Term): 18% Coverage (LOC): 25%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/lexer.js. Coverage (Term): 15% Coverage (LOC): 30%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/rewriter.js. Coverage (Term): 14% Coverage (LOC): 36%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/helpers.js. Coverage (Term): 19% Coverage (LOC): 36%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/parser.js. Coverage (Term): 86% Coverage (LOC): 98%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/nodes.js. Coverage (Term): 14% Coverage (LOC): 25%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/coffee-script/lib/coffee-script/scope.js. Coverage (Term): 19% Coverage (LOC): 28%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/grunt-legacy-util/index.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/getobject/lib/getobject.js. Coverage (Term): 18% Coverage (LOC): 31%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/hooker/lib/hooker.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/async/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/async/lib/async.js. Coverage (Term): 11% Coverage (LOC): 15%
*- File /root/Targets/angular-engine.js/node_modules/angular-engine.js/node_modules/grunt/node_modules/lodash/lodash.js. Coverage (Term): 16% Coverage (LOC): 18%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
