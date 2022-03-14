// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function invertedBisection(head) {
  // Write your code here.
	// console.log(head)
	let ptr = head;
	
	let length = 1;
	while(ptr.next){
		length += 1;
		ptr = ptr.next;
	}
	if(length === 1){
		return head
	}
	if(length % 2 ===0){
		//even
		let [newHead,newTail,left] = invert(head,length/2)
		let [secondHead,secondTail,secondLeft] = invert(left, length/2);
		newTail.next = secondHead;
		return newHead
	}else{
		// odd
		let [newHead,newTail,left] = invert(head,parseInt(length/2))
		newTail.next = left;
		newTail = newTail.next;
		left = left.next;
		let [secondHead,secondTail,secondLeft] = invert(left, parseInt(length/2));
		newTail.next = secondHead;
		return newHead
	}
	
	function invert(current, length){
		let prev= null;
		let cur= current;
		let next = cur.next;
		let tail = cur
		while(length > 0){
			cur.next = prev;
			prev = cur;
			cur = next;
			if(next){
				next = next.next;
			}else{
				break
			}
			length-=1;
		}
		return [prev,tail,cur]
	}
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.invertedBisection = invertedBisection;
