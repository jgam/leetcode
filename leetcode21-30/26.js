/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = 0;
    let original_length = nums.length;
    var check = [];

    while(current < original_length){
        if(check.includes(nums[current])){
            nums.splice(current, 1);
            original_length -= 1;
            //current += 1;
            continue
        }
        else{
            check.push(nums[current]);
            current += 1;
        }
    }

    return nums.length;
};


let nums = [1,1,2,2];
// nums is passed in by reference. (i.e., without making a copy)
let len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (let v= 0; v < len; v++){
    console.log(nums[v]);
}
