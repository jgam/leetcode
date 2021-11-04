/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let curStr = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            continue
        }else{
            if(isLetter(s[i])){
                curStr += s[i].toLowerCase();
            }
        }
    }
    
    for(let i = 0; i < curStr.length; i++){
        if(curStr[i] === curStr[curStr.length-1-i]){
            continue
        }else{
            return false
        }
    }
    
    return true
    function isLetter(char){
        return ( (char >= 'A' &&  char <= 'Z') || (char >= 'a' &&  char <= 'z') || (char >= '0' && char <= '9'));
    }

};
