/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let reps = [];
    
    for(let i = 0; i < n; i++){
        reps.push(i)
    }
    
    function find(node){
        if(reps[node] !== node){
            reps[node] = find(reps[node]);
        }
        return reps[node]
    }
    
    function union(f,s){
        let p1 = find(f);
        let p2 = find(s);
        
        reps[p2] = p1;
        
    } 
    
    for(let edge of edges){
        union(edge[0],edge[1])
    }
    
    let solution = 0;
    for(let i=0; i < reps.length; i++){
        if(i===reps[i]){
            solution += 1;
        }
    }
    
    return solution
};
