function arrayManipulation(n, queries) {
    // Write your code here
    let arr = []
    for(let i = 0; i < n+1; i++){
        arr.push(0)
    }
    let curMax = -Infinity;
    
    for(let query of queries){
        let [start,end,k] = query;
        arr[start-1] += k;
        arr[end] -= k;
    }
    let current = 0;
    for(let i = 0; i < arr.length; i++){
        current = Math.max(current, 0)
        current += arr[i]
        curMax = Math.max(curMax, current)
    }
    return curMax

}
