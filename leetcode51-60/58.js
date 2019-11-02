/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ret_string = '';
    let ret='';
    if(s==="" || s===" "){
        return 0;
    }
    else if(s.length===1 || s==="a "){
        return 1;
    }
    for(let i = s.length-1; i >= 0; i--){
        //going back to the back of the string.
        console.log(s[i]);
        if(s[i] === " "){
            ret = ret_string.split("").reverse().join("");
            return ret.length;
        }
        ret_string += s[i];
    }
    return ret_string.length;
};
