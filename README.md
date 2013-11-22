<h3>Data Structure implementation using Javascript</h3>

<h4>Singly Linked List</h4>
<span class="comments">// Try the following on the console</span><br/><br/>

<span class="comments">// Creating a New List</span><br/>
var newList = new DS.LinkedList(); <br/><br/>

<span class="comments">// Insert Nodes into the new LinkedList (inserted in the end of the list)</span><br/>
newList.inserNode("Node 1");<br/>
newList.insertNode("Node 2");<br/><br/>

<span class="comments">// Insert Node on specific location (index)</span><br/>
newList.insertAfter("Node 3", 1);<br/>
newList.insertAfter("Node 4", 20); <span class="comments">// if the index is out of bound it inserts in the end of the list</span><br/><br/>

<span class="comments">//Remove a node from the list</span><br/>
newList.removeNode("Node 2");<br/><br/>

<span class="comments">// Print all the nodes in the Linked List</span><br/>
newList.printList();<br/><br/>

<span class="comments">// You can also cascade the operations of inserting and printing</span><br/>
newList.insertNode("Node 5").printList();<br/>
</code>
 
<h4>Heap</h4>

<h4>Trees</h4>

<h4></h4>


