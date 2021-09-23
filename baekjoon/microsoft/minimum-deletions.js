/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let charObj = {}
    for(let i = 0; i < s.length; i++){
        if(s[i] in charObj){
            charObj[s[i]] += 1
        }else{
            charObj[s[i]] = 1
        }
    }
    
    let curValues = Object.values(charObj)
    
    // Seongjin Way
    // let checkDuplicate = new Set(curValues)
    // if (curValues.length === checkDuplicate.size) return 0
    
    
    let ret = 0
    curValues.sort(function(a,b){return b-a})
    for(let i = 1; i < curValues.length; i++){
        if(curValues[i-1] === 0){
            ret += 0 - curValues[i]
            curValues[i] = 0
        }
        else if(curValues[i] >= curValues[i-1]){
            ret += curValues[i-1] - curValues[i] - 1
            curValues[i] = curValues[i-1] - 1
        }
    }
    
    return ret * -1
    
};
