// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
	let valueNode = new Map();
	
	while(head){
		
		if(valueNode.has(head.value)){
			if(valueNode.get(head.value).next.value !== head.next.value){
				valueNode.set(head.value, head);
			}else{
				return valueNode.get(head.value)
			}
		}else{
			valueNode.set(head.value, head);
		}
		head = head.next;
	}
	return -1
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;
