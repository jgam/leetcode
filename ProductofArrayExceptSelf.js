/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //3N approach
    let lefts = []
    let rights = []
    
    
    //construct the lefts
    for(let i = 0; i < nums.length; i++){
        if(i===0){
            lefts.push(1)
        }else{
            lefts.push(lefts[i-1] * nums[i-1])
        }
    }
    
    
    // construct rights
    for(let i = nums.length-1; i > -1; i--){
        if(i=== nums.length-1){
            rights.unshift(1)
        }else{
            rights.unshift(rights[0] * nums[i+1])
        }
    }
    
    let solution = []
    
    for(let i = 0 ; i < nums.length; i++){
        solution.push(lefts[i] * rights[i])
    }
    
    return solution
};
