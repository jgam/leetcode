/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let curMap = new Map();
    let curObj = {}
    
    for(let eachNum of nums){
        if(eachNum in curObj){
            curObj[eachNum] += 1;
        }else{
            curObj[eachNum] = 1;
        }
    }
    
    let comp = [];
    for(const[key, value] of Object.entries(curObj)){
        comp.push([key,value])
    }
    
    comp.sort((a,b) => b[1] - a[1])
    
    let solution = [];
    for(let i = 0; i < k; i++){
        solution.push(parseInt(comp[i][0]))
    }
    return solution
    
};
