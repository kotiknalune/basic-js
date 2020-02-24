module.exports = function countCats(matrix) {
  let count = 0,
  ears = "^^";

 for (let i = 0; i < matrix.length; i++) {
 	for (let j = 0; j < matrix[i].length; j++) {
 		if (matrix[i][j] == ears) {
 			count++;
 		}
 	}
 }
 return count;
};
