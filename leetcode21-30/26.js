/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var ret_list = [];
    for(let i = 0; i < nums.length; i++){
        if(ret_list.includes(nums[i])){
            continue;
        }
        else{
            ret_list.push(nums[i]);
        }
    }
    return ret_list;
};

console.log(removeDuplicates([1,1,2]));//shoud print [1,2]