const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([11,12,14]), 11);
assertEqual(head(["Kelly", "Pam", "Jim"]), "Kelly");
assertEqual(head([]), 5);

