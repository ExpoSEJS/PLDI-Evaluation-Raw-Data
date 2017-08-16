// ExpoSE Play {"Arg":"","Arg2":"-\b\u0002","Arg3":"-\u0002","_bound":18}	90.2	19:59.50	7	0	38047	pbai002	0 bytes	0 bytes			-	No	No	0 bytes	0 bytes	0	0	0 bytes	0 bytes	64 bit	0 bytes	0 bytes	0 bytes	No	No		0 bytes	No	
// ExpoSE Play {"Arg":"0x4b30d","Arg2":"--�","Arg3":"-","_bound":9}	90.2	23:35.97	7	0	38310	pbai002	0 bytes	0 bytes			-	No	No	0 bytes	0 bytes	0	0	0 bytes	0 bytes	64 bit	0 bytes	0 bytes	0 bytes	No	No		0 bytes	No	
// ExpoSE Play {"Arg":"--no-�J\u0002�*J\u0000D\u0000","Arg2":"-�","Arg3":"-\u0002J","_bound":12}	93.6	3:19.51	7	0	45312	pbai002	0 bytes	0 bytes			-	No	No	0 bytes	0 bytes	0	0	0 bytes	0 bytes	64 bit	0 bytes	0 bytes	0 bytes	No	No		0 bytes	No	

function fakeArgs(args) {
	return [args.Arg, args.Arg2, args.Arg3];
}

var parsed = JSON.parse('{"Arg":"--no-�J\\u0002�*J\\u0000D\\u0000","Arg2":"-�","Arg3":"-\\u0002J","_bound":12}');

console.log('Parsed ' + parsed.Arg2);

var argv = require('minimist')(fakeArgs(parsed));

console.dir(argv);