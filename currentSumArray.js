var subarraySum = function(nums, k) {
    // subarray not the inner arrays so order is important
    let obj = {};

    let current = 0;
    let ret = 0;

    for(let i = 0; i < nums.length; i++){
        current += nums[i];
        
        if((current-k) in obj){
            ret += obj[current-k];
        }
        if(current ==k){
            ret += 1;
        }
        if(current in obj){
            obj[current] += 1;
        }else{
            obj[current] = 1;
        }
    }
    return ret;
};
