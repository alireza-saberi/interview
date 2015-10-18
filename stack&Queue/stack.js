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