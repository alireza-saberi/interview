"use strict"
// LinkedList is a sequence of objects called nodes, each node has data and address of next node.
// JS has garbage collector; if you remove B from A->B->C since there is no refernce to B, the JS garbage collector will take care of it
function List(){
	this.start = null;
	this.end = null;
	var makeNode = function(){
		return {data:null, next:null};
	};
	this.add = function(data){
		if(this.start === null){
			this.start = makeNode();
			this.end = this.start;
		}else{
			this.end.next = makeNode();
			this.end = this.end.next;
		}
		this.end.data = data;
	};
	this.insertAsFirst = function(data){
		var temp = makeNode();
		temp.next = this.start;
		this.start = temp;
		temp.data = data;
	};
	this.delete = function(){
		 var current = this.start; 
 		 var previous = this.start; 
 		while (current !== null) { 
  			if (data === current.data) { 
   			if (current === this.start) { 
									    this.start = current.next; 
    									return; 
  										} 
 			if (current == this.end) this.end = previous; 
  			previous.next = current. next; 
  			return; 
 							} 
 			previous = current; 
 			current = current.next; 
 			}
	};
}

// testing part
var list = new List();
for(var i = 1; i<= 10; i++){
	list.add(i);
};
console.log(list);