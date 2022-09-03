/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    console.log(n,k)
    //depending on digits need to create different values
    
    let ans = [];
    
    for(let i = 1; i < 10; i++){
        dfs(String(i),i,1);
    }
    
    function dfs(value, current, length){
        if(length === n){
            ans.push(value)
            return;
        }
        if(current+k < 10 && current-k >= 0){
            //two cases
            dfs(value+String(current-k),current-k,length+1);
            if(current-k !== current+k){
                dfs(value+String(current+k),current+k,length+1);
            }
        }else if(current+k < 10){
            dfs(value+String(current+k),current+k,length+1);
        }else if(current-k >= 0){
            dfs(value+String(current-k),current-k,length+1);
        }
        return;
        
    }
    
    return ans
};
