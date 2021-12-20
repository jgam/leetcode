// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class Heap {
	constructor(){
		this.arr = [];
	};
	
	add(number){
		this.arr.push(number);
		this.siftUp();
	}
	
	siftUp(){
		let currentIdx = this.arr.length-1;
		let parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		
		while(this.arr[parentIdx] > this.arr[currentIdx]){
			this.swap(parentIdx, currentIdx, this.arr);
			currentIdx = parentIdx;
			parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		}
	}
	
	swap(first,second, arr){
		let temp = this.arr[first];
		this.arr[first] = this.arr[second];
		this.arr[second] = temp;
	}
	
	getParent(){
		return this.arr[0];
	}
	
	extract(){
		let valuePopped = this.arr[0];
		this.siftDown();
		return valuePopped;
	}
	
	getSize(){
		return this.arr.length;
	}
	
	siftDown(){
		this.swap(0, this.arr.length-1);
		this.arr.pop();
		
		let currentIdx = 0;
		let firstChild = currentIdx * 2 + 1;
		let secondChild = currentIdx * 2 + 2;
		
		while(this.arr.length > firstChild){
			let curIdx
			if(secondChild < this.arr.length){
				//then compare the two
				if(this.arr[firstChild] > this.arr[secondChild]){
					curIdx = secondChild;
				}else{
					curIdx = firstChild;
				}
			}else{
				// the last floor
				curIdx = firstChild;
			}
			
			if(this.arr[curIdx] < this.arr[currentIdx]){
				this.swap(currentIdx, curIdx, this.arr);
				currentIdx = curIdx;
				firstChild = currentIdx *2 + 1;
				secondChild = currentIdx * 2 + 2;
			}else{
				break;
			}
		}
	}
}

class maxHeap {
	constructor(){
		this.arr = [];
		console.log('maxheap created!');
	};
	
	add(number){
		this.arr.push(number);
		this.siftUp();
	}
	
	getSize(){
		return this.arr.length;
	}
	
	siftUp(){
		let currentIdx = this.arr.length-1;
		let parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		
		while(this.arr[parentIdx] < this.arr[currentIdx]){
			this.swap(parentIdx, currentIdx, this.arr);
			currentIdx = parentIdx;
			parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		}
	}
	
	swap(first,second, arr){
		let temp = first;
		arr[first] = arr[second];
		arr[second] = temp;
	}
	
	getParent(){
		return this.arr[0];
	}
	
	extract(){
		let valuePopped = this.arr[0];
		this.siftDown();
		return valuePopped;
	}
	
	siftDown(){
		this.swap(0, this.arr.length-1);
		this.arr.pop();
		
		let currentIdx = 0;
		let firstChild = currentIdx * 2 + 1;
		let secondChild = currentIdx * 2 + 2;
		
		while(this.arr.length > firstChild){
			let curIdx
			if(secondChild < this.arr.length){
				//then compare the two
				if(this.arr[firstChild] < this.arr[secondChild]){
					curIdx = secondChild;
				}else{
					curIdx = firstChild;
				}
			}else{
				// the last floor
				curIdx = firstChild;
			}
			
			if(this.arr[curIdx] > this.arr[currentIdx]){
				this.swap(currentIdx, curIdx, this.arr);
				currentIdx = curIdx;
				firstChild = currentIdx *2 + 1;
				secondChild = currentIdx * 2 + 2;
			}else{
				break;
			}
		}
	}
}


class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
    this.median = null;
		this.minHeap = new Heap();
		this.maxHeap = new maxHeap();

  }

  insert(number) {
    // Write your code here.
		if(this.minHeap.getSize() === this.maxHeap.getSize()){
			if(this.maxHeap.getParent() >number){
				this.maxHeap.add(number)
			}else{
				this.minHeap.add(number);
				let poppedFromMinHeap = this.minHeap.extract();
				this.maxHeap.add(poppedFromMinHeap)
			}
		}else{
			//max heap size larger
			if(this.maxHeap.getParent() <number){
				this.minHeap.add(number)
			}else{
				this.maxHeap.add(number);
				let poppedFromMaxHeap = this.maxHeap.extract();
				this.minHeap.add(poppedFromMaxHeap);
			}
		}
  }
	
  getMedian() {
		if(this.maxHeap.getSize() === this.minHeap.getSize()){
			return (this.maxHeap.getParent() + this.minHeap.getParent()) / 2
		}else{
			return this.maxHeap.getParent();
		}
  }
}


// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
