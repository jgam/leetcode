/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums
    }
    let pivotIndex = parseInt(nums.length/2)
    let pivot = nums[pivotIndex]
    nums.splice(pivotIndex,1)
    
    let leftArr = [];
    let rightArr = [];
    
    //N
    for(let eachNum of nums){
        if(eachNum > pivot){
            rightArr.push(eachNum);
        }else{
            leftArr.push(eachNum);
        }
    }
    // N
    
    return [...sortArray(leftArr), pivot, ...sortArray(rightArr)]
    
    
//     if (nums.length <= 1) return nums;
//     const pivot = nums.pop();
//     //N
//     const less = sortArray(nums.filter(n => n <= pivot));
    
//     //N
//     const more = sortArray(nums.filter(n => n > pivot));
//     return less.concat(pivot, more);
    
};
