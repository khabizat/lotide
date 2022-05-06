//Test
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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//Function
const takeUntil = function(array, callback) {
  resultArray = [];
  for (let i of array) {
    if (callback(i)) {
      return resultArray;
    }
    resultArray.push(i);
  }
};


const data1 = ['Dwight', 'Kelly', 'Michael', 'Pam', 'Jim', 'Toby', 'Angela'];
const results1 = takeUntil(data1, x => x === 'Toby');
assertArraysEqual(results1, ['Dwight', 'Kelly', 'Michael', 'Pam', 'Jim']);

console.log('---');

const data2 = ['green', 'yellow', 'green', 'red', 'yellow', 'green'];
const results2 = takeUntil(data2, x => x === 'red');
assertArraysEqual(results2, ['green', 'yellow', 'green']);