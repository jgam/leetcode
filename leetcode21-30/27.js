/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    let current = 0;
    let subtract = 0;
    var ret = [1,2,3];
    
    while(count <= nums.length){
        count += 1;
        if(nums[current] == val){
            //console.log('here');
            count -= 1;
            nums.splice(current,1);
        }
        else{
            current+=1;
        }
    }
    return nums.length;
};