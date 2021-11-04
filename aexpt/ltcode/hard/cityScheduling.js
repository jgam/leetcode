/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort(
        (a,b) =>{
            return a[1]-a[0]-b[1]+b[0]
        }
    )
    
    let solution = 0
    for(let i = 0; i < costs.length/2; i++){
        solution += costs[i][1]
    }
    
    for(let i =costs.length/2; i < costs.length;i++){
        solution += costs[i][0]
    }
    
    return solution
};
