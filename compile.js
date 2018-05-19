const path = require('path');
const fs = require('fs');
const solc = require('solc');

const helloPath = path.resolve(__dirname, 'contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'utf8');
const compiledSource = solc.compile(source, 1).contracts[':Hello'];

module.exports = compiledSource;

// console.log(compiledSource);
