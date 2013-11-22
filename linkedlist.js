/****************************************************************
* Singly Linked list implementation (Node as Objects) using javascript
* 
* - Dinesh Purohit
*****************************************************************/

// Global Object DS - Data Structure
var DS = {};


// Listnode object which us used to create a new Node for the linked list
DS.ListNode = function(){
 this.item = null;
 this.next = null;
}


//Linked list class which handles all the list operations
DS.LinkedList = function(){
  // class keeps tract of the head node and the size of the list
  var head = null;
  var lastNode = null;
  var size = 0;  
 
  // Priveledge methods to perform linked list task
  this.printList = function(){
   if(size<1) console.log("No items present in the linked list. Add item to list using insert method");

   var currentNode = head;
   for(var i=1;i<=size;i++){
    	console.log("Node item: ", currentNode.item, " at location: ", i);
	currentNode = currentNode.next;
   }
  }
  
  // method to insert a new node
  this.insertNode = function(item){
   var node = new DS.ListNode();
   node.item = item;   
   //If the current list is empty point the list to the node which is created else point attach it as last node 
   if(head === null){
	head = node;
	lastNode = node;
    }else{
	lastNode.next = node;
	lastNode = node;
    } 
  size++;
  return this;	
  }

 // Delete a node from the list
  this.deleteNode = function(item){
   var currentNode = head, previousNode = head;
   var currentSize = size;
	
   // go through the list and check if the item is present 
   for(var i=1;i<=size;i++){
	// if the item is found delete it else do nothing
	if(currentNode.item === item){
	 var nextNode = currentNode.next;
	 previousNode.next = nextNode;
	 size--;	 	
	}else{
	 previousNode = currentNode;
	 currentNode = currentNode.next;	  	
	}
   }

  // If size did not change that means item was not in the list
    if(currentSize === size) console.log("Item not found");	
   return this;  
  }  
  
  // method to insert new node after some location 
  this.insertAfter = function(item, position){
   var currentNode = head;
   var node = new DS.ListNode();
   node.item = item;
   
   // if the position is greater than the size insert it in the end
   if(position >= size) {
	 this.insertNode(item); 
   	 return this;
    }

   // inserting the new node after the position 
   for(var i=1;i<=position;i++){
    if(i===position){
	var nextNode = currentNode.next;
	currentNode.next = node;
	node.next = nextNode;
	size++;
    }else{
   	currentNode = currentNode.next;
    }
   }
   return this;    
  }

 // Method to find the element at a specific location in the linked list 
 this.findNth = function(position){
  // if position is not in the range
  if(position > size) {console.log("There is no element on this position"); return;}
 
  var currentPosition = head;
  //if position is 1 than return the first element 
  if(position === 1){
     return currentPosition;
   }else{
   
   // iterate through the list to find the position
     for(var i=1;i<=position;i++){
       if(i==position){
      	return currentPosition;     
       }else{
        currentPosition = currentPosition.next;
       }
     }
   }
  } 

  // Retrive the size of the list
 this.getSize = function(){
  return size;
 } 
}


