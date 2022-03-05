/**
 * @param {number[]} sticks
 * @return {number}
 */

class Heap{
    constructor(){
        this.heaps = [];
    }
    
    add(number){
        this.heaps.push(number);
        this.siftUp();
        return null
    }
    
    extract(){
        let extracted = this.heaps[0];
        this.siftDown();
        return extracted;
    }
    
    swap(first,second){
		let temp = this.heaps[first];
		this.heaps[first] = this.heaps[second];
		this.heaps[second] = temp;
	}
    
    siftUp(){
        let currentIdx = this.heaps.length-1;
		let parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		
		while(this.heaps[parentIdx] > this.heaps[currentIdx]){
			this.swap(parentIdx, currentIdx);
			currentIdx = parentIdx;
			parentIdx = currentIdx % 2 ===0 ? (currentIdx-2)/2 : (currentIdx-1)/2;
		}
    }
    
    siftDown(){
        this.swap(0, this.heaps.length-1);
		this.heaps.pop();
		
		let currentIdx = 0;
		let firstChild = currentIdx * 2 + 1;
		let secondChild = currentIdx * 2 + 2;
		
		while(this.heaps.length > firstChild){
			let curIdx
			if(secondChild < this.heaps.length){
				//then compare the two
				if(this.heaps[firstChild] > this.heaps[secondChild]){
					curIdx = secondChild;
				}else{
					curIdx = firstChild;
				}
			}else{
				// the last floor
				curIdx = firstChild;
			}
			
			if(this.heaps[curIdx] < this.heaps[currentIdx]){
				this.swap(currentIdx, curIdx, this.heaps);
				currentIdx = curIdx;
				firstChild = currentIdx *2 + 1;
				secondChild = currentIdx * 2 + 2;
			}else{
				break;
			}
		}
    }
}
var connectSticks = function(sticks) {
    // need to use heaps
    let curHeap = new Heap();
    
    let total = 0;
    
    for(let stick of sticks){
        curHeap.add(stick);
    }
    
    for(let i = 0 ; i < sticks.length-1; i++){
        let first = curHeap.extract();
        let second = curHeap.extract();
        
        total += first + second;
        
        curHeap.add(first+second);
    }
    
    return total
};
