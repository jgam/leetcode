var largestComponentSize = function(nums) {
    function find(node){
        if(ranks[node] !== node){
            ranks[node] = find(ranks[node])
        }
        return ranks[node];
    }
    
    function union(a,b){
        // console.log(a,b)
        let p1 = find(a);
        let p2 = find(b);
        
        //here compare all the gcds 
        // console.log(p1,p2,nums)
        if(compGCD(nums[p1],nums[p2])){
            ranks[p2] = p1;
            //ranksMap needs to be udpatd here as well
            ranksMap.set(nums[p1], new Set([...ranksMap.get(nums[p1]), ...ranksMap.get(nums[p2])]))
        }
        return;
    }
    
    //constructs common denominators in the ranksMap
    function constrcutGCD(number){
        let limit = parseInt(Math.sqrt(number));
        let current = new Set();
        for(let i = 1; i < limit+1;i++){
            if(number % i === 0){
                if(i == number/i){
                    if(i!== 1){
                        current.add(i)
                    }
                }else{
                    if(i!==1){
                        current.add(i)
                    }
                    if(number/i !== 1){
                        current.add(parseInt(number/i));                
                    }
                }
            }
        }
        ranksMap.set(number, current);
        return;
    }
    
    //returns true if firstRank and secondRank contains common factors
    function compGCD(firstRank,secondRank){
        let curBoolean = false;
        let firstCDs = ranksMap.get(firstRank);
        let secondCDs = ranksMap.get(secondRank);
        // console.log(firstRank,secondRank)
        firstCDs.forEach((value) => {
            if(secondCDs.has(value)){
                curBoolean = true;
            }
        })
        return curBoolean
    }
    
    
    let ranks = [];
    
    //this map keeps track of graph's representative value with gcds
    let ranksMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        ranks.push(i);
        constrcutGCD(nums[i])
    }
    // console.log(ranks,ranksMap)
    for(let i = 0; i < nums.length;i++){
        // this a little suspicious
        if(ranks[i] === i){
            for(let j =i+1; j< nums.length;j++){
                // console.log(i,j, nums)
                union(i,j)
            }    
        }
        
    }
    console.log(ranks)
    console.log(ranksMap)
    let curMax = -Infinity;
    let solutionObject = {}
    
    for(let i = 0; i < ranks.length; i++){
        let parent = find(ranks[i])
        if(parent in solutionObject){
            solutionObject[parent] += 1;
        }else{
            solutionObject[parent] = 1;
        }
        curMax = Math.max(curMax, solutionObject[parent]);
    }
    return curMax
    
    
    
};
