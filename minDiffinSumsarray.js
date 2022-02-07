/**
 * @param {number[]} nums
 * @return {number}
 */

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
	sum(){
        return this.arr.reduce(function (a, b) { return a + b; }, 0)
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
    
    current(){
        return this.arr
    }
	sum(){
        return this.arr.reduce(function (a, b) { return a + b; }, 0)
    }
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
var minimumDifference = function(nums) {
    // console.log(heap.extract())
    let limit = parseInt(nums.length/3)
    
    let first = new maxHeap();
    let second = new Heap();
    
    
    for(let i = 0; i < limit; i++){
        first.add(nums[i]);
        second.add(nums[nums.length-i-1])
    }
    let solution = first.sum() - second.sum();
    
    let curArr = [];
    let curArrSecond = [];
    
    let firstSum = first.sum();
    let secondSum = second.sum()
    curArr.push(firstSum)
    curArrSecond.unshift(secondSum)
    
    for(let i = 0; i < limit; i++){
        let curIdx = i + limit;
        
        
        first.add(nums[curIdx]);
        let firstMinus = first.extract();
        firstSum += nums[curIdx] - firstMinus
        curArr.push(firstSum);
        
        second.add(nums[nums.length-curIdx-1]);
        let secondMinus = second.extract();
        secondSum += nums[nums.length-curIdx-1] - secondMinus
        curArrSecond.unshift(secondSum);
    }
    
    
    for(let i = 0; i < curArr.length; i++){
        solution = Math.min(solution, curArr[i] - curArrSecond[i])
    }
    
    
    return solution
    
    
    
    
};
