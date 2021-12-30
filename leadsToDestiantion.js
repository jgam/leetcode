var leadsToDestination = function(n, edges, source, destination) {
    // directed graph here
    
    // get adjacency list
    let curObj = {}
    for(let i = 0; i < n; i ++){
        curObj[i] = [];
    }
    
    for(let edge of edges){
        const [from, to] = edge;
        curObj[from].push(to);
    }
    
    let visited = new Set();

    function dfs(node){
        if (!(curObj[node].length > 0)){ // at a leaf after starting at source. has to be destination
            return node === destination
        }
        
        for (let neighbor of curObj[node]) {
            if (visited.has(neighbor)) return false // cycle detected
            visited.add(neighbor)
            if (!dfs(neighbor)) return false
            visited.delete(neighbor)
        }
        return true
    }
    return dfs(source)
};
