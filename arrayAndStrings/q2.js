//  Implement a function that reverse a string

// This is a classic interview question. The only gotcha is to try do it in place and to be carefull for null character
function reverse(A){
	B = '';
	for (var i = A.length-1; i >= 0; i--){
		B += A[i];
		}
	return B;
};
console.log(reverse('Ali'));
