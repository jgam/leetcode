var canAttendMeetings = function(intervals) {
    if(intervals.length < 2){
        return true
    }
    intervals.sort((a,b) => a[0] - b[0])
    let curMin = intervals[0][1]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < curMin){
            return false
        }
        curMin = intervals[i][1]
    }
    return true
};
