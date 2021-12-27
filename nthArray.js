var findRoot = function(tree) {
    let visited = new Set();
    let solution = Infinity;
    let ptr;
    for(let eachTree of tree){
        if(dfs(eachTree)){
            ptr = eachTree
        }
    }
    
    function dfs(node){
        if(visited.has(node.val)){
            return false;
        }else{
            visited.add(node.val);
            for(let child of node.children){
                dfs(child)
            }
            return true;
        }
    }
    
    return ptr
};
