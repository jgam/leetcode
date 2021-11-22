/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    console.log(n, edges)
    const reps = [];
    
    for(let i = 0; i < n; i++){
        reps.push(i)
    }
    
    for(let edge of edges){
        const [first, second] = edge;
        
        const p1 = find(first);
        const p2 = find(second);
        
        reps[p2] = p1;
    }
    
    function find(node){
        if(reps[node] === node){
            return node
        }else{
            //path compression
            reps[node] = find(reps[node]);
            return reps[node];
        }
    }
    let solution = 0;
    for(let i = 0; i < reps.length; i++){
        if(reps[i] ===i){
            solution += 1
        }
    }
    
    return solution
};
