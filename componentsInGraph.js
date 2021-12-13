function componentsInGraph(gb) {
    // Write your code here
    let curMax = -Infinity;
    let curObj = {};
    
    for(let gg of gb){
        const[first, second] = gg;
        curMax = Math.max(curMax, Math.max(first,second));
    }
    
    let ranks = [];
    for(let i = 0; i < curMax+1; i++){
        ranks.push(-1);
    }
    
    for(let gg of gb){
        const[first,second] = gg;
        
        union(first,second);
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
        
        if(p1 !== p2){
            ranks[p2] = p1;
        }
        return;
    }
    for(let i = 0; i < ranks.length; i++){
        let key = find(i);
        
        if(key in curObj){
            curObj[key] += 1;
        }else{
            curObj[key] = 1;
        }
    }
    
    let fir = 0;
    let sec = Infinity;
    for(let val of Object.values(curObj)){
        fir = Math.max(fir, val);
        if(val !== 1){
            sec = Math.min(sec, val)
        }
    }
    return [sec === Infinity ? fir : sec, fir]
}
