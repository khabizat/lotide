const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns ['orange', 'pear', 'watermelon'] for ['apple', 'orange', 'pear', 'watermelon']", () => {
    assert.deepEqual(tail(['apple', 'orange', 'pear', 'watermelon']),['orange', 'pear', 'watermelon']);
  });
  it("returns [] for ['orange']", () => {
    assert.deepEqual(tail(['orange']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});