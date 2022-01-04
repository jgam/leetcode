/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let words = [];
    let spacesCount = 0;
    let currentIdx = 0;
    
    while(currentIdx < text.length){
        if(text[currentIdx] === " "){
            currentIdx += 1;
            spacesCount += 1;
        }else{
            let curIdx = currentIdx;
            let localWord = '';
            while(text[curIdx] !== " " && curIdx < text.length){
                localWord += text[curIdx];
                curIdx += 1;
            }
            currentIdx = curIdx
            words.push(localWord);
        }
    }
    if(words.length - 1 === 0){
        return words[0]+ ' '.repeat(spacesCount)
    }
    let reaminings = spacesCount % (words.length-1);
    let evenSpaces = " ".repeat(parseInt(spacesCount / (words.length-1)));
    let ret = words.join(evenSpaces);
    if(reaminings > 0){
        ret = ret +  ' '.repeat(reaminings);
    }
    return ret
};
