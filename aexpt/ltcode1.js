/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.arr = [];
    this.curSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.arr.length === this.size){
        const first = this.arr.shift();
        this.curSum -= first;
    }
    this.arr.push(val);
    this.curSum += val;
    return this.curSum / this.arr.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
