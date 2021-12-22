function sortKSortedArray(array, k) {
  // Write your code here.
	let solution = [];
	
	let curHeap = new minHeap();
	
	for(let i = 0; i < k+1; i++){
		if(i > array.length-1){
			break;
		}
		curHeap.add(array[i])
	}
	
	curHeap.currentArr();
	
	for(let i = k+1; i < array.length; i++){
		if(i > array.length-1){
			break;
		}
		solution.push(curHeap.extract());
		curHeap.add(array[i]);
	}
	
	while(curHeap.getSize() >0){
		curHeap.currentArr();
		solution.push(curHeap.extract());
	}
	
	// create heap that is size of k
	console.log(solution)
  return solution
}

class minHeap{
	constructor(){
		this.arr = [];
	}
	
	currentArr(){
		console.log(this.arr);
	}
	
	getSize(){
		return this.arr.length;
	}
	
	add(num){
		this.arr.push(num);
		this.siftUp();
	}
	
	siftUp(){
		let currentIdx = this.arr.length-1;
		let parentIdx = currentIdx % 2 === 0 ? parseInt((currentIdx-1)/2) : parseInt((currentIdx) /2);
		while(currentIdx !== 0 && this.arr[parentIdx] >= this.arr[currentIdx]){
			this.swap(parentIdx, currentIdx);
			currentIdx = parentIdx;
			parentIdx = currentIdx % 2 === 0 ? parseInt((currentIdx-1)/2) : parseInt((currentIdx) /2);
		}
		return;
	}
	
	siftDown(){
		//current parent is the largest value
		let currentIdx = 0;
		let firstChild = currentIdx * 2 + 1;
		let secondChild = currentIdx * 2 + 2;
		let childIdx;
		if(this.arr.length < 3){
			childIdx = firstChild;
		}else{
			childIdx = this.arr[firstChild] < this.arr[secondChild] ? firstChild : secondChild;
		}
		while(this.arr[currentIdx] > this.arr[childIdx] && firstChild < this.arr.length){
			this.swap(currentIdx, childIdx);
			currentIdx = childIdx;
			firstChild = currentIdx * 2 + 1;
			secondChild = currentIdx * 2 + 2;
			if(this.arr.length<=secondChild){
				childIdx = firstChild;
			}else{
				childIdx = this.arr[firstChild] < this.arr[secondChild] ? firstChild : secondChild;
			}
		}
		return;
	}
	
	extract(){
		let poppedVal = this.arr[0];
		this.swap(0, this.arr.length-1);
		this.arr.pop();
		this.siftDown();
		return poppedVal;
	}
	
	swap(i,j){
		let temp = this.arr[j];
		this.arr[j] = this.arr[i];
		this.arr[i] = temp;
	}
}

// Do not edit the line below.
exports.sortKSortedArray = sortKSortedArray;
