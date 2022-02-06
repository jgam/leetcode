/**
 * @param {string} s
 * @return {number}
 */
var minimumTime = function(s) {
    let f = 0;
    let z = s.length;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '1'){
            f = Math.min(i+1, f+2)
        }
        z = Math.min(z, f+s.length-i-1)
    }
    return z
};

