class Heap{
    constructor(){
        this.arr = [];
    }
    insert(num){
        //need to insert in O(logN)
        let start = 0;
        let end = this.arr.length;
        let curHalf = parseInt((end-start)/2);
        
        if(this.arr.length === 0){
            this.arr.push(num);
            return;
        }
        
        
        //find the spot where the num should be in
        if(num <= this.arr[start]){
            this.arr.unshift(num);
            return;
        }else if(num >= this.arr[end-1]){
            this.arr.push(num);
            return;
        }else{
            //the num should be in the middle
            while(end-start > 2){
                if(this.arr[start+curHalf] >= num){
                    end -= curHalf//end= 3
                    
                }else{
                    start += curHalf
                    
                }
                curHalf = parseInt((end-start) / 2)
            }
            
            //here we have start and end
            for(let i = start; i < end; i++){
                if(this.arr[i] <=num){
                    if(this.arr[i+1] >=num){
                        this.arr.splice(i+1, 0, num)
                        break;
                    }
                }else{
                    this.arr.splice(i,0,num);
                    break;
                }
            }
        }
        return;
    }
    extractMin(){
        return this.arr.shift();
    }
    
    extractMax(){
        return this.arr.pop();
    }
    
    size(){
        return this.arr.length;
    }
    
}

function cmp(first, second, third){
    let compArr = [first,second,third]
    compArr.sort((a,b) => a-b);
    return compArr;
}
var MedianFinder = function() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const {minHeap, maxHeap} = this;
    
    if(maxHeap.size() ===0){
        maxHeap.insert(num)
    }else if(minHeap.size() === 0){
        minHeap.insert(num)
    }else{
        let firstMedian = maxHeap.extractMax();
        let secondMedian = minHeap.extractMin();
        
        const [min,mid,max] = cmp(firstMedian,secondMedian, num)
        
        
        if(maxHeap.size() > minHeap.size()){
            //make it even size by adding it to minHeap
            
            maxHeap.insert(min);
            minHeap.insert(mid);
            minHeap.insert(max);
            
        }else{
            minHeap.insert(max);
            maxHeap.insert(mid);
            maxHeap.insert(min);
        }
    }
    return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const {maxHeap, minHeap} = this;
    if(maxHeap.size() === 0 && minHeap.size()===0){
        return null;
    }else if((maxHeap.size() > 0 && minHeap.size() ===0) || maxHeap.size() > minHeap.size()){
        let median = maxHeap.extractMax();
        maxHeap.insert(median)
        return median
    }else{
        let firstM = maxHeap.extractMax();
        let secondM = minHeap.extractMin();
        
        maxHeap.insert(firstM);
        minHeap.insert(secondM);
        
        return (firstM + secondM) / 2
        
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
