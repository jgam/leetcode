/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expand(i){
        let left = i-1;
        let right = i +1;
        
        let ret = s[i];
        
        while(left >= 0 && right < s.length){
            if(s[left] === s[right]){
                ret = s[left] + ret + s[right]
            }else{
                break
            }
            left -=1;
            right += 1;
        }
        
        left = i;
        right = i+1;
        let secondRet ='';
        
        while(left >= 0 && right < s.length){
            if(s[left] === s[right]){
                secondRet = s[left] + secondRet + s[right]
            }else{
                break;
            }
            left -=1;
            right += 1;
        }
        
        return secondRet.length > ret.length ? secondRet : ret;
    }
    
    let solution = '';
    for(let i = 0; i < s.length; i++){
        let current = expand(i);
        
        if(current.length > solution.length){
            solution = current;
        }
    }
    
    return solution
};
