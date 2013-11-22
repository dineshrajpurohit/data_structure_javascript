/******************************************************
* Heap Data Structure implementation (Only Integers)
*
* Dinesh Purohit
******************************************************/


DS.Heap = function(){

}

DS.Heap.prototype = {

// creating a heap
 createHeap : function(arr){
	
	// go through the array and fix the heap - we keep 0th element empty
	for(var i=arr.length-1;i>=0;i--){
	//console.log(i);
	 var parent = Math.floor(i/2);
	 var swap = true;
	  //if parent is greater than child swap them
	 // console.log("Parent of ", arr[i], " is ", arr[parent], " at location", parent);
	while(swap){
	//console.log(parent);
	 if(arr[parent] > arr[i]){
	  	var temp = arr[parent];
		arr[parent] = arr[i];
		arr[i] = temp;
		parent = Math.floor(parent / 2);
	 }else{
		swap = false;
		}
         }
	}
	return arr;
 }

}


