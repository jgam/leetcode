var minOperations = function(boxes) {
    let lefts= [0]
    let rights = [0]
    //110010
    
    //01357(10)
    let ones = 0;
    for(let i = 0; i < boxes.length-1; i++){
        if(boxes[i] === '1'){
            ones += 1;
        }
        lefts.push(lefts[lefts.length-1]+ones);
    }
    
    console.log(lefts)
    
    ones = 0;
    for(let i = boxes.length-1; i > 0; i--){
        if(boxes[i] === '1'){
            ones += 1
        }
        rights.unshift(rights[0]+ones);
    }
    
    let solution = []
    
    for(let i = 0; i < rights.length;i++){
        solution.push(lefts[i] + rights[i])
    }
    return solution
};
