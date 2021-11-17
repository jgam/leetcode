/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let newSet = new Set(nums)
    let maxLen = 0;
    
    for(let eachNum of newSet){
        if(newSet.has(eachNum-1)){
            continue
        }else{
            let curLen = 0;
            let num = eachNum;
            while(newSet.has(num)){
                num += 1;
                curLen += 1
            }
            maxLen = Math.max(maxLen, curLen)
        }
    }
    return maxLen
};

// 100 4 200 1 3 2 
