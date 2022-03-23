var kidsWithCandies = function(candies, extraCandies) {
    let curMax = 0;
    for(let candy of candies){
        curMax = Math.max(curMax, candy);
    }
    
    let ret = [];
    for(let i = 0; i < candies.length; i++){
        console.log(candies[i]+extraCandies, curMax)
        if(candies[i]+extraCandies >= curMax){
            ret.push(true)
        }else{
            ret.push(false)
        }
    }
    return ret
};
