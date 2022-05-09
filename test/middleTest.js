const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [7] for [1, 2, 7, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 7, 4, 5]),[7]);
  });
  it("returns [7, 4] for [1, 2, 7, 4, 5, 8]", () => {
    assert.deepEqual(middle([1, 2, 7, 4, 5, 8]), [7, 4]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});