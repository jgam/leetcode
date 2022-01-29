var wordBreak = function(s, wordDict) {
    let dp = [];
    let word_set = new Set(wordDict);
    for(let i = 0; i < s.length+1; i++){
        dp.push(false)
    }
    dp[0] = true;
    
    for(let i = 1; i < s.length+1; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && word_set.has(s.substring(j,i))){
                dp[i] = true
                break
            }
        }
    }
    return dp[dp.length-1]
};
