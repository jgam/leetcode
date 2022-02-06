/**
 * @param {number} size
 */

var Bitset = function(size) {
    this.bits = []
    for(let i = 0; i < size; i++){
        this.bits.push('0')
    }
    
    this.zeroes = size;
    this.ones = 0;
    this.size = size;
    this.flipped=false;
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    if(this.flipped){
        if(this.bits[idx] !== "0"){
            this.bits[idx] = "0";
            this.zeroes -= 1;
            this.ones += 1
        }
    }else{
        if(this.bits[idx] !== "1"){
            this.bits[idx] = "1";
            this.zeroes -= 1;
            this.ones += 1
        }
    }
    
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if(this.flipped){
        if(this.bits[idx] !== "1"){
            this.bits[idx] = "1";
            this.zeroes += 1;
            this.ones -= 1
        } 
    }else{
       if(this.bits[idx] !== "0"){
            this.bits[idx] = "0";
            this.zeroes += 1;
            this.ones -= 1
        } 
    }
    
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    // complexity of N
    this.flipped = !this.flipped
    let temp = this.zeroes;
    this.zeroes = this.ones;
    this.ones = temp;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.ones === this.size
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.ones > 0
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.ones
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    if(this.flipped){
        let solution = ""
        for(let i = 0; i < this.bits.length; i++){
            if(this.bits[i] === "1"){
                solution += '0'
            }else{
                solution += '1'
            }
        }
        return solution
    }else{
        return this.bits.join('')
    }
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
