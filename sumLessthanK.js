/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a,b) => a-b);
    let ret = -Infinity;

    let i = 0;
    let j = nums.length-1;
    let current;

    while(i < j){
        current = nums[i]+ nums[j];
        if(current < k){
            i += 1;
            ret = Math.max(current,ret)
        }else{
            j -= 1;
        }
    }

    return ret == -Infinity ? -1 : ret;
    
};
