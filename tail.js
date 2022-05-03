const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
}

// Test Case
const fruits = ['apple', 'orange', 'pear', 'watermelon'];
tail(fruits);
assertEqual(fruits.length, 4);


