function componentsInGraph(gb) {
    // Write your code here
    
    
    let curMax = -Infinity;
    
    for(let eachGB of gb){
        curMax = Math.max(curMax, Math.max(eachGB[0], eachGB[1]))
    }
    
    let ranks = [];
    for(let i = 0; i < curMax+1; i++){
        ranks.push(-1)
    }
    function find(node){
        if(ranks[node] !== -1){
            return find(ranks[node])
        }
        return node;
    }
    function union(f,s){
        let p1 = find(f);
        let p2 = find(s);
        if(p1!==p2){
            ranks[p2] = p1;
        }
    }
    
    for(let eachGb of gb){
        const [p1,p2] = eachGb;
        union(p1,p2);
    }
    let curObj = {};
    for(let i = 0; i < ranks.length; i++){
        let parent = find(i);
        if(parent !== -1){
            if(parent in curObj){
                curObj[parent] += 1;
            }else{
                curObj[parent] = 1;
            }  
        }
    }
    const values = Object.values(curObj)
    let sm = Infinity;
    let mx = -Infinity;
    
    for(let val of values){
        mx = Math.max(mx, val);
        if(val > 1){
            sm = Math.min(sm, val);
        }
    }
    
    return sm === Infinity ? [mx, mx] : [sm, mx]
    if(values.length > 1){
        return [values[0]+1,values[values.length-1]]
    }
    return []

}
