/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let curObj={};
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in curObj){
            curObj[nums[i]] += 1;
        }else{
            curObj[nums[i]] = 1;
        }
    }
    
    let arr = [];
    
    for(let key of Object.keys(curObj)){
        arr.push([key, curObj[key]]);
    }
    
    arr.sort((a,b) => b[1]-a[1]);
    
    
    let solution = []
    for(let i = 0; i <k;i++){
        solution.push(parseInt(arr[i][0]))
    }
    return solution
    
};
