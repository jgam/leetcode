function sockMerchant(n, ar) {
    // Write your code here
    let curObj = {}
    for(let sock of ar){
        if(sock in curObj){
            curObj[sock] += 1;
        }else{
            curObj[sock] = 1
        }
    }
    
    let solution = 0;
    for(let curKey of Object.keys(curObj)){
        solution += parseInt(curObj[curKey]/2)
    }
    return solution

}
