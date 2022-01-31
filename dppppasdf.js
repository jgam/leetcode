/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
    // flights are already in adjacency_list

    let memo = {};
    
    function dp(city, week){
        if(week > days[0].length-1){
            return 0
        }
        let ans = 0;
        //get memoized
        if((String(city)+String(week)) in memo){
            return memo[(String(city)+String(week))]
        }
        
        // STAY in current city
        ans = Math.max(ans, days[city][week] + dp(city, week+1));
        
        // go into different city
        for(let i = 0; i < flights[city].length;i++){
            if(flights[city][i] !== 0){
                ans = Math.max(ans, days[i][week] + dp(i, week+1))
            }
        }
        
        memo[String(city)+String(week)] = ans;
        return ans
    }
    let ans = dp(0,0)
    return ans
    
};
