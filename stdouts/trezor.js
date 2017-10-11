/root/Targets/trezor.js
└─┬ trezor.js@6.1.1 
  ├─┬ bitcoinjs-lib-zcash@3.0.0 
  │ ├── bigi@1.4.2 
  │ ├── bip66@1.1.5 
  │ ├── bitcoin-ops@1.3.0 
  │ ├─┬ bs58check@2.0.2 
  │ │ └─┬ bs58@4.0.1 
  │ │   └── base-x@3.0.2 
  │ ├─┬ create-hash@1.1.3 
  │ │ ├── cipher-base@1.0.4 
  │ │ ├── inherits@2.0.3 
  │ │ ├─┬ ripemd160@2.0.1 
  │ │ │ └── hash-base@2.0.2 
  │ │ └── sha.js@2.4.9 
  │ ├── create-hmac@1.1.6 
  │ ├── merkle-lib@1.0.0 
  │ ├── pushdata-bitcoin@1.0.1 
  │ ├── typeforce@1.11.5 
  │ ├── varuint-bitcoin@1.0.4 
  │ └── wif@2.0.6 
  ├── ecurve@1.0.5 
  ├─┬ randombytes@2.0.5 
  │ └── safe-buffer@5.1.1 
  ├── semver-compare@1.0.0 
  ├─┬ trezor-link@0.2.105 
  │ ├─┬ json-stable-stringify@1.0.1 
  │ │ └── jsonify@0.0.0 
  │ ├─┬ object.values@1.0.4 
  │ │ ├─┬ define-properties@1.1.2 
  │ │ │ ├── foreach@2.0.5 
  │ │ │ └── object-keys@1.0.11 
  │ │ ├─┬ es-abstract@1.9.0 
  │ │ │ ├─┬ es-to-primitive@1.1.1 
  │ │ │ │ ├── is-date-object@1.0.1 
  │ │ │ │ └── is-symbol@1.0.1 
  │ │ │ ├── is-callable@1.1.3 
  │ │ │ └── is-regex@1.0.4 
  │ │ ├── function-bind@1.1.1 
  │ │ └── has@1.0.1 
  │ └─┬ protobufjs-old-fixed-webpack@3.8.5 
  │   ├─┬ ascli@0.3.0 
  │   │ ├── colour@0.7.1 
  │   │ └── optjs@3.2.2 
  │   └─┬ bytebuffer-old-fixed-webpack@3.5.6 
  │     ├── bufferview@1.0.1 
  │     └── long@2.4.0 
  ├── unorm@1.4.1 
  └── whatwg-fetch@0.11.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/trezor.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 32% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","create","setPrototypeOf","bind","pow","call","bound _LengthN","bound ","Array","charCodeAt"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0682 took 26.7464s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (2:4) on program // FIXME: Kind of a weird way to throw exceptions, consider removing
var assert = require('assert')
var BigInteger = require('./bigi')

/**
 * Turns a byte array into a big integer.
 *
 * This function will interpret a byte array as a big integer in big
 * endian notation.
 */
BigInteger.fromByteArrayUnsigned = function(byteArray) {
  // BigInteger expects a DER integer conformant byte array
  if (byteArray[0] & 0x80) {
    return new BigInteger([0].concat(byteArray))
  }

  return new BigInteger(byteArray)
}

/**
 * Returns a byte array representation of the big integer.
 *
 * This returns the absolute of the contained value in big endian
 * form. A value of zero results in an empty array.
 */
BigInteger.prototype.toByteArrayUnsigned = function() {
  var byteArray = this.toByteArray()
  return byteArray[0] === 0 ? byteArray.slice(1) : byteArray
}

BigInteger.fromDERInteger = function(byteArray) {
  return new BigInteger(byteArray)
}

/*
 * Converts BigInteger to a DER integer representation.
 *
 * The format for this value uses the most significant bit as a sign
 * bit.  If the most significant bit is already set and the integer is
 * positive, a 0x00 is prepended.
 *
 * Examples:
 *
 *      0 =>     0x00
 *      1 =>     0x01
 *     -1 =>     0xff
 *    127 =>     0x7f
 *   -127 =>     0x81
 *    128 =>   0x0080
 *   -128 =>     0x80
 *    255 =>   0x00ff
 *   -255 =>   0xff01
 *  16300 =>   0x3fac
 * -16300 =>   0xc054
 *  62300 => 0x00f35c
 * -62300 => 0xff0ca4
*/
BigInteger.prototype.toDERInteger = BigInteger.prototype.toByteArray

BigInteger.fromBuffer = function(buffer) {
  // BigInteger expects a DER integer conformant byte array
  if (buffer[0] & 0x80) {
    var byteArray = Array.prototype.slice.call(buffer)

    return new BigInteger([0].concat(byteArray))
  }

  return new BigInteger(buffer)
}

BigInteger.fromHex = function(hex) {
  if (hex === '') return BigInteger.ZERO

  assert.equal(hex, hex.match(/^[A-Fa-f0-9]+/), 'Invalid hex string')
  assert.equal(hex.length % 2, 0, 'Incomplete hex')
  return new BigInteger(hex, 16)
}

BigInteger.prototype.toBuffer = function(size) {
  var byteArray = this.toByteArrayUnsigned()
  var zeros = []

  var padding = size - byteArray.length
  while (zeros.length < padding) zeros.push(0)

  return new Buffer(zeros.concat(byteArray))
}

BigInteger.prototype.toHex = function(size) {
  return this.toBuffer(size).toString('hex')
}
 at SyntaxError: Unexpected token (2:4)
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
*- File /root/Targets/trezor.js/node_modules/trezor.js/lib/index-browser.js. Coverage (Term): 16% Coverage (LOC): 12%
*- File /root/Targets/trezor.js/node_modules/trezor.js/lib/session.js. Coverage (Term): 5% Coverage (LOC): 5%
*- File /root/Targets/trezor.js/node_modules/trezor.js/lib/events.js. Coverage (Term): 53% Coverage (LOC): 71%
*- File /root/Targets/trezor.js/node_modules/trezor.js/lib/flow-events.js. Coverage (Term): 42% Coverage (LOC): 76%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/index.js. Coverage (Term): 35% Coverage (LOC): 38%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/block.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/bufferutils.js. Coverage (Term): 24% Coverage (LOC): 47%
*- File /root/Targets/trezor.js/node_modules/pushdata-bitcoin/index.js. Coverage (Term): 12% Coverage (LOC): 22%
*- File /root/Targets/trezor.js/node_modules/varuint-bitcoin/index.js. Coverage (Term): 10% Coverage (LOC): 21%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/crypto.js. Coverage (Term): 35% Coverage (LOC): 75%
*- File /root/Targets/trezor.js/node_modules/create-hash/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/merkle-lib/fastRoot.js. Coverage (Term): 13% Coverage (LOC): 18%
*- File /root/Targets/trezor.js/node_modules/typeforce/index.js. Coverage (Term): 27% Coverage (LOC): 36%
*- File /root/Targets/trezor.js/node_modules/typeforce/errors.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/trezor.js/node_modules/typeforce/native.js. Coverage (Term): 63% Coverage (LOC): 81%
*- File /root/Targets/trezor.js/node_modules/typeforce/extra.js. Coverage (Term): 42% Coverage (LOC): 73%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/types.js. Coverage (Term): 71% Coverage (LOC): 91%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/transaction.js. Coverage (Term): 9% Coverage (LOC): 15%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/script.js. Coverage (Term): 15% Coverage (LOC): 26%
*- File /root/Targets/trezor.js/node_modules/bip66/index.js. Coverage (Term): 5% Coverage (LOC): 11%
*- File /root/Targets/trezor.js/node_modules/safe-buffer/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/script_number.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/trezor.js/node_modules/bitcoin-ops/map.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/index.js. Coverage (Term): 34% Coverage (LOC): 53%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/multisig/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/multisig/input.js. Coverage (Term): 23% Coverage (LOC): 43%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/multisig/output.js. Coverage (Term): 20% Coverage (LOC): 30%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/nulldata.js. Coverage (Term): 44% Coverage (LOC): 63%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkey/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkey/input.js. Coverage (Term): 37% Coverage (LOC): 66%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkey/output.js. Coverage (Term): 37% Coverage (LOC): 58%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkeyhash/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkeyhash/input.js. Coverage (Term): 32% Coverage (LOC): 49%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/pubkeyhash/output.js. Coverage (Term): 34% Coverage (LOC): 55%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/scripthash/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/scripthash/input.js. Coverage (Term): 17% Coverage (LOC): 36%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/scripthash/output.js. Coverage (Term): 39% Coverage (LOC): 59%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnesspubkeyhash/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnesspubkeyhash/input.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnesspubkeyhash/output.js. Coverage (Term): 42% Coverage (LOC): 62%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnessscripthash/index.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnessscripthash/input.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnessscripthash/output.js. Coverage (Term): 42% Coverage (LOC): 62%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnesscommitment/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/templates/witnesscommitment/output.js. Coverage (Term): 39% Coverage (LOC): 57%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/ecpair.js. Coverage (Term): 7% Coverage (LOC): 7%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/address.js. Coverage (Term): 18% Coverage (LOC): 34%
*- File /root/Targets/trezor.js/node_modules/bs58check/index.js. Coverage (Term): 20% Coverage (LOC): 41%
*- File /root/Targets/trezor.js/node_modules/bs58/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/base-x/index.js. Coverage (Term): 21% Coverage (LOC): 32%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/networks.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bitcoinjs-lib-zcash/src/ecdsa.js. Coverage (Term): 8% Coverage (LOC): 13%
*- File /root/Targets/trezor.js/node_modules/create-hmac/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bigi/lib/index.js. Coverage (Term): 75% Coverage (LOC): 100%
*- File /root/Targets/trezor.js/node_modules/bigi/lib/bigi.js. Coverage (Term): 13% Coverage (LOC): 30%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
