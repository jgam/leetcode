/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let curObj = {}
    let solution = 0;

    let currentOnes = 0;
    let currentZeroes = 0;
    
    let oppositeNumbers = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '1'){
            if(currentZeroes > 0){
                oppositeNumbers = currentZeroes;
                currentZeroes = 0;
            }
            currentOnes += 1;
            
            if(oppositeNumbers >= currentOnes){
                solution += 1;
            }
        }else{
            if(currentOnes > 0){
                oppositeNumbers = currentOnes;
                currentOnes = 0;
            }
            currentZeroes += 1;
            if(oppositeNumbers >= currentZeroes){
                solution += 1
            }
        }
    }
    return solution
};
