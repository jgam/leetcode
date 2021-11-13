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
    let word1Index = Infinity;
    let word2Index = Infinity;
    let solution = Infinity;
    
    for(let i = 0; i < this.arr.length; i++){
        if(this.arr[i] === word1){
            word1Index = i;
            solution = Math.min(solution, Math.abs(word2Index - word1Index));
        }
        
        if(this.arr[i] === word2){
            word2Index = i;
            solution = Math.min(solution, Math.abs(word2Index - word1Index));
        }
    }
    
    return solution === Infinity ? -1 : solution;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
