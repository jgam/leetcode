var MovingAverage = function(size) {
    this.arr = [];
    this.size = size;
    this.currentSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.size === this.arr.length){
        let shiftedNum = this.arr.shift();
        this.currentSum -= shiftedNum
    }
    this.arr.push(val);
    this.currentSum += val;
    return this.currentSum / this.arr.length
};
