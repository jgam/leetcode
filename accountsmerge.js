/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    function find(node){
        if(node !== parent[node]){
            parent[node] = find(parent[node])
        }
        return parent[node];
    }
    
    function union(a,b){
        let p1 = find(a);
        let p2 = find(b);
        parent[p1] = p2;
        return;
    }
    
    let emailIndex = {}
    let parent = new Array(accounts.length).fill(0).map((i,index) => index)
    //this is where you save index with all the emails
    let indexMap = new Map();
    
    for(let i = 0; i < accounts.length; i++){
        let arr = accounts[i];
        for(let j = 1; j < arr.length; j++){
            if(!(arr[j] in emailIndex)){
                emailIndex[arr[j]] = i;
                let indexedArray = indexMap.get(i) || [];
                indexMap.set(i, [...indexedArray, arr[j]]);
            }
            union(i, emailIndex[arr[j]]);
        }
    }
    
    
    indexMap.forEach((val,key) => {
        if(parent[key] !== key){
            let curArr = indexMap.get(parent[key]) || [];
            let secondArr = indexMap.get(key) || [];
            indexMap.set(parent[key], [...curArr, ...secondArr]);
            indexMap.delete(key);
        }
    })
    
    let solution = []
    indexMap.forEach((val,key) => {
        let curArr = indexMap.get(key).sort()
        solution.push([accounts[key][0], ...curArr])
    })
    return solution
};
