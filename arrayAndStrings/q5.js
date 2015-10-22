"use strict"
// Buffer strings
// Implement a basic string compression using counts of repeated charater aabcccccaaa would become a2b1c5a3
// If the compress string would not become smaller than the original string, your method should return the original string

// Method 1 : We iterate through the string, coping characters to a new string, and counting the repeats
// The concatination in string is expensive super slow. and thake O(n2)
function compress(s){
	var s2 = "";
	for(var i = 0; i < s.length; i++){
		var s2 = s2 + s[i];
		var count = 1;
		 while(s[i] === s[i+1]){
			count++;
			i++;
		}
		s2 = s2  + count.toString();
	}
	if (s.length <= s2.length){
		return s;
	}else{
		return s2;
	};
}
console.log(compress('aaaallli'));

// method 2 StringBuffer : in this type of problems, we convert the  problem into an array, and join the final answer 
function compress2(s){
	var s2 = [];
	for(var i = 0; i < s.length; i++){
		s2.push(s[i]);
		var count = 1;
		while(s[i] === s[i+1]){
			count++;
			i++;
		}
		s2.push(count);
	}
	if (s.length <= s2.length) {
		return s;
	} else{
		return s2.join("");
	}
}
console.log(compress2('aaaallli'));
