/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let word1Index = Infinity;
    let word2Index = Infinity;
    let solution = Infinity;
    
    for(let i = 0; i < wordsDict.length; i++){
        if(wordsDict[i] === word1){
            word1Index = i;
            solution = Math.min(Math.abs(word2Index-word1Index), solution)
        }
        if(wordsDict[i] === word2){
            word2Index = i;
            solution = Math.min(Math.abs(word2Index-word1Index), solution)
        }
    }
    return solution === Infinity ? -1 : solution
    
    
};
