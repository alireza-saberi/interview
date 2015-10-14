"use strict"
/*Write a method to replace all space in string with %20, you may assueme that the string has sufficient space at the end
of the string to hold the additional characters. an that you are given the true length of the string*/

// two scans: 1- counting spaces 2-in the reverse order, and edit the strings
// When we see a space, we copy %20 into the next spots, When we see a string the we copy the original character.

/* there is no problem with size of string/array in JS, so the will be bo scan one and two
but the point is using RegExp in this solution*/
function spaceReplacer(s){

	return s.replace(/ /g, "%20");
}

console.log(spaceReplacer('Ali Reza Saberi'));