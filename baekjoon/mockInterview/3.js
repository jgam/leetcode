/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let curObj = {}
    
    for(let eachVal of strs){
        let curString = eachVal.split('').sort().join('');
        if(curString in curObj){
            curObj[curString].push(eachVal)
        }else{
            curObj[curString] = [eachVal]
        }
    }
    
    return Object.values(curObj)
};
