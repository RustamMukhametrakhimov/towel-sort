// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  if (matrix == []) return [];
  let numString = matrix.length;
  let numElements = 0;
  let arr = [];
  let tmparr = [];    
  for (let i = 0; i < numString; i++) {
    tmparr = matrix[i];
    if ((i % 2) == 1) {  
      tmparr.reverse();
    };
    numElements = tmparr.length;
    for (let j = 0; j < numElements; j++) {
      arr.push(matrix[i][j]);
    }
  }
  return arr;
}
