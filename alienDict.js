/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const indegree = new Map();
    const graph = new Map();
    
    
    //construct map
    for(let word of words){
        for(let char of word){
            if(!graph.has(char)){
                graph.set(char, [])
            }
            
            if(!indegree.has(char)){
                indegree.set(char, 0)
            }
        }
    }
    
    //initialize maps
    for(let i = 0 ; i <words.length-1; i++){
        const minLength = Math.min(words[i].length, words[i+1].length);
        
        for(let j = 0; j < minLength; j++){
            if(words[i].length > words[i+1].length){
                if(words[i].startsWith(words[i+1])){
                    return ""
                }
            }
            if(words[i][j] !== words[i+1][j]){
                graph.get(words[i][j]).push(words[i+1][j])
                indegree.set(words[i+1][j], indegree.get(words[i+1][j])+1)
                break;
            }
        }
    }
    

    
    let queue = [];
    
    let solution = "";
    
    for(let eachDegree of indegree){
        if(eachDegree[1] === 0){
            queue.push(eachDegree[0])
            solution += eachDegree[0]
        }
    }
    
    while(queue.length){
        let node = queue.shift();
        
        for(let child of graph.get(node)){
            indegree.set(child, indegree.get(child)-1);
            if(indegree.get(child) === 0){
                queue.push(child)
                solution += child
            }
        }
    }
    return solution.length === indegree.size ? solution : ''
    
    
};
