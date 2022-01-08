/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class minHeap{
    constructor(){
        this.arr = [];
    }
    
    add(num){
        this.arr.push(num);
        this.siftUp();
        return;
    }
    
    siftUp(){
        let curIdx = this.arr.length-1;
        let parentIdx = parseInt((curIdx-1)/2);
        
        while(this.arr[curIdx] < this.arr[parentIdx] && curIdx > 0){
            this.swap(curIdx, parentIdx);
            curIdx = parentIdx;
            parentIdx = parseInt((curIdx-1)/2);
        }
        
        return;
    }
    
    swap(i,j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
    
    extract(){
        let temp = this.arr[0];
        this.swap(0, this.arr.length-1);
        this.arr.pop();
        this.siftDown();
        return temp;
    }
    
    siftDown(){
        let curIdx = 0;
        
        let firstChildIdx = curIdx * 2 + 1;
        let secondChildIdx = curIdx * 2 + 2;
        
        while(firstChildIdx < this.arr.length && secondChildIdx < this.arr.length){
            let selectedIdx = this.arr[firstChildIdx] < this.arr[secondChildIdx] ? firstChildIdx : secondChildIdx;
            
            if(this.arr[curIdx] > this.arr[selectedIdx]){
                this.swap(curIdx, selectedIdx);
                curIdx = selectedIdx;
                firstChildIdx = curIdx * 2 + 1;
                secondChildIdx = curIdx * 2 + 2;
            }else{
                break
            }
        }
        
        if(firstChildIdx < this.arr.length){
            if(this.arr[curIdx] > this.arr[firstChildIdx]){
                this.swap(curIdx, firstChildIdx);
            }
        }
        return;
    }
}
var kthSmallest = function(matrix, k) {
    let heap = new minHeap();
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0;j < matrix[0].length; j++){
            heap.add(matrix[i][j])
        }
    }
    
    
    let solution;
    while(k !== 0){
        k -=1;
        solution = heap.extract();
    }
    return solution;
};
