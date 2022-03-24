var validPath = function(n, edges, start, end) {
    let adj_list = {}
    let reached = false;
    for(let i = 0; i < n; i++){
        adj_list[i] = [];
    }
    
    for(let edge of edges){
        let [first,second] = edge;
        
        adj_list[first].push(second);
        adj_list[second].push(first);
    }
    let visited = new Set();
    
    dfs(start)
    
    return reached
    
    function dfs(node){
        if(!(visited.has(node))){
            //only when not visited - to prevent cycles
            if(node === end){
                reached = true;
            }
            visited.add(node);
            for(let eachNode of adj_list[node]){
                dfs(eachNode, visited)
            }
        }
    }
};
