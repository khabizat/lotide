const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let s of source) {
    let removeItem = true;
    for (let r of itemsToRemove) {
      if (s === r) {
        removeItem = false;
      }
    }
    if (removeItem === true) {
      result.push(s);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const source = [1, 2, 3];
without(source, [2]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(source, [1, 2, 3]);


module.exports = without;