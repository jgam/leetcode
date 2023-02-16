/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 2){
        return Math.max(nums[0], nums[1])
    }else if(nums.length === 1){
        return nums[0]
    }else if(nums.length===0){
        return 0;
    }
    
    let arr = [0,nums[0],nums[1]];
    let arr_2 = [0,0,nums[1],nums[2]];

    for(let i = 2; i < nums.length-1; i++){
        let val =Math.max(arr[arr.length-2], arr[arr.length-3])+nums[i]
        arr.push(val)
        if(i!==2){
            arr_2.push(Math.max(arr_2[arr_2.length-2], arr_2[arr_2.length-3])+nums[i])
        }
    }
    if(nums.length > 3){
        arr_2.push(Math.max(arr_2[arr_2.length-2], arr_2[arr_2.length-3])+nums[nums.length-1]);
    }

    return Math.max(Math.max(arr[arr.length-1], arr[arr.length-2]), Math.max(arr_2[arr_2.length-1], arr_2[arr_2.length-2]));


    
};
