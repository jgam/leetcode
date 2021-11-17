/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let firstStack = [];
    let secondStack = [];
    
    for(let eachStr of s){
        firstStack = insert(eachStr,firstStack)
    }
    
    for(let eachStr of t){
        secondStack = insert(eachStr, secondStack)
    }
    
    function insert(oneCharacter,curArr){
        if(oneCharacter === "#"){
            curArr.pop()
        }else{
            curArr.push(oneCharacter)
        }
        return curArr
    }
    
    return firstStack.join("") === secondStack.join("")
};
