/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    console.log(n)
    
    var curNum = n
    if(curNum == 0){
        return false
    }
    while(true){
        if(curNum % 2 == 0){
            curNum /= 2;
        }else if(curNum == 1){
            return true
        }else{
            return false
        }
    }
};
