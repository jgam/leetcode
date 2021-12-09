/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.arr = wordsDict;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let ret = Infinity;
    let startIdx = 0;
    let arr = this.arr;
    
    let firstVisited = false;
    let secondVisited = false;
    
    for(let i = 0; i < this.arr.length; i++){
        if(arr[i] === word1){
            if(secondVisited){
                ret = Math.min(ret, i - startIdx);
                startIdx = i;
                secondVisited = false;
                firstVisited = true;
                
            }else{
                startIdx = i;
                firstVisited = true;
            }
        }else if(arr[i] === word2){
            if(firstVisited){
                ret = Math.min(ret, i - startIdx);
                startIdx = i;
                firstVisited = false;
                secondVisited = true;
            }else{
                startIdx = i;
                secondVisited = true;
            }
        }
    }
    
    return ret
};
