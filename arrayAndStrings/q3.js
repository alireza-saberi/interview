"use strict"
/* Given two strings, write a method to decide if once is a permutation of the other
confirm some details with interviewer

Assumptions: 1 - case-sensitive 2- white space is siginificant
if they have differnce length, they can not be anagrams */

// solution 1
/* if two strings are anagram then they have the same characters, but in different orders, therefore sort
characters in two anagrams in the same order. and then compare the results*/
function sort(s){
	var a = new Array();
	for (var i = 0; i < s.length; i++) {
		a[i] = s[i];
	};
	return a.sort();
}
function permutation(s1, s2){
	s1 = sort(s1);
	s2 = sort(s2);
	if(s1.length == s2.length){
		for(var j = 0; j < s1.length; j++){
			if (s1[j] !== s2[j]){
				return false;
			}
		}
		return true;
	}else{
		return false;
	};
}
console.log(permutation('alireza','rezaali'));

//solution 2
//check if two strings have idential character counts
// Go through the array and count how many each charracter may appear