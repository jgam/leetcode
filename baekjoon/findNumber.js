/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var newHash = new Object();
    
    for(var i = 1; i < nums.length+1; i++){
        newHash[i] = 0
    }
    
    for(var i = 0; i < nums.length; i++){
        newHash[nums[i]] += 1
    }
    
    const ret = [];
    
    for(curKey in newHash){
        if(newHash[curKey] == 0){
           ret.push(parseInt(curKey)) 
        }
    }
    
    return ret
};
