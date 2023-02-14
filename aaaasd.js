var findSubsequences = function(nums) {
    let ret = [];
    let current = [];
    let visited = new Set();

    backtrack(0)
    return ret;

    function backtrack(start){
        for(let i = start; i < nums.length; i++){
            if(current.length === 0 || nums[i] >= current[current.length-1]){
                current.push(nums[i]);
                addIfGood([...current])
                backtrack(i+1);
                current.pop();
            }
        }
    }

    function addIfGood(arr){
        if(arr.length < 2){
            return;
        }
        if(!visited.has(arr.join(','))){
            ret.push(arr);
            visited.add(arr.join(','))
        }
    }
};
