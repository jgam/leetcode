/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    let node = [];
    let parent = [];
    for(let i = 0; i < isConnected.length; i++){
        parent.push(-1);
    }
    
    function union(parent, first, second){
        let firstSet = find(parent, first);
        let secondSet = find(parent, second);
        
        if(firstSet !== secondSet){
            parent[firstSet] = secondSet;
        }
    }
        
    function find(parent, i){
        if(parent[i] === -1){
            return i
        }
        return find(parent, parent[i])
    }
    
    let firstNum = 0;
    for(let eachConnected of isConnected){
        for(let secondNum=0; secondNum < eachConnected.length; secondNum++){
            if(secondNum !== firstNum && eachConnected[secondNum]){
                //both connected upadte parent array
                union(parent, firstNum, secondNum)
            }
        }
        firstNum += 1;
    }
    let ret = parent.filter(elem => elem == -1);
    return ret.length;
};
