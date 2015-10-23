"use strict"
// LinkedList is a sequence of objects called nodes, each node has data and address(successor) of next node.
// JS has garbage collector; if you remove B from A->B->C since there is no refernce to B, the JS garbage collector will take care of it
function List(){
	// *********main part 
	// remember that when you are discussing a linked list in an interview, you must uder-stand whther it is singly linked or doubly linked list
	this.start = null;
	this.end = null;
	var makeNode = function(){
		return {
				data:null,
				next:null};
	};
	this.addToTail = function(data){
		if(this.start === null){
			this.start = makeNode();
			this.end = this.start;
		}else{
			this.end.next = makeNode();
			this.end = this.end.next;
		}
		this.end.data = data;
	};
	// **********************************
	this.addToFirst = function(data){
		var temp = makeNode();
		temp.next = this.start;
		this.start = temp;
		temp.data = data;
	};

	// deleting is a node straightforward
	// PREVIOUS_NODE.next <=== CURRENT_NODE.next
	// take care of head and tail as necessary
	// IMPORTANT : 1- check for null pointer 2- update the head or tail pointer as neccessary
	this.delete = function(data){
		 var current = this.start; 
 		 var previous = this.start; 
 		while (current !== null) { 
  			if (data === current.data) { 
   			if (current === this.start) { 
									    this.start = current.next; 
    									return; 
  										} 
 			if (current == this.end)
 			{
 				this.end = previous;
 			} 
  				previous.next = current. next; 
  				return; 
 			} 
 			previous = current; 
 			current = current.next; 
 			}
	};
	this.insertAfter = function(searchData, data){
		var current = this.start;
		while( current !== null){
			if( current.data === searchData){
				var temp = makeNode();
				temp.data = searchData;
				temp.next = current.next;
				if( current == this.end) this.end = temp;
				current.next = temp;
				return;
			}
		current = current.next;
		}
	};
	this.item = function(i){
		var current = this.start;
		while( current !== null){
			i--;
			if(i === 0) return current;
			current = current.next;
		}
		return null;
	};
}

// testing part
var list = new List();
for(var i = 1; i<= 10; i++){
	list.add(i);
};
console.log(list);