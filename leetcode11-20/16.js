/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var current_array = nums.sort(function(a, b){return a - b});

    console.log(current_array);

    
};

console.log(fourSum([0,-1,2,1,0,-2], 0));