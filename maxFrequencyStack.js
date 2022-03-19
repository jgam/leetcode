
var FreqStack = function() {
    this.freq = {};
    this.group = {};
    this.maxfreq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let f ;
    if(val in this.freq){
        this.freq[val] = this.freq[val] + 1;
        f = this.freq[val];
    }else{
        this.freq[val] = 1;
        f = this.freq[val];
    }
    
    if(f > this.maxfreq){
        this.maxfreq = f;
    }
    if(f in this.group){
        this.group[f].push(val);
        
    }else{
        this.group[f] = [val]
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let x = this.group[this.maxfreq].pop();
    this.freq[x] -= 1;
    if(this.group[this.maxfreq].length === 0){
        this.maxfreq -= 1;
    }
    return x;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
