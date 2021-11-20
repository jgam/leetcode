var minMeetingRooms = function(intervals) {
    let meetingRooms = 0;
    let curRooms = []
    
    intervals.sort((a,b) => a[0] - b[0])
    
    for(let i = 0 ; i < intervals.length; i++){
        if(curRooms.length < 1){
            curRooms.push(intervals[i][1]);
            meetingRooms += 1
        }else{
            let curEndTime = curRooms.pop();
            if(intervals[i][0] >= curEndTime){
                //this can be done with heap -> heappify
                curRooms.push(intervals[i][1])
                curRooms.sort((a,b) => b-a)
            }else{
                curRooms.push(curEndTime);
                meetingRooms += 1;
                //this can be also done with heap -> heapify
                curRooms.push(intervals[i][1])
                curRooms.sort((a,b) => b-a)
            }
        }
    }
    return meetingRooms
};
