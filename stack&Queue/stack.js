"use strict"
function Stack(){
	this.stac = new Array();
	this.pop = function(){
		return this.stac.pop();
	}
	this.push =function(item){
		return this.stac.push(item);
	}
}
// If you really want to create a stack object that can only be used as a stack then you have to encapsulate an Array and expose only the push and pop methods.