/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let obj = {};
    let keys = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in obj){
            obj[s[i]] += 1;
        }else{
            obj[s[i]] = 1;
            keys.push(s[i])
        }
    }
    
    keys.sort((a,b) => obj[b] - obj[a])
    
    // check if it is greater than half of the strings
    if(obj[keys[0]] > (s.length%2 === 0 ? s.length/2 : parseInt(s.length/2) + 1)){
        return ""
    }
    
    //now start placing them
    let arr = new Array(s.length).fill(0);
    let keyIdx = 0;
    
    
    for(let i = 0; i < arr.length; i+= 2){
        if(obj[keys[keyIdx]] === 0){
            keyIdx += 1;
        }
        obj[keys[keyIdx]] -= 1;
        arr[i] = keys[keyIdx];
    }
    
    for(let i = 1; i < arr.length; i+=2){
        if(obj[keys[keyIdx]] === 0){
            keyIdx += 1;
        }
        obj[keys[keyIdx]] -= 1;
        arr[i] = keys[keyIdx];
    }
    return arr.join("")
};
