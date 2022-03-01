var kthFactor = function(n, k) {
    let firstHalf = [];
    let secondHalf = [];
    
    
    
    if(n===2){
        let twos = [1,2];
        return k < 3 ? twos[k-1]: -1;
    }
    
    if(n===3){
        let threes=[1,3];
        return k<3?threes[k-1]:-1;
    }
    
    for(let i = 1; i < parseInt(Math.sqrt(n))+1; i++){
        if(n%i === 0){
            firstHalf.push(i);
            if(i !== n/i){
                secondHalf.unshift(parseInt(n/i));
            }
        }
    }
    
    let arr = firstHalf.concat(secondHalf)
    return k <= arr.length ? arr[k-1] : -1
};
