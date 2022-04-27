/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    // disjoint set union - to get values
    let arr = [];
    for(let i = 0; i < s.length; i++){
        arr.push(i);
    }
    
    for(let pair of pairs){
        let small = Math.min(pair[0], pair[1]);
        let big = Math.max(pair[0], pair[1]);
        
        union(small, big);
    }
    
    for(let i = 0; i < arr.length; i++){
        if(i !== arr[i]){
            arr[i] = find(arr[i])
        }
    }
    
    let words = {}
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in words){
            words[arr[i]].push(s[i]);
        }else{
            words[arr[i]] = [s[i]];
        }
    }
    for(let key of Object.keys(words)){
        words[key].sort((a, b) => b.localeCompare(a))
    }
    
    // now construct ret string
    let ret = ""
    
    for(let i = 0; i < arr.length; i++){
        ret += words[arr[i]].pop()
    }
    return ret;
    
    
    // helper functions
    
    function find(node){
        if(arr[node] !== node){
            return find(arr[node])
        }
        return arr[node]
    }
    
    function union(f,s){
        let p1 = find(f);
        let p2 = find(s);
        
        if(p1!==p2){
            arr[p1] = p2;
        }
        return;
    }
};
