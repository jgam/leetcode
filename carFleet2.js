/**
 * @param {number[][]} cars
 * @return {number[]}
 */


var getCollisionTimes = function(cars) {
    let solution = new Array(cars.length).fill(-1);
    let nextCrash = [cars.length-1]
    
    for(let i = cars.length-2; i > -1; i--){
        let next = nextCrash[nextCrash.length-1];//the last element of stack
        while(next && solution[next] > 0 && (getTime(cars[i], cars[next])=== -1 ? Infinity : getTime(cars[i], cars[next])) > solution[next]){
            nextCrash.pop();
            next = nextCrash[nextCrash.length-1];
        }
        if(next){
            const time = getTime(cars[i], cars[next]);
            solution[i] = time;
        }
        
        nextCrash.push(i);
        
        // for(let j = i+1; j < cars.length; j++){
        //     let possibleTime = getTime(cars[i], cars[j]);
        //     // console.log('hereee',possibleTime,i,j)
        //     if(possibleTime > 0 && (possibleTime < solution[j] || solution[j]===-1)){
        //         // console.log('breaki')
        //         solution[i] = possibleTime;
        //         break;
        //     }
        // }
    }
    
    return solution
    
    function getTime(firstTime, secondTime){
        if(firstTime[1] - secondTime[1] <= 0){
            return -1
        }
        
        return (secondTime[0] - firstTime[0]) / (firstTime[1] - secondTime[1])
    }
    
    
};
