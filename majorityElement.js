/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 0){
        return -1
    }else if(nums.length === 1){
        return nums[0];
    }
    
    let count = 1;
    let candidate = nums[0];
    
    for(let i = 1; i <nums.length; i++){
        if(nums[i] === candidate){
            count += 1;
        }else{
            count -= 1;
            if(count === 0){
                count = 1;
                candidate = nums[i];
            }
        }
    }
    
    return candidate
};
