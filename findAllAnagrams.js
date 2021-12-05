/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //brute force with O(S*P)
    
    /*
    let pObj = {}
    let curChars = new Set();
    for(let i = 0; i < p.length; i++){
        if(p[i] in pObj){
            pObj[p[i]] += 1;
        }else{
            pObj[p[i]] = 1;
            curChars.add(p[i])
        }
    }
    
    let localObj = pObj;
    
    function checkNum(set, obj, idx){
        if(set.has(s[idx])){
            obj[s[idx]] -= 1;
            if(obj[s[idx]] === 0){
                set.delete(s[idx]);
            }
            if(set.size === 0){
                set.add(s[idx]);
                obj[s[idx]] += 1;
                return true
            }else{
                let ret = checkNum(set,obj,idx+1)
                
                set.add(s[idx]);
                obj[s[idx]] += 1;
                
                return ret;
            }
            // check the checkNum with idx++
        }else{
            return false
        }
    }
    
    
    let solution = [];
    for(let i = 0; i < s.length; i++){
        
        if(checkNum(curChars, localObj, i)){
            solution.push(i)
        }
    }
    
    return solution;
    */
    
    //time limit exceeded beause O(S*P)
    
    //.charCodeAt(0)
    
    let sArr = []
    let pArr = []
    if(p.length > s.length){
        return []
    }
    for(let i = 0; i < 26; i++){
        sArr.push(0);
        pArr.push(0);
    }
    
    for(let i = 0; i < p.length; i++){
        pArr[p[i].charCodeAt(0)-97] += 1;
        sArr[s[i].charCodeAt(0)-97] += 1;
    }
    
    let solution = [];
    if(JSON.stringify(pArr) == JSON.stringify(sArr)){
        solution.push(0);
    }
    
    for(let i = p.length; i < s.length; i++){
        sArr[s[i].charCodeAt(0)-97] += 1;
        sArr[s[i-p.length].charCodeAt(0)-97] -= 1;
        if(JSON.stringify(pArr) == JSON.stringify(sArr)){
            solution.push(i - p.length + 1);
        }
    }
    
    return solution
    
    
};
