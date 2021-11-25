/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = [];
    
    for(let i = 0; i <s.length; i++){
        dp.push(new Array(s.length).fill(0))
    }
    
    let solution = 0;
    for(let j = 0; j < s.length; j++){
        let i = 0;
        let x = i;
        let y = j;
        while(y < s.length && x < s.length){
            if(x===y){
                dp[x][y] = 1;
                solution += 1;
            }else{
                if(y-x === 1 && s[y] === s[x]){
                    dp[x][y] = 1;
                    solution += 1;
                }else{
                    if(dp[x+1][y-1] && s[x]===s[y]){
                        dp[x][y] = 1;
                        solution += 1;
                    }else{
                        dp[x][y] = 0;
                    }
                }
            }
            x+=1
            y+=1;
        }
    }
    
    return solution
};
