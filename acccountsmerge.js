/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let ranks = new Array(accounts.length).fill(0).map((i,index) => index);
    let indexMap = new Map();
    let emailIndex = {};
    let visited = new Set();
    
    for(let i = 0; i< accounts.length; i++){
        const arr = accounts[i];
        for(let j = 1; j < arr.length; j++){
            //loop through acounts;
            if(!(visited.has(arr[j]))){
                emailIndex[arr[j]] = i;
                visited.add(arr[j]);
                let currentArr = indexMap.get(i) || [];
                indexMap.set(i, [...currentArr, arr[j]]);
            }
            union(i, emailIndex[arr[j]])
        }
    }
    
    //now loop through to find names with all the accounts
    
    indexMap.forEach((value,key) => {
        let curKey = key;
        if(ranks[key] !== key){
            curKey = find(key);
            let curArr = indexMap.get(curKey) || [];
            let addedArr = indexMap.get(key) || []
            indexMap.set(curKey, [...curArr, ...addedArr]);
            indexMap.delete(key);
        }
    })
    
    let solution = []
    indexMap.forEach((value, key) => {
        let name = accounts[key][0];
        let emails = indexMap.get(key);
        emails.sort();
        solution.push([name, ...emails])
    })
    
    return solution;
    
    function union(a,b){
        let p1=find(a);
        let p2=find(b);
        ranks[p2] = p1;
    }
    
    function find(node){
        if(node !== ranks[node]){
            ranks[node] = find(ranks[node]);
        }
        return ranks[node];
    }
};
