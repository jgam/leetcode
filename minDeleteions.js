/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let charFreq = {}
    for(let eachChar of s){
        if(eachChar in charFreq){
            charFreq[eachChar] += 1;
        }else{
            charFreq[eachChar] = 1;
        }
    }
    
    let freqs = Object.values(charFreq);
    let visited = new Set();
    let count = 0;
    for(let i = 0; i < freqs.length; i++){
        if(visited.has(freqs[i])){
            let current = freqs[i];
            // here it could be done with Heap
            while(visited.has(current) && current !== 0){
                count += 1;
                current -= 1;
            }
            visited.add(current);
        }else{
            visited.add(freqs[i])
        }
    }
    
    return count
};
