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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let half = array.length / 2;
  //console.log('half = ' + half);
  let startSlice = Math.ceil(half - 1);
  //console.log('startSlice = ' + startSlice);
  let endSlice = Math.floor(half + 1);
  //console.log('endSlice = ' + endSlice);
  let result = array.slice(startSlice, endSlice);
  return result;
};

assertArraysEqual(middle([1, 2, 7, 4, 5]), [7]);
assertArraysEqual(middle([1, 2, 7, 4, 5, 8]), [7, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), [])
