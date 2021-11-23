/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let uniqueStrings = s.split("")
    let curMax = 0;
    let mostFrequent = 0;
    let characterMap = {}
    
    //left and right index
    let left = 0;
    let right = 0;
    
    while(right < uniqueStrings.length){
        if(uniqueStrings[right] in characterMap){
            characterMap[uniqueStrings[right]] += 1;
        }else{
            characterMap[uniqueStrings[right]] = 1;
        }
        
        mostFrequent = Math.max(mostFrequent, characterMap[uniqueStrings[right]]);
        if(right - left + 1 - mostFrequent > k){
            //then we need to have while again for left increment
            while(right - left + 1 - mostFrequent > k){
                characterMap[uniqueStrings[left]] -= 1;
                left += 1
                
                mostFrequent = Math.max(characterMap[uniqueStrings[left]], mostFrequent)
            }
        }
        curMax = Math.max(curMax, right- left)
        right += 1
    }
    
    return curMax + 1
};
