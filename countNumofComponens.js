/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    let ids = []
    for(let i = 0; i < n; i++){
        ids.push(i)
    }
    
    for(let edge of edges){
        union(edge[0], edge[1], ids);

    }
    
    let sett = new Set();
    for(let i = 0; i < ids.length; i++){
        sett.add(find(i, ids))
    }
    return sett.size;
    
    function union(edge1, edge2, ids){
        let p1 = find(edge1, ids);
        let p2 = find(edge2, ids);
        ids[p1] = p2;
    }
    
    function find(edge,ids){
        if(ids[edge] !== edge){
            //path compression
            ids[edge] = find(ids[edge], ids);
        }
        return ids[edge];
    }
};
