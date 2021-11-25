/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tmp = s;
    
    if(t.length > s.length){
        s = t;
        t = tmp;
    }
    
    let curObj = {}
    let isExist = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in curObj){
            curObj[s[i]] += 1;
        }else{
            curObj[s[i]] = 1;
            isExist += 1;
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(t[i] in curObj){
            curObj[t[i]] -= 1;
            if(curObj[t[i]] === 0){
                isExist -= 1;
            }
        }
    }
    
    return isExist === 0 ? true : false
};
