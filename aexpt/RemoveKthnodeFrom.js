// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
	// turtle and rabbit pointer to check the kth counter
	let firstPointer = head;
	let secondPointer= head;
	let counter = 0;

	// calculate the counter
	while(counter < k+1){
		//it is wanting to remove the first value
		if(!secondPointer){
			//set the first value as with attributes with reference
			head.value = head.next.value;
			head.next = head.next.next
			return
		}
		secondPointer = secondPointer.next;
		counter += 1;
	}
	
	while(secondPointer){
		firstPointer = firstPointer.next;
		secondPointer = secondPointer.next;
	}
	
	//update the first pointer to next next
	firstPointer.next = firstPointer.next.next;
	return head
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
