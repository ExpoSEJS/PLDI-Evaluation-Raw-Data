// Require your NPM library
var target = require('minimist');

function SymbolicArray() {
	var x = symbolic Switch initial 0;
	assume x < 10;
	var array = [];
	for (var i = 0; i < x; i++) {
		array.push(symbolic Arg initial '');
	}
	return array;
}

target(SymbolicArray(), symbolic Opts);