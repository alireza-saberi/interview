"use strict"

// Rotate an image for 90 degrees clockwise - anti-clockwise

// Rotating a matrix clock-wise mean transposing it and then interchangin columns
// Rotating a matrix clock-wise mean transposing it and then interchangin rows

function rotate90(matrix, n){
	// round 1 which we transpose the matrix
	for (var i = 0; i < n; i++){
		for(var j = i; j < n; j++){
			var temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	for(var i = 0; i < n/2; i++){
		for(var j = 0; j < n; j++){
			var temp = matrix[i][j];
			matrix[i][j] = matrix[n - 1 - i][j];
			matrix[n - 1 - i][j] = temp;
		}
	}
	return matrix;
}

var mat = [[1,2],[3,4]];
console.log(rotate90(mat,2));