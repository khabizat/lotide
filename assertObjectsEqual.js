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


const eqObjects = function(object1, object2) {
  let firstObjectKeys = Object.keys(object1);
  let secondObjectKeys = Object.keys(object2);
  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  }
  for (key of firstObjectKeys) {
    let object1Value = object1[key];
    let object2Value = object2[key];
    if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
      if (!eqArrays(object1Value, object2Value)) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, cd2)); // => false
assertObjectsEqual(eqObjects(cd, dc), true);
assertObjectsEqual(eqObjects(cd, cd2), false);