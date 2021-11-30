/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(n===1){
        return n
    }
    console.log(n, edges);
    
    let reps = [];
    let visited = new Set();
    let curTrees = {}
    
    for(let i = 0; i < n; i++){
        reps.push(i);
    }
    
    function find(node){
        if(reps[node] !== node){
            reps[node] = find(reps[node])
        }
        return reps[node]
    }
    
    function union(f,s){
        let p1 = find(f);
        let p2 = find(s);
        
            if(p1 === p2){
                //this supposedly checks cycle
                return false
            }
        
        visited.add(f)
        visited.add(s)
        //update p2 accordingly
        reps[p2] = p1;
        return true
    }
    
    for(let edge of edges){
        const [first, second] = edge;
        if(!union(first,second)) return false
    }
    
    let cur = 0;
    
    for(let i = 0; i < reps.length; i++){
        if(i === reps[i]){
            cur += 1;
        }
    }
    return cur === 1 && visited.size === n
    
};
