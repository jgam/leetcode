/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    console.log(numCourses, prerequisites);
    //create a adjacency list - {wanttoTake: [mustTakeBefore]}
    
    //run dfs wiht all the courses
    
    //dfs adds courses in order to the solution with looping through possible mustTakeBefore array, if its length is 0, add to the solution
    
    //key note here is to watch out for the forever loop - but not in this specific problem i think
    
    let adj_list = {}
    
    for(let i = 0; i < numCourses; i++){
        adj_list[i] = [];
    }
    
    for(let eachPre of prerequisites){
        let [toTake, beforeTake] = eachPre;
        adj_list[toTake].push(beforeTake);
    }
    
    let solution = []
    let courseTakenCareof = new Set();
    
    for(let key = 0 ; key < numCourses; key++){
        let visited = new Set();
        if(!dfs(key, visited)){
            return [];
        }
    }
    return solution
    
    function dfs(course, visited){
        if(courseTakenCareof.has(course)){
            return true;
        }
        if(visited.has(course)){
            return false;
        }
        
        visited.add(course)
        if(adj_list[course].length > 0){
            for(let eachCourse of adj_list[course]){
                if(!dfs(eachCourse, visited)){
                    return false
                }
            }
            adj_list[course] = [];
        }
        courseTakenCareof.add(course)
        solution.push(course)
        
        return true;
    }
};
