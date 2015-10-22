// write an algoritm such that if an element is an MxN matrix is 0, its entire row and column are set to 0

// One way around us to keed a second matrix which flags the zero locations. 
// but there is a better solution since the above question has O(MxN) space complexity.

// so the following solution reduce the space complexity

function zeroMask(matrix, m, n){
	var row = new Array(m);
	var column = new Array(n);
	for(var a = 0; a < m; a++ ){
		row[a] = false
	}
	for(var b = 0; b < n; b++ ){
		column[b] = false
	}	
	for (var i = 0; i < m; i++){
		for(var j = 0; j < n; j++){
			if(matrix[i][j] == 0){
				row[i] = true;
				column[j] = true;
			}
		}
	}
	// set matrix[i][j] to 0 if either row i or column j has 0
	for(var i = 0; i < m; i++){
		for(var j = 0; j < n; j++){
			if(row[i] || column[j]){
				matrix[i][j] = 0;
			}
		}
	}
	console.log(row);
	console.log(column);
	return matrix;
}

var Ali = [[1, 2, 4],[5, 6, 0]];
console.log(zeroMask(Ali, 2, 3));