var maxProbability = function(n, edges, succProb, start, end) {
    let graph = new Map()
    // weighted undirected adj list
    for (let i = 0; i < edges.length; i++){
        let [edge1, edge2] = edges[i]
        if (!graph.has(edge1)){
            graph.set(edge1, [])
        }
        if (!graph.has(edge2)){
            graph.set(edge2, [])
        }
        graph.get(edge1).push([edge2, succProb[i]])
        graph.get(edge2).push([edge1, succProb[i]])
    }
    
    let queue = [[1.000,start]]
    let visited = new Set()
    while (queue.length){
        let [prob, node] = queue.shift()
        if (visited.has(node)) continue 
        visited.add(node)
        if (node === end){
            return prob
        }
        if (graph.has(node)){
            for (let [nextNode,nextProb] of graph.get(node)){
                if (!visited.has(nextNode)){
                    queue.push([nextProb*prob, nextNode])
                }
            }
        }
        queue.sort((a,b) => b[0]-a[0])
    }
    return 0
};
