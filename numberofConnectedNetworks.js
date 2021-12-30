/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let ranks = new Array(n).fill(0).map((val,idx) => idx);
    let excessCables = 0;
    
    function union(a,b){
        let p1 = find(a);
        let p2 = find(b);
        
        if(p1===p2){
            excessCables += 1;       
        }else{
            ranks[p2] = p1;
        }
    }
    
    function find(node){
        if(node !== ranks[node]){
            ranks[node] = find(ranks[node]);
        }
        return ranks[node];
    }
    
    for(let connection of connections){
        const[first,second] = connection;
        union(first,second);
    }
    
    let visited = new Set();
    for(let i = 0; i < ranks.length; i++){
        let parent = find(ranks[i]);
        if(!(visited.has(parent))){
            visited.add(parent)
        }
    }
    return visited.size-1 <= excessCables ? visited.size-1 : -1
};
