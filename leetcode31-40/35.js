/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var boolean_switch = false;

    for(var i = 0; i < nums.length; i++){
        if(nums[i]==target){
            return i;
        }
        else if(nums[i] > target){
            return i;
        }
        else{
            continue;
        }
    }
    return nums.length;
};

console.log(searchInsert([1,3,5,6],5))