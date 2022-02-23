/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let solution = [];
    
    for(let i = 0; i < ratings.length; i++){
        solution.push(1);
    }
    
    for(let i=0; i < ratings.length; i++){
        if(i===0){
            if(ratings[i+1] < ratings[i]){
                solution[i] += 1;
            }
        }else if(i === ratings.length-1){
            if(ratings[i-1] < ratings[i]){
                solution[i] = solution[i-1]+1;
            }
        }else{
            if(ratings[i] > ratings[i-1]){
                solution[i] = solution[i-1] + 1;
            }
        }
    }
    
    for(let i =ratings.length-1; i >-1; i--){
        if(i===0){
            if(ratings[i+1] < ratings[i]){
                if(solution[i] <= solution[i+1]){
                    solution[i] = solution[i+1]+1;
                }
            }
        }else if(i === ratings.length-1){
            if(ratings[i-1] < ratings[i]){
                if(solution[i-1] >= solution[i]){
                    solution[i] = solution[i-1]+1;
                }
            }
        }else{
            if(ratings[i] > ratings[i+1]){
                solution[i] = Math.max(solution[i], solution[i+1]+1)
            }
        }
    }
    return solution.reduce((a,b)=> a+b)
    
};
