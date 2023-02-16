var minAvailableDuration = function(slots1, slots2, duration) {
    let oneIdx = 0;
    let twoIdx = 0;

    slots1.sort((a,b) => a[0]-b[0]);
    slots2.sort((a,b) => a[0]-b[0])


    while(oneIdx < slots1.length && twoIdx < slots2.length){
        if(slots1[oneIdx][0] > slots2[twoIdx][1]){
            twoIdx += 1;
        }else if(slots1[oneIdx][1] < slots2[twoIdx][0]){
            oneIdx += 1;
        }else{
            let startTime = Math.max(slots1[oneIdx][0], slots2[twoIdx][0])
            let endTime = Math.min(slots1[oneIdx][1], slots2[twoIdx][1])
            if(endTime - startTime >= duration){
                return [startTime, startTime+duration];
            }

            //now here two ways
            if(slots1[oneIdx][1] < slots2[twoIdx][1]){
                oneIdx += 1
            }else{
                twoIdx += 1
            }
        }
    }
    return [];
    
};
