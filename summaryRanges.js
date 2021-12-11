/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let curStart = Infinity;;
    let solution = [];
    if(!(nums.length)){
        return nums
    }
    
    for(let i = 1; i <nums.length; i++){
        if(nums[i] - nums[i-1] > 1){
            if(curStart === Infinity){
                solution.push(String(nums[i-1]))
            }else{
                solution.push(String(curStart)+"->"+String(nums[i-1]))
            }
            curStart = Infinity
        }else{
            //same range continue;
            curStart = Math.min(curStart, nums[i-1])
        }
    }
    if(curStart !== Infinity){
        solution.push(String(curStart)+"->"+String(nums[nums.length-1]))
    }else{
        solution.push(String(nums[nums.length-1]))
    }
    return solution
};
