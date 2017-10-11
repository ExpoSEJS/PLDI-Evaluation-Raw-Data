/root/Targets/everything.js
└── everything.js@1.0.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/everything.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0535 took 2.6073s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Invalid number (31:3) on program /* this file contains all grammatical productions in ECMA-262 edition 5.1 ** * **/

// whitespace
tab:for(;;)break	tab;
verticalTab:for(;;)breakverticalTab;
formFeed:for(;;)breakformFeed;
space:for(;;)break space;
nbsp:for(;;)break nbsp;
bom:for(;;)break﻿bom;

// line terminators
lineFeed:0
0;
carriageReturn:00;
carriageReturnLineFeed:0
0;
lineSeparator:0 0;
paragraphSeparator:0 0;

// identifier names
var $, _, \u0078, x$, x_, x\u0030, xa, x0, x0a, x0123456789,
  qwertyuiopasdfghjklzxcvbnm, QWERTYUIOPASDFGHJKLZXCVBNM;
// a representative sample of unicode letters and numbers
var œ一, ǻ둘, ɤ〩, φ, ﬁⅷ, ユニコード, x‌‍;

null; true; false;

0; 00; 1234567890; 01234567;
0.; 0.00; 10.00; .0; .00
0e0; 0E0; 0.e0; 0.00e+0; .00e-0;
0x0; 0X0; 0x0123456789abcdefABCDEF;
2e308;

""; "'"; "\'\"\\\b\f\n\r\t\v\0";
"\1\00\400\000";
"\x01\x23\x45\x67\x89\xAB\xCD\xEF";
"\u0123\u4567\u89AB\uCDEF"; "\
";

''; '"'; '\'\"\\\b\f\n\r\t\v\0';
'\1\00\400\000';
'\x01\x23\x45\x67\x89\xAB\xCD\xEF';
'\u0123\u4567\u89AB\uCDEF'; '\
';

/x/; /|/; /|||/;
/^$\b\B/; /(?=(?!(?:(.))))/;
/a.\f\n\r\t\v\0\[\-\/\\\x00\u0000/; /\d\D\s\S\w\W/;
/\ca\cb\cc\cd\ce\cf\cg\ch\ci\cj\ck\cl\cm\cn\co\cp\cq\cr\cs\ct\cu\cv\cw\cx\cy\cz/;
/\cA\cB\cC\cD\cE\cF\cG\cH\cI\cJ\cK\cL\cM\cN\cO\cP\cQ\cR\cS\cT\cU\cV\cW\cX\cY\cZ/;
/[a-z-]/; /[^\b\-^]/; /[/\]\\]/;
/./i; /./g; /./m; /./igm;
/.*/; /.*?/; /.+/; /.+?/; /.?/; /.??/;
/.{0}/; /.{0,}/; /.{0,0}/;

this;

x;

[]; [,]; [0]; [0,]; [,0]; [0,0]; [0,0,]; [0,,0]; [,,];

({}); ({x:0}); ({x:0,y:0}); ({x:0,}); ({'x':0,"y":0,var:0,});
({0:0}); ({0.:0}); ({0.0:0}); ({.0:0}); ({0e0:0}); ({0x0:0});
({
  get x(){}, set x(a){}, get 'y'(){}, set "y"(a){},
  get 0(){}, set 0(a){}, get var(){}, set var(x){},
});

0..a;

0[0];

// this function makes the NewExpression and CallExpression tests not throw at runtime
x = function f(){ return f; }; x[0] = x; x.a = x;

new x(); new new x()();
new x[0](); new x.a(); new x[0].a(); new x.a[0]();
new x; new new x; new new x();
new new x().a; new new x()[0];

x(); x()(); x(x); x(x, x);
x.a().a(); x[0]()[0](); x().a[0]();

x++; x--;

delete void typeof+-~!x; ++x; --x;

0*0; 0/0; 0%0;

0+0; 0-0;

0<<0; 0>>0; 0>>>0;

0<0; 0>0; 0<=0; 0>=0;
0 instanceof function(){};
0 in{};

0==0; 0!=0; 0===0; 0!==0;

0&0; 0^0; 0|0; 0&&0; 0||0;

0?0:0; 0?0?0:0:0; 0||0?x=0:x=0;

x=0; x*=0; x/=0; x%=0; x+=0; x-=0;
x<<=0; x>>=0; x>>>=0; x&=0; x^=0; x|=0;

0,0; 0,0,0; x=0,x=0;


{} {;} {0} {0;} {0;0} {0;0;}

var x; var x,y; var x,y,z;
var x=0; var x=0,y; var x,y=0; var x=0,y=0;

;

if(0); if(0);else;

do;while(0);
while(0);
for(;;)break; for(0;0;0); for((0 in[]);0;);
for(var a;;)break; for(var a,b;0;0);
for(var a=0;;)break; for(var a=(0 in[]);0;);
for(x in{}); for(var x in{});
for(var x=[]in{}); for(var x=(0 in[])in{});

for(;0;)continue; x:for(;0;)continue x;

for(;;)break; x:for(;;)break x;
switch(0){case 0:break;}

function f(){ return; }
function f(){ return 0; }

with(0);

switch(0){} switch(0){case 0:} switch(0){case 0:case 0:}
switch(0){default:} switch(0){case 0:default:case 0:}
switch(0){case 0:;} switch(0){case 0:;;}
switch(0){default:;} switch(0){default:;;}

x:; x:y:;

try { throw 0; }catch(x){}

try{}catch(x){}
try{}finally{}
try{}catch(x){}finally{}

debugger;

function f(){}
function f(x){}
function f(x,y){}
function f(){ function f(){} }

function f(){ "use strict" }
function f(){ 'use strict' }
function f(){ "other directive" }
function f(){ 'other directive' }
function f(){ ("string") }
function f(){ ('string') }
function f(){
  'string'
  +0
}

(function(){});
(function(x){});
(function(x,y){});
(function(){ function f(){} });
(function f(){});
(function f(x){});
(function f(x,y){});
(function f(){ function f(){} });
 at SyntaxError: Invalid number (31:3)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.readNumber (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2896:52)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2720:19)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp.eat (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:536:12)
    at Parser.pp.semicolon (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:581:15)
    at Parser.pp$1.parseExpressionStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:966:10)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
