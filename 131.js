/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ret = [];
    let current = [];
    let visited = new Set();

    backtrack(s);
    return ret;

    function backtrack(currentString){
        if(currentString.length === 0){
            let flattened = [...current].join('..');
            if(!visited.has(flattened)){
                ret.push([...current]);
                visited.add(flattened)
            }
        }
        if(currentString.length === 1){
            current.push(currentString);
            let flattened = [...current].join('..');
            if(!visited.has(flattened)){
                ret.push([...current]);
                visited.add(flattened)
            }
            current.pop(currentString)

            
        }
        for(let i = 1; i < currentString.length+1; i++){
            let parsed = currentString.substring(0,i);
            if(isPalindrome(parsed)){
                current.push(parsed);
                backtrack(currentString.substring(i));
                current.pop(parsed);
            }
        }
    }

    function isPalindrome(str){
        for(let i = 0; i < parseInt(str.length/2)+1; i++){
            if(str[i] !== str[str.length-1-i]){
                return false;
            }
        }
        return true;
    }
};
