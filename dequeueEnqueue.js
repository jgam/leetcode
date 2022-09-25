/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = [];
    this.maxSize = k;
    this.currentSize = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    //inserts to the array
    if(this.arrSize === this.maxSize){
        this.arr.shift();
        this.arr.push(value);
    }else{
        this.arr.push(value);
        this.arrSize += 1;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    //deletes from the array
    if(this.currentSize > 0){
        this.arr.pop();
        this.currentSize -= 1;
        return true;
    }
    return false
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.currentSize === 0) return -1;
    return this.arr[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.currentSize === 0) return -1;
    return this.arr[this.currentSize-1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.maxSize === this.currentSize 
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
