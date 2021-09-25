/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const orderObj = {}
    
    //O(order)
    for(const eachVal of order){
        orderObj[eachVal] = ""
    }
    
    orderObj["etc"] = ""
    
    
    // O(S)
    for(const eachChar of s){
        if(eachChar in orderObj){
            orderObj[eachChar] += eachChar
        }else{
            orderObj["etc"] += eachChar
        }
    }
    
    // O(order)
    let ret = ""
    for(const eachVal of order){
        ret += orderObj[eachVal]
    }
    ret += orderObj["etc"]
    return ret
    
    
};
