/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    let rotatedNumbers = {'0': '0','1':'1','6':'9','8':'8','9':'6'}
    n = String(n)
    let converted = ""
    for(let i = 0; i < n.length; i++){
        if(n[i] in rotatedNumbers){
            converted = rotatedNumbers[n[i]] + converted
        }else{
            return false
        }
    }
    if(n!=converted){
        return true
    }
    return false;
};
