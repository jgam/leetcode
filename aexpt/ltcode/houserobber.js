/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // exceptions
    if(nums.length === 2){
        return Math.max(nums[0], nums[1])
    }else if(nums.length === 1){
        return nums[0]
    }else if(nums.length === 0){
        return -1
    }
    
    // this is recursive again
    let newArr = new Array(nums.length).fill(0)
    
    newArr[0] = nums[0]
    newArr[1] = nums[1]
    newArr[2] = nums[2] + nums[0]
    
    for(let i =3; i < nums.length; i++){
        newArr[i] = Math.max(newArr[i-2], newArr[i-3]) + nums[i]
    }
    
    return Math.max(newArr[newArr.length-1], newArr[newArr.length-2])
};
