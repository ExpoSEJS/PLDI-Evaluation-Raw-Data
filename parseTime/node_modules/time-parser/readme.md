
This package is a fork of [parsetime](https://www.npmjs.com/package/parsetime)
whose author has apparently forgotten about it.

The package did not have a main field in the package.json was just a global script :(

## Installation

```
npm install time-parser --save

```

## Usage

```javascript
var timeParser = require('time-parser');

timeParser('2 hours ago')
// prints -> Object {absolute: 1441240059031, relative: -7200000, mode: "relative", pb: 8}


```

All credit goes to the Origin Author.


