/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    
    
    //n^2
    let solutions = []
    console.log(nums)
    for(let i = 0; i < nums.length-2; i++){
        if(i !== 0){
            if(nums[i-1] !== nums[i]) twoSums(-nums[i],i)
        }else{
            twoSums(-nums[i],i)
        }
    }
    
    function twoSums(target, curIdx){
        let leftIdx = curIdx+1
        let rightIdx = nums.length-1
        while(rightIdx > leftIdx){
            if(nums[leftIdx] + nums[rightIdx] === target){
                solutions.push([nums[curIdx], nums[leftIdx], nums[rightIdx]])
                let currentIdx = leftIdx + 1
                
                while(currentIdx < rightIdx && nums[currentIdx] === nums[leftIdx]){
                    currentIdx += 1
                }
                console.log('currentIdx left', currentIdx)
                
                leftIdx = currentIdx
            }else if(nums[leftIdx] + nums[rightIdx] > target){

                let currentIdx = rightIdx - 1
                
                while(currentIdx > leftIdx && nums[currentIdx] === nums[rightIdx]){
                    currentIdx -= 1
                }
                rightIdx = currentIdx
            }else{
                let currentIdx = leftIdx + 1
                
                while(currentIdx < rightIdx && nums[currentIdx] === nums[leftIdx]){
                    currentIdx += 1
                }
                leftIdx = currentIdx
            }
        }
    }
    
    return solutions
};
