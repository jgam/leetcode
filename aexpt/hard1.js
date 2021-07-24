// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  // Write your code here.
	console.log(head)
	console.log(k)
	
	// create a new function that returns two linked list and can connect them with reversed order?
	
	//didnt work out
	
	// flatten it to an array	
	function flattenLinkedLists(lls, curHead){
		lls.push(curHead.value)
		
		if(curHead.next === null){
			return lls
		}else{
			return flattenLinkedLists(lls, curHead.next)
		}
	}
	
	// array to linkedlist again
	function arr2lls(curArr,curIndex){
		if(curIndex == curArr.length-1){
			//last
			return new LinkedList(curArr[curIndex])
		}else{
			var newll = new LinkedList(curArr[curIndex])
			newll.next = arr2lls(curArr, curIndex+1)
			return newll
		}
		
		
	}
	
	var lls = flattenLinkedLists([], head)
	console.log(lls)
	
	//now construct a linkedLists with flattened array and with nums
	const newSlice = k % lls.length
	
	console.log(newSlice)
	var newArr;
	
	if (newSlice < 0){
		// negative
		newArr = lls.slice(-newSlice).concat(lls.slice(0, -newSlice))
		console.log(newArr, 'minusss!!')
	}else if(newSlice == 0){
		newArr = lls.slice()
	}else{
		// positive
		newArr = lls.slice(-newSlice).concat(lls.slice(0, lls.length-newSlice))
		console.log(newArr, 'Plusss')
	}
	return arr2lls(newArr,0)
	// also we could do modular for further solution?
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;
