function getWays(n, c) {
    // Write your code here
    
    // here u need to use dynamic programming of whether you used up a coin with 2 dimensional matrix
    
    // first construct 2d arrays
    const twoArr = [new Array(n+1).fill(0)]
    
    for(let i = 0; i < c.length; i++){
        let firstArr = new Array(n+1).fill(0)
        firstArr[0] = 1
        twoArr.push(firstArr)
    }
    console.log(twoArr.length, twoArr[0].length)
    //now loop through to add logic
    for(let i = 1; i < twoArr.length; i++){
        for(let j = 1; j <twoArr[0].length; j++){
            // check if we can usee 1 coin(c[i-1]) at current index j
            if( j - c[i-1] >= 0 ){
                 // if we can use the coin, add used up coin instance + not using instance
                 twoArr[i][j] = twoArr[i][j-c[i-1]] + twoArr[i-1][j]
            }else{
                 // else we just get from not using it
                 twoArr[i][j] = twoArr[i-1][j]
            }
        }
    }
    
    return twoArr[twoArr.length-1][twoArr[0].length-1]
    

}
