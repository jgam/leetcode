var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let current = 0;
    let next = 0;
    let solution = []
    
    //loop through intervals
    while(next < intervals.length){
        //set initial for edge case with only 1 interval or 0 interval
        if(solution.length ===0){
            solution.push(intervals[next]);
            next += 1;
        }else{
            // regular case where intervals are fine
            if(solution[current][1] < intervals[next][0]){
                solution.push(intervals[next]);
                next += 1;
                current += 1;
            }else{
                //needs merging
                let curMin;
                let curMax;
                
                curMin = Math.min(solution[current][0], intervals[next][0]);
                curMax = Math.max(solution[current][1], intervals[next][1]);
                
                solution[current] = [curMin, curMax];
                next += 1
            }
        }
    }
    return solution
};
