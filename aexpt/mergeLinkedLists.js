// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  // Write your code here.
	
	
	let solution = new LinkedList();
	let current = solution;
	
	while(headOne && headTwo){
		if(headOne.value > headTwo.value){
			console.log(headTwo.value);
			solution.next = headTwo;
			headTwo = headTwo.next;
			solution = solution.next;
		}else{
			console.log(headOne.value);
			solution.next = headOne;
			headOne = headOne.next;
			solution = solution.next;
		}
	}
	
	while(headOne){
		solution.next = headOne;
		solution = solution.next;
		headOne = headOne.next;
	}
	
	while(headTwo){
		solution.next = headTwo;
		solution = solution.next;
		headTwo = headTwo.next;
	}
	
	return current.next;
	
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
