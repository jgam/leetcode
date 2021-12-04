// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList,prev=null) {
  // Write your code here.
	if(!linkedList){
		return;
	}
	let pointer = linkedList;
	//check linked list
	if( prev && prev.value === pointer.value){
		prev.next = pointer.next;
		removeDuplicatesFromLinkedList(pointer.next, prev);
		return pointer;
	}
	removeDuplicatesFromLinkedList(pointer.next, pointer);
  return pointer;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
