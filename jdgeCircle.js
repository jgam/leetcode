var judgeCircle = function(moves) {
    let horizontalPlace = 0;
    let verticalPlace = 0;
    
    for(let i = 0; i < moves.length; i++){
        if(moves[i] === 'U'){
            verticalPlace += 1;
        }else if(moves[i] === 'D'){
            verticalPlace -= 1;
        }else if(moves[i] === 'R'){
            horizontalPlace += 1;
        }else if(moves[i] === 'L'){
            horizontalPlace -= 1;
        }else{
            return false
        }
    }
    
    return horizontalPlace === 0 && verticalPlace ===0
};
