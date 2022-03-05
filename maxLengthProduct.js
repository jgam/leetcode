/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let currentZeroIndex = -1;
    let currentNegatives = 0;
    let positiveLength = 0;
    let secondNegative=-1;
    let maxLength = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            currentZeroIndex = i;
            currentNegatives = 0;
            secondNegative=-1
            positiveLength = 0;
        }else if(nums[i] < 0){
            currentNegatives += 1;
            if(currentNegatives === 1){
                secondNegative = i;
            }
            positiveLength = 0;
        }else{
            positiveLength += 1;
        }
        
        if(currentNegatives % 2 === 0){
            maxLength = Math.max(maxLength, i-currentZeroIndex)
        }else{
            //remove the first negtive number to see
            if(secondNegative !== -1){
                maxLength = Math.max(maxLength, i-secondNegative);
            }
        }
        maxLength = Math.max(maxLength, positiveLength)
    }
    
    
    return maxLength
};
