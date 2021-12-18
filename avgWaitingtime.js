/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let totalTimeTaken = 0;
    let curStartTime = 0;
    
    for(let customerInfo of customers){
        let [customerArrival,timeTakes] = customerInfo;
        
        if(customerArrival >= curStartTime){
            totalTimeTaken += timeTakes;
            curStartTime = customerArrival + timeTakes;
        }else{
            //curStartTime = 3
            totalTimeTaken += curStartTime + timeTakes - customerArrival;
            curStartTime = curStartTime + timeTakes;
        }
    }
    
    return totalTimeTaken / customers.length
};
