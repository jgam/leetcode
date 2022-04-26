/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let edges = [];
    
    for(let i = 0; i < points.length-1; i++){
        for(let j = i+1; j < points.length; j++){
            edges.push([i,j, getDistance(points[i][0], points[i][1], points[j][0], points[j][1])])
        }
    }
    
    edges.sort((a,b) => a[2] - b[2]);
    let ret = 0;
    let arr = []
    let visited = new Set();
    
    for(let i = 0; i < points.length; i++){
        arr.push(i)
    }
    
    for(let edge of edges){
        let [first,second,w] = edge;
        let curKey = String([first,second]);
        if(!(visited.has(curKey))){
            union(first,second,w);
            visited.add(curKey)
        }
    }
    return ret
    
    function find(node){
        if(arr[node] !== node){
            return find(arr[node]);
        }
        return arr[node];
    }
    
    
    function union(f,s,weight){
        const p1 = find(f);
        const p2 = find(s);
        
        if(p1 !== p2){
            arr[p1] = p2;
            ret += weight
        }
    }
    
    function getDistance(fx,fy,sx,sy){
        return Math.abs(fx-sx) + Math.abs(fy-sy);
    }
};
