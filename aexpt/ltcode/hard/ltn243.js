/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    console.log(wordsDict, word1, word2);
    let curObj = {1: [], 2:[]}
    
    for(let index in wordsDict){
        if(wordsDict[index] === word1){
            curObj[1].push(parseInt(index))
        }else if(wordsDict[index] === word2){
            curObj[2].push(parseInt(index))
        }else{
            continue
        }
    }
    
    let first = curObj[1]
    let second = curObj[2]
    
    console.log(first, second)
    // first.sort()
    // second.sort()
    
    let firstIndex = 0;
    let secondIndex = 0;
    let curMin = Infinity;
    
    while(secondIndex < second.length && firstIndex < first.length){
        curMin = Math.min(curMin, Math.abs(first[firstIndex]-second[secondIndex]));
        
        if(first[firstIndex] > second[secondIndex]){
            secondIndex += 1
        }else{
            firstIndex += 1
        }
    }
    console.log(curMin)
    return curMin
};
