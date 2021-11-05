/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let curSet = new Set(nums);
    let curLength = 0;
    let solution = -Infinity;
    
    
    for(let num of curSet){
        let currentNum = -Infinity;
        if(curSet.has(num-1)){
            currentNum = num;
            curLength = 1
            
            while(curSet.has(currentNum)){
                currentNum += 1
                curLength += 1
            }
            
            solution = Math.max(curLength, solution)
        }
    }
    return solution
};
