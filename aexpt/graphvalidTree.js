/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    console.log(n, edges)
    
    //dfs way
    
    // create adjacency list of each node as a key and children as neighbors
    let adjacency_list = {}
    for(let i = 0; i < n; i++){
        adjacency_list[i] = [];
    }
    
    for(let edge of edges){
        const[first, second] = edge;
        adjacency_list[first].push(second);
        adjacency_list[second].push(first);
    }
    
    console.log('adjacency list', adjacency_list)
    
    // visited as a set
    let visited = new Set();
    
    //do a dfs to check if the neighbors are already visited(if so, there is a cycle) + check PREVIOUS node to make sure it does not count as visited
    function dfs(key, prevKey=null){//returns false if cycle
        //first check if visited already contains the key
        if(visited.has(key)){
            return false
        }
        
        //then add current key to visited
        visited.add(key)
        
        //loop through to check
        for(let eachKey of adjacency_list[key]){
            // disregard prevKey
            if(eachKey === prevKey){
                continue
            }
            
            //run dfs on new node values
            if(!dfs(eachKey, key)){
                // but if detected cycle return false
                return false
            }
        }
        return true;
    }
    
    if(!dfs(0)){
        return false
    }
    return visited.size === n ? true : false
    
};
