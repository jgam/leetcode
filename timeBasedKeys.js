var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let obj = [value, timestamp];
        
    if(this.map.has(key)){
        let temp = this.map.get(key);
        temp.push(obj);
        // temp.sort((a,b) => a[1] - b[1])
        this.map.set(key, temp);
    }else{
        this.map.set(key,[obj]);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return '';

    let left = 0;
    let values = this.map.get(key);
    let right =  values.length - 1;
    let ans = '';

    while(left <= right){
        let middle = Math.floor((left + right)/2);

        if(values[middle][1] <= timestamp){
            ans = values[middle][0];
            left = middle + 1;
        }

        if(values[middle][1] > timestamp){
            right = middle - 1;
        }
    }

    return ans;
};
