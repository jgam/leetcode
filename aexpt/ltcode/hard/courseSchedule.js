/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let parentChildren = {}
    
    for(let i =0; i < numCourses; i++){
        parentChildren[i] = []
    }
    
    //construct the maps
    for(let eachPre of prerequisites){
        const [key,child] = eachPre
        parentChildren[key].push(child)
    }
    
    let visited = new Set()
    let solution = []
    
    let duplicated = false
    
    for(let key = 0; key < numCourses; key++){
        let curScopeVisited = new Set()
        if(visited.has(key)){continue}
        
        if(parentChildren[key].length){
            curScopeVisited.add(key)
            if(!dfs(parentChildren[key], visited, curScopeVisited,solution)) {
                duplicated = true
            }
            visited.add(key)
            solution.push(key)
        }else{
            visited.add(key)
            solution.push(key)
        }
    }
    
    function dfs(curArr, visited, curScopeVisited,solution){
        for(let key of curArr){
            if(curScopeVisited.has(key)){
                return false
            }
            if(visited.has(key)){continue}
            
            if(parentChildren[key].length){
                curScopeVisited.add(key)
                if(!dfs(parentChildren[key], visited, curScopeVisited, solution)){return false}
                curScopeVisited.delete(key)
                visited.add(key);
                solution.push(key)
            }else{
                visited.add(key);
                solution.push(key)
            }
        }
        return true
    }
    
    if(duplicated){
        return []}
    return solution
    
};
