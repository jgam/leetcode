/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let arr = [];
    let current = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            if(current > 0){
                arr.push(current)
                current = 0;
            }
            arr.push(0);
        }else{
            current += 1;
        }
    }
    if(current > 0){
        arr.push(current)
    }

    let ret = -Infinity;
    for(let i = 0; i < arr.length; i++){
        ret = Math.max(arr[i], ret);

        if(arr[i] === 0){
            ret = Math.max(ret, 1+(i!==0 ? arr[i-1]: 0) + (i!==arr.length-1? arr[i+1] : 0))
        }
    }
    return ret;
};
