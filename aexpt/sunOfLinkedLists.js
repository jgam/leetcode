// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
	let firstPointer = linkedListOne;
	let secondPointer = linkedListTwo;
	
	let aboveTen = false;
	let prev;
	
	while(firstPointer && secondPointer){
		let curValue = firstPointer.value + secondPointer.value
		curValue += aboveTen ? 1 : 0;
		console.log('curvalue is ',curValue, firstPointer, secondPointer)
		if(curValue >= 10){
			aboveTen = true;
		}else{
			aboveTen = false;
		}
		
		firstPointer.value = curValue % 10;
		prev = firstPointer
		
		firstPointer = firstPointer.next;
		secondPointer = secondPointer.next;
	}
	
	while(firstPointer){
		if(aboveTen){
			if(firstPointer.value + 1 > 9){
				firstPointer.value = 0;
				prev = firstPointer;
			}else{
				firstPointer.value += 1;
				aboveTen = false;
			}
		}
		firstPointer = firstPointer.next;
	}
	
	while(secondPointer){
		if(aboveTen){
			if(1 + secondPointer.value > 9){
				prev.next = new LinkedList(0);
				prev = prev.next;
			}else{
				prev.next = new LinkedList(1 + secondPointer.value)
				prev = prev.next;
				aboveTen = false;
			}
		}else{
			prev.next = new LinkedList(secondPointer.value);
			prev = prev.next;
		}
		secondPointer = secondPointer.next;
	}
	
	if(aboveTen){
		if(firstPointer){
			firstPointer.value += 1;
		}else if(secondPointer){
			prev.next = new LinkedList(1);
		}else{
			prev.next = new LinkedList(1)
		}
	}
	
	
  return linkedListOne;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
