/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let ret =0;
    
    for(let num of set){
        if(set.has(num-1)){
            continue
        }
        let curLen = 1;
        while(set.has(num+1)){
            num = num+1
            curLen += 1;
        }
        ret = Math.max(ret, curLen)
    }
    
    return ret
};
