/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let oneLength = 0;
    let firstEncounter= false;
    let secondEncounter = false;
    
    for(let i = 0; i < data.length; i++){
        if(data[i] === 1){
            oneLength += 1;
        }
    }
    
    if(oneLength <= 1){
        return 0
    }
    
    let minSwaps = [];
    let minSwap = Infinity;
    let curSwap = 0;
    for(let i = 0; i < data.length; i++){
        if(i >= oneLength-1){
            if(data[i] == 0){
                curSwap += 1;
            }
            
            //subtract from length
            let actualSwap = curSwap;
            if(i - oneLength >= 0){
                actualSwap -= minSwaps[i-oneLength];
            }
            minSwaps.push(curSwap);
            minSwap = Math.min(actualSwap, minSwap)
            
        }else{
            if(data[i] ==0){
               curSwap += 1;
            }
            minSwaps.push(curSwap)
        }
    }
    return minSwap
};
