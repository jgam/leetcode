var maxVacationDays = function(flights, days) {
    let memoized = [];
    
    for(let i = 0; i < flights.length+1; i++){
        memoized.push(new Array(days.length+1).fill(-Infinity))
    }
    return dfs(flights,days,0,0)
    
    function dfs(fligts, days, currentCity, weekno){
        //idx represents what day it is now.
        if(weekno === days[0].length){
            return 0
        }
        // her ememoied
        if(memoized[currentCity][weekno] !== -Infinity){
            return memoized[currentCity][weekno]
        }
        let maxVac = 0;
        for(let i = 0; i < flights.length; i++){
            if(fligts[currentCity][i] == 1 || i === currentCity){
                let vac = days[i][weekno] + dfs(flights, days, i , weekno+1)
                maxVac = Math.max(vac, maxVac)
            }
        }
        memoized[currentCity][weekno] = maxVac;
        return maxVac
    }
};
