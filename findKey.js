const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const findKey = function (object, callback) {
  let result = undefined;
  let objectKeys = Object.keys(object);
   for (let key of objectKeys) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
  return result;
};


let testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

//console.log(findKey( testObject, x => x.stars === 2)) // => "noma"

assertEqual(findKey(testObject, x => x.stars === 2), "noma");
assertEqual(findKey(testObject, x => x.stars === 3), "Akaleri");
assertEqual(findKey(testObject, x => x.stars === 4), undefined);


module.exports = findKey;