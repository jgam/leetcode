/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if(jobDifficulty.length < d){
        return -1
    }
    
    let numJobs = jobDifficulty.length
    let memo = {};
    function dp(day, cut){
        let curPossibleKey = String(day)+String(cut)
        if(curPossibleKey in memo){
            return memo[curPossibleKey]
        }
        if(day===1){
            let curNum = Math.max(...jobDifficulty.slice(cut))
            memo[curPossibleKey] = curNum
            return curNum
        }
        let maxSofar = 0;
        let answer = Infinity;
        for(let j = cut; j < numJobs-day + 1; j++){
            maxSofar = Math.max(maxSofar, jobDifficulty[j]);
            answer = Math.min(answer,maxSofar + dp(day-1, j+1))
        }
        memo[curPossibleKey] = answer
        
        return answer
    }
    let solution = dp(d,0);
    
    return solution
    
};
