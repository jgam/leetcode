function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Write your code here
    let ranks = [];
    let maxCityNum = 0;
    
    for(let eachRoad of cities){
        const[f,s] = eachRoad;
        maxCityNum = Math.max(maxCityNum, Math.max(f,s));
    }
    
    for(let i = 0; i < maxCityNum+1; i++){
        ranks.push(-1);
    }
    
    let visited = new Set();
    
    for(let eachCity of cities){
        const[first,second] = eachCity;
        visited.add(first);
        visited.add(second);
        union(first,second)
    }
    
    function union(fir,sec){
        let p1 = find(fir);
        let p2 = find(sec);
        
        //if updated have same parents-> dont update the representative node
        if(p1!==p2){
            ranks[p2] = p1;
        }
    }
    
    function find(node){
        if(ranks[node] !== -1){
            return find(ranks[node])
        }
        return node;
    }
    
    let curObj = {};
    
    for(let eachVal of visited){
        //each visited should there
        let key = find(eachVal)
        
        if(key in curObj){
            curObj[key] += 1;
        }else{
            curObj[key] = 1;
        }
    }
    
    let libraryCost = 0;
    let roadCost = 0;
    let curNodes = 0;
    console.log('curObj',curObj,c_lib,c_road)
    for(let road of Object.keys(curObj)){
        roadCost += curObj[road]-1;
        curNodes += curObj[road];
        libraryCost += 1;
    }
    return Math.min(c_lib*libraryCost + c_road*roadCost+(n-curNodes)*c_lib, n * c_lib);
}
