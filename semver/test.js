var semver = require('semver');

function Expand(switcher, thing) {
	var properties = [];

	for (let i in thing) {
		if (typeof thing[i] === "function") {
			console.log('Pushing ' + thing[i].name);
			properties.push(i);
		}
	}

	for (var i = 0; i < properties.length; i++) {
		if (switcher == i) {
			console.log('Testing ' + properties[i] + ' ' + thing[properties[i]]);
			var arg1 = symbolic ExpansionArg1 initial '';
			var arg2 = symbolic ExpansionArg2 initial '';
			var arg3 = symbolic ExpansionArg3 initial '';
			console.log('Testing with ' + arg1 + ' and ' + arg2 + ' and ' + arg3);
			thing[properties[switcher]](arg1, arg2, arg3);
		}
	}
}

var switcher = symbolic Switcher initial -5;

if (switcher == -1) {
	var x = semver(symbolic Arg initial '', symbolic Arg2 initial '');
	var semver_switcher = symbolic Semver_Switcher initial 0;
	Expand(semver_switcher, x);
} else {
	Expand(switcher, semver);
}
