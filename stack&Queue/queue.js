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
// Also name BUFFER
// FIFO based data structure

// A queue is useful when ever you have data to deal with and not enough time to deal with it all. You simply add the data
// you can't deal with to the queue and deal when it when you can. The queue ensures that it is dealt with in the order it arrived