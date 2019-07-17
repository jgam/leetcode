/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort()
    console.log(nums)
    var ret = [];
    for(let i = 0; i<nums.length; i++){
        for(let j =i+1; j< nums.length; j++){
            let current = 0;
            current = current - nums[i] - nums[j];
            //the for loop range needs to be fixed here
            if(nums.slice(j).includes(current)){
                //this if needs to be checked
                if(ret.includes([nums[i],nums[j],current])){
                    continue
                }
                else{
                    ret.push([nums[i],nums[j],current]);
                }
            }
        }
    }
    console.log(nums.slice(5))
    return ret;
};