let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let words = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    
    let solution = "";
    let currentIdx = 0;
    
    while(num !== 0){
        if(num < values[currentIdx]){
            currentIdx += 1
        }else{
            solution += words[currentIdx].repeat(parseInt(num / values[currentIdx]));
            num -= values[currentIdx]*parseInt(num/values[currentIdx])
        }
    }
    return solution
