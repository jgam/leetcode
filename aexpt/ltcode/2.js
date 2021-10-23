/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newObj = {}
    
    for(let num of nums){
        if (num in newObj){
            return true
        }else{
            newObj[num] = 1
        }
    }
    return false
};
