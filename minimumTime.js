var minimumTime = function(time, totalTrips) {
    let left = 0;
    let right = 10 ** 20;
    
    function good(x){
        let count = 0;
        for(let t of time){
            count += parseInt(x/t);
        }
        return count >= totalTrips
    }
    
    while(left < right){
        let mid = parseInt((left+right)/2);
        
        if(good(mid)){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    
    return left;
};
