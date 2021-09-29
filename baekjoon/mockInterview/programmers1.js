function solution(numbers, hand) {
    var answer = '';
    // destination to number 2
    let twoPosition = {
        2:0,
        1 : 1,
        5 : 1,
        3 : 1,
        4: 2,
        6:2,
        8:2,
        7:4,
        9:4,
        0:4,
        '*':6,
        '#':6
    }
    // destination to number 5
    let fivePosition = {
        5:0,
        2:1,
        4:1,
        6:1,
        8:1,
        1:2,
        3:2,
        7:2,
        9:2,
        0:2,
        '*':4,
        '#':4
    }
    
    //destination to number 8
    let eightPosition = {
        8:0,
        5:1,
        7:1,
        9:1,
        0:1,
        '#':2,
        '*':2,
        4:2,
        6:2,
        2:2,
        1:4,
        3:4
    }
    
    //destination to 0
    let zeroPosition = {
        0:0,
        8:1,
        '*':1,
        '#':1,
        7:2,
        9:2,
        5:2,
        4:5,
        6:5,
        2:5,
        1:7,
        3:7,
    }
    
    let curLeftPos = '*'
    let curRightPos = '#'
    
    const leftNum = [1,4,7]
    const rightNum = [3,6,9]
    
    for(let eachNum of numbers){
        if(leftNum.includes(eachNum)){
            answer += 'L'
            curLeftPos = eachNum
        }else if(rightNum.includes(eachNum)){
            answer += 'R'
            curRightPos = eachNum
        }else{
            // here make greedy decision
            if(eachNum === 0){
                if(zeroPosition[curLeftPos] === zeroPosition[curRightPos]){
                    if(hand==="right"){
                        //right
                        answer += 'R'
                        curRightPos = eachNum
                    }else{
                        //left
                        answer += 'L'
                        curLeftPos = eachNum
                    }
                }else if(zeroPosition[curLeftPos] > zeroPosition[curRightPos]){
                    // right position is less
                    answer += 'R'
                    curRightPos = eachNum
                }else{
                    // left position is less
                    answer += 'L'
                    curLeftPos = eachNum
                }
            }else if(eachNum ===8){
                if(eightPosition[curLeftPos] === eightPosition[curRightPos]){
                    if(hand==="right"){
                        //right
                        answer += 'R'
                        curRightPos = eachNum
                    }else{
                        //left
                        answer += 'L'
                        curLeftPos = eachNum
                    }
                }else if(eightPosition[curLeftPos] > eightPosition[curRightPos]){
                    // right position is less
                    answer += 'R'
                    curRightPos = eachNum
                }else{
                    // left position is less
                    answer += 'L'
                    curLeftPos = eachNum
                }
            }else if(eachNum===5){
                if(fivePosition[curLeftPos] === fivePosition[curRightPos]){
                    if(hand==="right"){
                        //right
                        answer += 'R'
                        curRightPos = eachNum
                    }else{
                        //left
                        answer += 'L'
                        curLeftPos = eachNum
                    }
                }else if(fivePosition[curLeftPos] > fivePosition[curRightPos]){
                    // right position is less
                    answer += 'R'
                    curRightPos = eachNum
                }else{
                    // left position is less
                    answer += 'L'
                    curLeftPos = eachNum
                }
            }else{
                // eachNum === 2
                if(twoPosition[curLeftPos] === twoPosition[curRightPos]){
                    if(hand==="right"){
                        //right
                        answer += 'R'
                        curRightPos = eachNum
                    }else{
                        //left
                        answer += 'L'
                        curLeftPos = eachNum
                    }
                }else if(twoPosition[curLeftPos] > twoPosition[curRightPos]){
                    // right position is less
                    answer += 'R'
                    curRightPos = eachNum
                }else{
                    // left position is less
                    answer += 'L'
                    curLeftPos = eachNum
                }
            }
        }
    }
    return answer;
}
