const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 7, 4, 5]), [7]);
assertArraysEqual(middle([1, 2, 7, 4, 5, 8]), [7, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);