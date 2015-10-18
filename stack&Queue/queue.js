"use strict"
function Queue()
{
 	this.stac=new Array();
 	this.dequeue=function(){
  		return this.stac.pop();
 	}
 	this.enqueue=function(item){
  		this.stac.unshift(item);
	 }
}