/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let ret = Infinity;
    let startIdx = 0;
    let arr = wordsDict;

    let firstVisited = false;
    let secondVisited = false;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === word1){
            if(secondVisited){
                ret = Math.min(ret, i - startIdx);
                startIdx = i;
                secondVisited = false;
                firstVisited = true;

            }else{
                if(firstVisited && arr[i] ===word2){
                    ret = Math.min(ret, i - startIdx);
                }
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
                if(secondVisited && arr[i] === word1){
                    ret = Math.min(ret, i - startIdx);
                }
                startIdx = i;
                secondVisited = true;
            }
        }
    }

    return ret
};
