/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let lowDP = [];
    let highDP = [];
    
    for(let i = 0; i < nums.length-1; i++){
        let lowArr=[];
        let highArr=[];
        
        let curLow = nums[i];
        let curHigh = nums[i];
        
        for(let j =i+1; j< nums.length;j++){

            curLow = Math.min(curLow, nums[j]);
            curHigh = Math.max(curHigh, nums[j])
            
            lowArr.push(curLow);
            highArr.push(curHigh);
        }
        lowDP.push(lowArr);
        highDP.push(highArr);
    }
    
    let solution = 0;
    for(let i = 0; i < lowDP.length; i++){
        for(let j = 0; j < lowDP[i].length; j++){
            solution += highDP[i][j] - lowDP[i][j]
        }
    }
    return solution
};
