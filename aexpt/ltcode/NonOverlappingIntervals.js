/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    
    let curEnd = intervals[0][1]
    let solution = 0;
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < curEnd){
            solution += 1
            curEnd = Math.min(intervals[i][1], curEnd)
        }else{
            curEnd = intervals[i][1];
        }
    }
    return solution
};
