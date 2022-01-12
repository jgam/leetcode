/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let adj_list = [];
    let indices = {};
    let paths = {}
    
    if(edges.length === 1){
        return edges[0]
    }else if(edges.length===0){
        return [0]
    }
    
    for(let i = 0; i < n; i++){
        adj_list.push([]);
        indices[i] = 0;
        paths[i] = [];
    }
    
    for(let edge of edges){
        const [first, second] = edge;
        indices[first] += 1;
        indices[second] += 1;
        
        paths[first].push(second);
        paths[second].push(first);
    }
    
    let queue = [];
    for(let i = 0; i < n; i++){
        if(indices[i] === 1){
            queue.push(i)
            indices[i] -= 1;
        }
    }
    
    let solution = [];
    let curQueue = [];
    while(queue.length > 0){
        // console.log(curQueue)
        solution.push(curQueue)
        curQueue = [];
        
        while(queue.length > 0){
            let curNode = queue.pop();
            for(let key of paths[curNode]){
                indices[key] -= 1;
                if(indices[key] === 1){
                    curQueue.push(key);
                }
            }
        }
        
        queue = [...curQueue];
    }
    return solution[solution.length-1]
};
