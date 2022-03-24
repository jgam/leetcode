/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
    // construct fake nodes to pipes
    
    for(let i = 0; i < wells.length; i++){
        pipes.push([0, i+1, wells[i]])
    }
    
    pipes.sort((a,b) => a[2] - b[2])
    
    // create union-find ds
    let arr = new Array(n+1).fill(0).map((_,idx) => idx);
    let solution = 0;
    
    for(let pipe of pipes){
        let[first,second,w] = pipe;
        union(first,second,w);
    }
    console.log(arr)
    return solution
    
    function find(node){
        if(arr[node]!==node){
            let parent = find(arr[node])
            arr[node] = parent;
        }
        return arr[node]
    }
    
    function union(f,s,weight){
        let p1 = find(f);
        let p2 = find(s);
        
        if(p1!==p2){
            solution += weight
            arr[p1] = p2;
        }
    }
};
