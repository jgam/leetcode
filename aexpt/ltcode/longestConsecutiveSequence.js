/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let curSet = new Set(nums)
    let curLength;
    let currentMax = 0;
    
    for(let num of curSet){
        if(curSet.has(num-1)){
            continue
        }
        curLength = 1;
        while(curSet.has(num+1)){
            num += 1
            curLength += 1
        }
        currentMax = Math.max(currentMax, curLength)
    }
    return currentMax
};
