var fs = require('fs');
var data = '' + fs.readFileSync(process.argv[process.argv.length - 1]);

var final = new Set();

data = data.split('\n');

function buildList(prefix, data) {
	return data.filter(item => item.indexOf(prefix) != -1).map(item => item.split(prefix)[1]);
}

let list = buildList('DATA:', data);

let chunkNone = [];
let chunkNfa = [];
let chunkCaps = [];
let chunkRefs = [];

function processName(fileSuffix, chunk, data) {
	let dataParsed = JSON.parse(data);
	let name = dataParsed[0].slice(5);

	try {
		let nextFileData = fs.readFileSync('./stdouts/' + name + fileSuffix);
		let re = /took ([0-9]+.[0-9]+)s/g;
		let p;
		let totalThisFile = 0;

		while ((p = re.exec(nextFileData))) {
			chunk.push(Number.parseFloat(p[1]));

			if (chunk[chunk.length - 1] > 50) {
				console.log('Big Took in ' + name + ' ' + chunk[chunk.length - 1]);
			}

			totalThisFile++;
		}

		console.log(name + ' had ' + totalThisFile + ' timings');
	} catch (e) {
		console.log('FAILDATA: ' + name + ' because ' + e);
	}
}

list.forEach(x => processName('_DISABLE_REGULAR_EXPRESSIONS', chunkNone, x));
list.forEach(x => processName('_DISABLE_CAPTURE_GROUPS', chunkNfa, x));
list.forEach(x => processName('_DISABLE_REFINEMENTS', chunkCaps, x));
list.forEach(x => processName('', chunkRefs, x));

function meanChunk(chunk) {
	return chunk.reduce((x, y) => x + y, 0) / chunk.length;
}

let means = [meanChunk(chunkNone), meanChunk(chunkNfa), meanChunk(chunkCaps), meanChunk(chunkRefs)];

console.log('Means');
means.forEach(x => console.log(x));

console.log('Rates');
means.forEach(x => console.log(1/x));