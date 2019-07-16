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
    nums = ret_list;
    return ret_list.length;
};


let nums = [1,1,2,2];
// nums is passed in by reference. (i.e., without making a copy)
let len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (let v= 0; v < len; v++){
    console.log(nums[v]);
}