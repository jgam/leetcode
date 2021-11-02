/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = []
    
    for(let i = 0; i < s.length+1; i++){
        dp.push(new Array(p.length+1).fill(false))
    }
    
    dp[0][0] = true;
    
    for(let i =1; i < dp[0].length; i++){
        if(p[i-1]==="*"){
            dp[0][i] = dp[0][i-1]
        }
    }
    
    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            if(p[j-1] === s[i-1]){
                if(dp[i-1][j-1]){
                    dp[i][j] = true
                }
            }else if(p[j-1] === "*"){
                if(dp[i-1][j] || dp[i][j-1]){
                    dp[i][j] = true
                }
            }else if(p[j-1] === "?"){
                if(dp[i-1][j-1]){
                    dp[i][j] = true
                }
            }
        }
    }
        
    return dp[dp.length-1][dp[0].length-1]
};
