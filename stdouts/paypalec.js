/root/Targets/paypalec.js
└─┬ paypalec.js@0.2.3 
  ├── querystring@0.2.0 
  ├─┬ request@2.83.0 
  │ ├── aws-sign2@0.7.0 
  │ ├── aws4@1.6.0 
  │ ├── caseless@0.12.0 
  │ ├─┬ combined-stream@1.0.5 
  │ │ └── delayed-stream@1.0.0 
  │ ├── extend@3.0.1 
  │ ├── forever-agent@0.6.1 
  │ ├─┬ form-data@2.3.1 
  │ │ └── asynckit@0.4.0 
  │ ├─┬ har-validator@5.0.3 
  │ │ ├─┬ ajv@5.2.3 
  │ │ │ ├── co@4.6.0 
  │ │ │ ├── fast-deep-equal@1.0.0 
  │ │ │ ├── json-schema-traverse@0.3.1 
  │ │ │ └─┬ json-stable-stringify@1.0.1 
  │ │ │   └── jsonify@0.0.0 
  │ │ └── har-schema@2.0.0 
  │ ├─┬ hawk@6.0.2 
  │ │ ├── boom@4.3.1 
  │ │ ├─┬ cryptiles@3.1.2 
  │ │ │ └── boom@5.2.0 
  │ │ ├── hoek@4.2.0 
  │ │ └── sntp@2.0.2 
  │ ├─┬ http-signature@1.2.0 
  │ │ ├── assert-plus@1.0.0 
  │ │ ├─┬ jsprim@1.4.1 
  │ │ │ ├── extsprintf@1.3.0 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └─┬ verror@1.10.0 
  │ │ │   └── core-util-is@1.0.2 
  │ │ └─┬ sshpk@1.13.1 
  │ │   ├── asn1@0.2.3 
  │ │   ├── bcrypt-pbkdf@1.0.1 
  │ │   ├── dashdash@1.14.1 
  │ │   ├── ecc-jsbn@0.1.1 
  │ │   ├── getpass@0.1.7 
  │ │   ├── jsbn@0.1.1 
  │ │   └── tweetnacl@0.14.5 
  │ ├── is-typedarray@1.0.0 
  │ ├── isstream@0.1.2 
  │ ├── json-stringify-safe@5.0.1 
  │ ├─┬ mime-types@2.1.17 
  │ │ └── mime-db@1.30.0 
  │ ├── oauth-sign@0.8.2 
  │ ├── performance-now@2.1.0 
  │ ├── qs@6.5.1 
  │ ├── safe-buffer@5.1.1 
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.3 
  │ │ └── punycode@1.4.1 
  │ ├── tunnel-agent@0.6.0 
  │ └── uuid@3.1.0 
  └── underscore@1.8.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/paypalec.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 33% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0786 took 3.4567s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (11:6) on program /**
 * Created by Aureliano on 23/02/2016.
 * This is the PaypalService class
 */

'use strict';
const MODULE_NAME = 'PaypalService';
const querystring = require('querystring');
const request = require('request');
const underscore = require('underscore');
const assert = require('assert');

// Paypal Sandbox API host
var SANDBOX_API_HOST    = process.env.PAYPAL_SANDBOX_API_HOST || 'https://api-3t.sandbox.paypal.com/nvp';
// Paypal Production API host
var PRODUCTION_API_HOST = process.env.PAYPAL_PRODUCTION_API_HOST || 'https://api-3t.paypal.com/nvp';
// Paypal API version
var API_VERSION         = process.env.PAYPAL_API_VERSION || '204.0';
// Paypal Sandbox Payment host
var SANDBOX_PAY_URL     = process.env.PAYPAL_SANDBOX_PAY_HOST || 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=';
// Paypal Production Payment host
var PRODUCTION_PAY_URL  = process.env.PAYPAL_PRODUCTION_PAY_HOST || 'https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=';


/**
 * Paypal Service
 */
class PaypalService{

    /**
     * Instanciate a new paypal service
     * @param username api username
     * @param password api password
     * @param signature api signature
     * @param production flag for enable production use (default is sandbox)
     */
    constructor(username,password,signature,production){

        assert(username,MODULE_NAME + ': API Username is required');
        assert(password,MODULE_NAME + ': API password is required');
        assert(signature,MODULE_NAME + ': API signature is required');

        // init
        this.user = username;
        this.pwd = password;
        this.signature = signature;
        this.sandbox = !production;
    }

    /**
     * Ask Authorization to paypal servers for SetExpressCheckout
     * @param amount
     * @param currencycode e.g. EUR
     * @param cancelUrl
     * @param returnUrl
     * @param options extra options
     * @param onComplete call back actions
     */
    askAuthorization(amount,currencycode,cancelUrl,returnUrl,options,onComplete){

        assert(amount,MODULE_NAME + ': Numeric amount is required');
        assert(currencycode,MODULE_NAME + ': currencycode is required' );
        assert(cancelUrl,MODULE_NAME + ': cancelUrl is required');
        assert(returnUrl,MODULE_NAME + ': returnUrl is required');

        // create option
        var opt = {
            'PAYMENTREQUEST_0_PAYMENTACTION':'Authorization',
            'PAYMENTREQUEST_0_AMT':amount,
            'PAYMENTREQUEST_0_CURRENCYCODE':currencycode,
            cancelUrl,
            returnUrl,
            user: this.user,
            pwd: this.pwd,
            signature: this.signature
        };

        // merge with additional option
        if(options){
            opt = underscore.extend(opt,options);
        }

        // fire request
        this.request(opt,'SetExpressCheckout',onComplete);
    }

    /**
     * Ask GetExpressCheckoutDetails to paypal
     * @param token of the transaction
     * @param option extra options
     * @param onComplete callback action
     */
    askExpressCheckoutDetails(token,options,onComplete){

        // validate token
        assert(token,MODULE_NAME + ': Token is required');

        var opt = {
            'TOKEN':token
        };

        // merge with additional option
        if(options){
            opt = underscore.extend(opt,options);
        }

        // fire request
        this.request(opt,'GetExpressCheckoutDetails',onComplete);
    }

    /**
     * Confirm payment authorization on paypal server
     * @param token transaction
     * @param payerid from the returnUrl of the Authorization or from the ExpressCheckoutDetails
     * @param amount
     * @param currencycode
     * @param option extra options
     * @param onComplete callback
     */
    doExpressCheckoutPayment(token,payerid,amount,currencycode,options,onComplete){

        assert(token,MODULE_NAME + ': Token is required');
        assert(payerid,MODULE_NAME + ': payer id is required' );
        assert(amount,MODULE_NAME + ': Numeric amount is required');
        assert(currencycode,MODULE_NAME + ': currencycode is required' );

        var opt = {
            'PAYMENTREQUEST_0_PAYMENTACTION':'Authorization',
            'TOKEN':token,
            'PAYERID':payerid,
            'PAYMENTREQUEST_0_CURRENCYCODE':currencycode,
            'PAYMENTREQUEST_0_AMT':amount
        };

        // merge with additional option
        if(options){
            opt = underscore.extend(opt,options);
        }

        // fire request
        this.request(opt,'DoExpressCheckoutPayment',onComplete);
    }

    /**
     * Execute the doCapture of the amount
     * @param transationID from the doExpressCheckoutPayment transaction
     * @param amount authorized
     * @param currencycode
     * @param options extra options
     * @param onComplete callback
     */
    doCapture(transationID,amount,currencycode,options,onComplete){

        assert(transationID,MODULE_NAME + ': transation ID is required' );
        assert(amount,MODULE_NAME + ': Numeric amount is required');
        assert(currencycode,MODULE_NAME + ': currencycode is required' );

        var opt = {
            'COMPLETETYPE':'Complete',
            'AUTHORIZATIONID':transationID,
            'AMT':amount,
            'CURRENCYCODE':currencycode
        };

        // merge with additional option
        if(options){
            opt = underscore.extend(opt,options);
        }

        // fire request
        this.request(opt,'DoCapture',onComplete);
    }

    /**
     * Execute the doVoid of the amount
     * @param transationID from the doExpressCheckoutPayment transaction
     * @param options extra option
     * @param onComplete callback
     */
    doVoid(transationID,options,onComplete){

        assert(transationID,MODULE_NAME + ': transation ID is required' );

        var opt = {
            'AUTHORIZATIONID':transationID
        };

        // merge with additional option
        if(options){
            opt = underscore.extend(opt,options);
        }

        // fire request
        this.request(opt,'DoVoid',onComplete);
    }

    /**
     * get the paypalUrl
     * @returns {*}
     */
    get paypalUrl(){
        if(this.sandbox){
            return SANDBOX_API_HOST;
        }else{
            return PRODUCTION_API_HOST;
        }
    }

    /**
     * Read the transaction ID to Capture / Void
     * @param body from the doExpressCheckoutPayment
     * @returns the value of the transation id
     */
    readTransactionIDFromAuthBody(body){
        var obj = {};
        if(underscore.isString(body)){
            obj = this.objectify(body);
        }
        return obj.PAYMENTINFO_0_TRANSACTIONID;
    }
    /**
     * generate the payment url
     * @param token
     * @returns {*}
     */

    generatePaymentUrl(token){
        if(this.sandbox){
            return SANDBOX_PAY_URL + token;
        }else{
            return PRODUCTION_PAY_URL + token;
        }
    }

    /**
     * generate the payment url from body object
     * @param token
     * @returns {*}
     */
    generatePaymentUrlFromBody(body){
        return this.generatePaymentUrl(body.TOKEN);
    }

    /**
     * generate the payment url from body object
     * @param token
     * @returns {*}
     */
    generatePaymentUrlFromRaw(rawbody){
        var body = this.objectify(rawbody);
        return this.generatePaymentUrlFromBody(body);
    }

    /**
     * Convert body to object
     * @param body
     * @returns {{}}
     */
    objectify(body){
        if(!body){
            return {};
        }else{
            let pairArray = body.split('&')
            let object = {};
            for(let i=0; i<pairArray.length; i++){
                var line = pairArray[i];
                if(line){
                    var splittedLine = line.split('=');
                    object[splittedLine[0]]=splittedLine[1];
                }
            }
            return object;
        }
    }

    /**
     * perform request
     */
    request(options, method, onComplete){

        var form = {
            USER: this.user,
            PWD: this.pwd,
            SIGNATURE: this.signature,
            VERSION: API_VERSION,
            METHOD: method
        };

        form = underscore.extend(form,options);

        var formData = querystring.stringify(form);
        var contentLength = formData.length;


        console.log(MODULE_NAME + ' req on ', this.paypalUrl);
        console.log(MODULE_NAME + ' body ', require('util').inspect(formData));

        request({
            headers: {
                'Content-Length': contentLength,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri: this.paypalUrl,
            body: formData,
            method: 'POST'
        }, function (err, res, body) {
            if(res.statusCode==200){
                onComplete(null,body);
            }else{
                onComplete(err,{res,body});
            }
        });
    }

};

/** Exports */
module.exports = PaypalService;


 at SyntaxError: Unexpected token (11:6)
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
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
