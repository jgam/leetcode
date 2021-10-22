/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const newObj = {}
    nums.forEach((num, i) => newObj[num] = i)
    
    for(let i in nums){
        if(target-nums[i] in newObj){
            console.log(typeof i, typeof newObj[target-nums[i]])
            if(parseInt(i) !== newObj[target-nums[i]]) {return [i, newObj[target-nums[i]]]}
        }
    }
    return -1
};
