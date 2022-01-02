/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let divValues = {};
    let currentIdx = 0;
    let visited = new Set();
    let localVisited = new Set();
    
    for(let query of equations){
        const[numerator, denominator] = query;
        visited.add(numerator);
        visited.add(denominator);
        if(numerator in divValues){
            if(divValues[numerator].has(denominator)){
                // then add
                console.log('this cant be the case')
                return;
            }else{
                divValues[numerator].set(denominator, values[currentIdx]);
            }
        }else{
            divValues[numerator] = new Map();
            divValues[numerator].set(denominator, values[currentIdx])
        }
        
        if(denominator in divValues){
            if(divValues[denominator].has(numerator)){
                return;
            }else{
                divValues[denominator].set(numerator, 1/values[currentIdx]);
            }
        }else{
            divValues[denominator] = new Map();
            divValues[denominator].set(numerator, 1/values[currentIdx])
        }
        currentIdx += 1;
    }
    
    console.log(divValues)
    let solution = []
    for(let query of queries){
        let [first,second] = query;
        
        let ret = dfs(first,second)
        if(ret !== Infinity && ret !== -Infinity){
            solution.push(ret)
        }else{
            solution.push(-1)
        }
        
    }
    return solution
    
    function dfs(start,destination){
        // console.log('start destination', start,destination, localVisited)
        // start and destination
        if(!(visited.has(start))){
            return -Infinity;
        }
        
        if(!(visited.has(destination))){
            return -Infinity;
        }
        
        if(localVisited.has(start)){
            return Infinity
        }
        
        let currentKeys = [ ...divValues[start].keys() ]
        for(let key of currentKeys){
            if(key === destination){
                return divValues[start].get(key)
            }else{
                // path compression here
                localVisited.add(start);
                let retValues = dfs(key, destination);
                localVisited.delete(start);
                if(retValues !== -Infinity && retValues !== Infinity){
                    if(key in divValues){
                        if(divValues[key].has(destination)){
                            // hi
                            // here what? shouldnt be here
                            console.log('cant be hereeee')
                        }else{
                            divValues[key].set(destination, retValues)
                        }
                    }else{
                        divValues[key] = new Map();
                        divValues[key].set(destination, retValues)
                    }
                    return divValues[start].get(key) * retValues;
                }else{
                    console.log(key,destination)
                    continue
                }
            }
        }
        return Infinity
    }
    
};
