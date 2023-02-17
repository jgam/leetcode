var minCostII = function(costs) {
    let bestMinSums = [];

    let curHouse = 3;
    let firstMin = Infinity
    let secondMin = Infinity
    let ImpossibleIdx = -1;

    for(let i = costs.length-1; i > -1; i--){
        let current = [];
        let [newFirst, newSecond, newImpossible] = [Infinity, Infinity, -1];

        if(i === costs.length-1){
            // put the current one
            for(let x = 0; x < costs[i].length; x++){
                if(firstMin == Infinity){
                    firstMin = costs[i][x];
                    ImpossibleIdx = x;
                }else if(secondMin == Infinity){
                    if(costs[i][x] < firstMin){
                        secondMin = firstMin;
                        firstMin = costs[i][x];
                        ImpossibleIdx = x;
                    }else{
                        secondMin = costs[i][x];
                    }
                }else{
                    if(costs[i][x] < firstMin){
                        ImpossibleIdx = x;
                        secondMin = firstMin;
                        firstMin = costs[i][x]
                    }else if(costs[i][x] < secondMin){
                        secondMin = costs[i][x];
                    }
                }
                current.push(costs[i][x]);
            }
        }else{
            // loop the previous one to get the min value out of it and keep adding it
            for(let x = 0; x < bestMinSums[0].length; x++){
                
                if(x===ImpossibleIdx){
                    // how many here? use dynamically here
                    current.push(secondMin + costs[i][x])
                }else{
                    current.push(firstMin + costs[i][x])
                }

                if(newFirst == Infinity){
                    newFirst = current[current.length-1];
                    newImpossible = x;
                }else if(newSecond == Infinity){
                    if(current[current.length-1] < newFirst){
                        newSecond = newFirst;
                        newFirst = current[current.length-1];
                        newImpossible = x;
                    }else{
                        newSecond = current[current.length-1];
                    }
                }else{
                    if(current[current.length-1] < newFirst){
                        newImpossible = x;
                        newSecond = newFirst;
                        newFirst = current[current.length-1]
                    }else if(current[current.length-1] < newSecond){
                        newSecond = current[current.length-1];
                    }
                }
            }
            firstMin = newFirst;
            secondMin = newSecond;
            ImpossibleIdx = newImpossible;
            newFirst = Infinity;
            newSecond = Infinity;
            newImpossible = -1;
        }
        bestMinSums.unshift(current);
    }
    return Math.min(...bestMinSums[0])
}
