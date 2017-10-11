/root/Targets/termly.js
└── termly.js@2.5.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/termly.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1185 took 4.7732s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (30:6) on program const Interpreter = require('./Interpreter')
const Filesystem = require('./Filesystem')

const ENV = require('../configs/environment')

/**
 * Shell Class inherits from Interpreter
 * Options:
 *  - filesystem {Object}
 *  - commands {Object}
 *  - env {Object} all extra mocked variables
 */
class Shell extends Interpreter{
  constructor({ filesystem = undefined, commands = undefined, env = {} } = {}) {
    super()

    this.polyfills()

    this.Classes = {
      Command: require('./Command'),
      File: require('./File')
    }

    /**
     * Create the virtual filesystem
     * @return reference to instance of @class Filesystem
     */
    this.fs = new Filesystem(filesystem, this)
    this.env = {
      ...ENV,
      ...env
    }

    // Init builtin commands, @method in parent
    // pass shell reference
    this.ShellCommands = this.registerCommands(this)
    this.ShellCommands = {
      ...this.ShellCommands,
      ...this.registerCommands(this, commands),
    }
  }

  polyfills() {
    if (!global.Promise) {
      global.Promise = require('promise-polyfill').Promise
    }
    if (!global.fetch) {
      global.fetch = require('whatwg-fetch')
    }
    return true
  }

  /**
   * Pass control to Interpreter
   * @return [String] OR {Promise} to resolve from your wrapper.
   */
  run(cmd) {
    return this.exec(cmd)
  }
}

// Object.defineProperty(Shell.prototype, 'fs', { writable: true, enumerable: false })
// Object.defineProperty(Shell.prototype, 'ShellCommands', { writable: true, enumerable: false })

module.exports = Shell
 at SyntaxError: Unexpected token (30:6)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$3.parseIdent (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2189:12)
    at Parser.pp$3.parsePropertyName (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2052:101)
    at Parser.pp$3.parseObj (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1988:14)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1805:19)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
