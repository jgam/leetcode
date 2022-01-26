var kSimilarity = function(s1, s2) {
    
    
    let s1Arr = Array.from(s1);
    let s2Arr = Array.from(s2);
    const N = Infinity;
    
    
    return dfs(0, s1Arr, s2Arr);
    
    function dfs(idx, s1Arr, s2Arr){
        if(idx === s1Arr.length) return 0;
        
        if(s1Arr[idx] === s2Arr[idx]) return dfs(idx+1, s1Arr, s2Arr)
        
        let ans = N;
        
        for(let i = idx+1; i < s1Arr.length; i++){
            if(s1Arr[i] === s2Arr[idx]){
                [s1Arr[i], s1Arr[idx]] = [s1Arr[idx], s1Arr[i]];
                ans=Math.min(ans, dfs(idx+1, s1Arr,s2Arr)+1);
                [s1Arr[i], s1Arr[idx]] = [s1Arr[idx], s1Arr[i]];
                if(s2Arr[i] == s1Arr[idx]) break;
            }
        }
        return ans
    }
};
