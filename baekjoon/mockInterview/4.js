/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // array should be composed of even numbers
    // sort and add up the index%2=1
    nums.sort((a,b) => a-b)
    let ret = 0
    for(let i = 0; i < nums.length; i+=2){
        ret += nums[i]
    }
    return ret
};
