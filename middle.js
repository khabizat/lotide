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

module.exports = middle;
