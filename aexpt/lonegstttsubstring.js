var lengthOfLongestSubstring = function(s) {
    let stringObj = {}
    let maxLength = 0;
    let startIndex = 0;
    
    for(let i =0; i < s.length; i++){
        if(s[i] in stringObj){
            startIndex = Math.max(startIndex, stringObj[s[i]])
        }
        stringObj[s[i]] = i+1;
        maxLength = Math.max(maxLength, i-startIndex+1);
    }
    
    if(s.length === 1){
        return 1
    }
    
    return maxLength;
};
