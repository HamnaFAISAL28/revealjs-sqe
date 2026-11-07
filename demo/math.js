function add(a, b) { return a + b; }
function div(a, b) { if (b === 0) { throw new Error('zero'); } return a / b; }
module.exports = { add, div };