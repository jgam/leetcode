//test
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1;
    }
    else if(n > 0){
        return Math.pow(x, n);
    }
    else{
        let new_var;
        new_var = parseFloat(n * -1);
        return 1/Math.pow(x,new_var);
    }
};
//completed
console.log(myPow(2,-3));