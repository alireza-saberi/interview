// implement an algorithm that determine if a string has all unique characters. What  if you cannot use additional data structure
// Ask if the string is in ASCII or in Unicode

// optimization : return false in the length of string is greater than length of available characters!
//O(n)
function solution1(A){
	var counter = {},
		elm;

	if (A.length <= 256){
		
		for (var i = 0; i< A.length ;i++){
			elm = A[i];
			if(!counter[elm]){
				counter[elm] = 1;
			}
			else{
				return false;
			}
		};
	}else{
		return false;
	}
	return true;
}

A = [4, 3, 5, 6];
console.log(solution1(A));

// solution2: comparing every character to others in the string This is will O(n2)
