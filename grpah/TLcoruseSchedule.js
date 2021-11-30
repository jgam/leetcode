/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let visited = new Set();
    let courses = []
    // create info about course. Doubly LinkedLists in Objects
    let curObj = {}
    for(let i = 0; i < numCourses; i++){
        curObj[i] = [];
    }
    
    for(let eachRequisite of prerequisites){
        //destructuring
        const [first, second] = eachRequisite;
        
        //constructing dbL
        curObj[first].push(second);
    }
    
    
    //dfs on every course
    // while -> find whether a cycle (we can detect with prevNode or ParentNode to indicate it is not cycle)
    //when not meeting any of above condition return false
    function dfs(curCourse,prevNode=-1,curVisited){
        curVisited.add(curCourse)
        visited.add(curCourse);
        courses.unshift(curCourse);
        for(let eachChild of curObj[curCourse]){
                if(curVisited.has(eachChild)){
                    return false;
                }
                
                if(!visited.has(eachChild)){
                    if(!dfs(eachChild, curCourse,curVisited)){
                        return false
                    };
                }
        }
        curVisited.delete(curCourse)
        return true
    }
    
    for(let eachCourse = 0; eachCourse < numCourses; eachCourse++){
        let curVisits = new Set();
        if(!visited.has(eachCourse)){
            if(!dfs(eachCourse,-1,curVisits)){
                return false
            }
        }
    }
    
    return courses.length === numCourses
    //compare visited set with numCourses, if same, return true else false
};
