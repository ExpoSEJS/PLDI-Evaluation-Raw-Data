var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('out_concat');

let doubles = [];
let seen = [];

function exists(name) {
	
	if (seen.find(x => x == name)) {
		return true;
	}

	seen.push(name);
	return false;
}

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	if (exists(line.split(' ')[0])) {
		//console.log('DOUBLE: ' + line);
	} else {
		console.log(line);
	}
});

lr.on('end', function () {
	// All lines are read, file is closed now.
});