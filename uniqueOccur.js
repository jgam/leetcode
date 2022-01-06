/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let curObj = {}
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i] in curObj){
            curObj[arr[i]] += 1;
        }else{
            curObj[arr[i]] = 1;
        }
    }
    
    let visited = new Set();
    
    for(let eachVal of Object.values(curObj)){
        if(visited.has(eachVal)){
            return false;
        }else{
            visited.add(eachVal)
        }
    }
    return true;
};
