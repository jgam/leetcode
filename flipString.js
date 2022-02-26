/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    let cur = 0;
    for(let i = 0 ; i < S.length; i++) {
        if(S.charAt(i) === '0') {
            // first flip all 0 into 1;
            cur++;
        }
    }
    let res = cur;
    for(let i = 0 ; i < S.length; i++) {
        if(S.charAt(i) === '0') {
            cur--;
        } else {
            cur++;
        }
        // change into 000111 case, 
        res = Math.min(res, cur);
    }
    
    return res;
    
};
