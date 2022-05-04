/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in obj){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    
    let operations = 0;
    
    for(let key of Object.keys(obj)){
        let remaining = k - key;
        
        // what if key and remaining are the same
        
        if(remaining in obj){
            let minOperations;
            if(key == remaining){
                //same?
                minOperations = parseInt(obj[key]/2);
            }else{
                minOperations = Math.min(obj[key], obj[remaining]);
                obj[remaining] -= minOperations;
            }
            obj[key] -= minOperations;
            operations += minOperations;
        }
        
    }
    
    return operations
};
