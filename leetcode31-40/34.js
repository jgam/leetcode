//test
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var cond_num = 0;
    var curr_index = nums.length;
    var start = 0;
    var end = 0;

    while(true){
        if(curr_index %2 == 0){
            curr_index = curr_index / 2;
        }
        else{
            curr_index = curr_index - 1;
            curr_index = curr_index / 2;
        }
    }


};


console.log(searchRange([1,2,3,4,5],2));