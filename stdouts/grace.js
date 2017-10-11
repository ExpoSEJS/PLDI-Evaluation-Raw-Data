/root/Targets/grace.js
└── grace.js@2.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/grace.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1049 took 2.5337s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (14:26) on program import Koa from 'koa'

import proxy from '../middleware/proxy'
import vhost from '../middleware/vhost'
import router from '../middleware/router'

const app = new Koa()

app.use(proxy())

app.use(router())

// response
app.use(async (ctx, next) => {
  console.log(1)
  ctx.body = 'Hello World'
  await next();
  console.log(2)
  ctx.body = ctx.body + 'testest'
})

export { app }
 at SyntaxError: Unexpected token (14:26)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.expect (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:597:28)
    at Parser.pp$3.parseExprList (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2152:16)
    at Parser.pp$3.parseSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1741:35)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1718:17)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1597:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
