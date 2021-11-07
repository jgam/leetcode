/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(
        (a,b) => a[0] - b[0]
    )
    
    const solution = []
    
    let curLow = -Infinity;
    let curMax = -Infinity;
    let curIndex = 0;
    let localMax = -Infinity;
    if(intervals.length === 0){
        return []
    }
    while(curIndex < intervals.length){
        if(curLow === -Infinity){
            curLow = intervals[curIndex][0]
            curMax = intervals[curIndex][1]
        }else{
            if(intervals[curIndex][0] <= curMax){
                curMax = Math.max(intervals[curIndex][1], curMax)
            }else{
                solution.push([curLow, curMax]);
                curLow = intervals[curIndex][0]
                curMax = intervals[curIndex][1]
            }
        }
        curIndex += 1
    }
    
    solution.push([curLow, curMax])
    return solution
};
