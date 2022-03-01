var getModifiedArray = function(length, updates) {
    let dp = new Array(length).fill(0);
    
    for(let eachUpdate of updates){
        let [start,end,num] = eachUpdate;
        
        dp[start] += num;
        if(end < length-1){
            dp[end+1] -= num;
        }
    }
    
    let curNum = 0;
    for(let i = 0; i < dp.length; i++){
        curNum = dp[i] + curNum;
        dp[i] = curNum;
    }
    return dp
    
};
