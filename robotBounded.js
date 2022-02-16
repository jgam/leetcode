/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let afterMove = [0,0];
    let direction = 0;
    
    for(let i = 0 ; i < instructions.length; i++){
        if(instructions[i] === 'L'){
            direction = (direction+1) % 4;
        }else if(instructions[i]==='R'){
            direction = (direction -1) % 4;
            if(direction < 0){
                direction = direction + 4;
            }
        }else{
            if(direction%4 === 0){
                //north
                afterMove[1] = afterMove[1]+1;
            }else if(direction%4 === 1){
                //west
                afterMove[0] = afterMove[0] - 1;
            }else if(direction%4===2){
                //south
                afterMove[1] = afterMove[1] -1;
            }else{
                //east
                afterMove[0] = afterMove[0] +1;
            }
        }
    }
    console.log(afterMove)
    return (afterMove[0] === 0 && afterMove[1] === 0) || direction%4 !== 0
};
