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

    //function index division
    function index_division(curr_index){
        if(curr_index %2 == 0){
            curr_index = curr_index / 2;
        }
        else{
            curr_index = curr_index - 1;
            curr_index = curr_index / 2;
        }

        return curr_index;
    }

    while(false){
        if(curr_index %2 == 0){
            curr_index = curr_index / 2;
        }
        else{
            curr_index = curr_index - 1;
            curr_index = curr_index / 2;
        }
    }

    //finding the start
    var new_start = curr_index;
    while(true){
        new_start = index_division(new_start);

        if(nums[new_start] >= target){
            //increase the index
            

        }
        else{

        }   
    }
    //finding the end


};


console.log(searchRange([1,2,3,4,5],2));