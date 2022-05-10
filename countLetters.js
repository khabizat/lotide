const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence){
  let results = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results.hasOwnProperty(letter)) {
        results[letter] += 1
      } else {
        results[letter] = 1
      }
    }
  }
  return results;
}

console.log(countLetters('Hi my name is Kabby'));

module.exports = countLetters;