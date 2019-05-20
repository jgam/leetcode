/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var a = x.toString();
    var condition = '';
    if (a[0]=='-'){
        condition = '-';
        a = a.slice(1);
    }
    var b = a.split("");
    var reverseArr = b.reverse();
    var ret = reverseArr.join("");
    var check = parseInt(ret);
    if(check >= 2147483648){
        return 0;
    }
    return condition+ret;
    
};