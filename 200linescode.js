/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let matrix = [];
    
    for(let i = 0; i < board.length; i++){
        let curArr = [];
        for(let j = 0; j < board[0].length; j++){
            // curArr.push(getValue(board[i][j], getCount(i,j)));
            curArr.push(board[i][j]);
        }
        matrix.push(curArr)
    }
    
    if(board.length ===1){
        for(let i = 0; i < board[0].length; i++){
            let count = 0;
            
            if(i=== 0){
                if(board[0][1]){
                    count += 1
                }
            }else if(i===board[0].length-1){
                if(board[0][board[0].length-2]){
                    count += 1;
                }
            }else{
                if(board[0][i-1]){
                    count += 1
                }
                
                if(board[0][i+1]){
                    count += 1
                }
            }
            
            if(board[0][i] === 1){
                if(count < 2){
                    board[0][i] = 0
                }
            }
        }
        return board
    }else if(board[0].length ===1){
        for(let i = 0; i < board.length; i++){
            let count = 0;
            if(i===0){
                if(board[i][0]){
                    count += 1
                }
            }else if(i===board.length-1){
                if(board[board.length-1][0]){
                    count += 1
                }
            }else{
                if(board[i-1][0]){
                    count += 1
                }
                if(board[i+1][0]){
                    count += 1
                }
            }
            
            if(board[i][0] ===1){
                if(count < 2){
                    board[i][0] = 0
                }
            }
        }
        return board
    }
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            board[i][j] = getValue(matrix[i][j], getCount(i,j));
        }
    }
    return board
    
    
    function getCount(i,j){
        let count = 0;
        if(i === 0){
            if(j===0){
                if(matrix[i][j+1]){
                    count += 1;
                }
                
                if(matrix[i+1][j]){
                    count += 1;
                }
                
                if(matrix[i+1][j+1]){
                    count += 1;
                }
            }else if(j=== matrix[0].length-1){
                if(matrix[i][j-1]){
                    count += 1;
                }
                
                if(matrix[i+1][j-1]){
                    count += 1;
                }
                
                if(matrix[i+1][j]){
                    count += 1;
                }
            }else{
                if(matrix[i][j+1]){
                    count += 1;
                }
                
                if(matrix[i+1][j]){
                    count += 1;
                }
                
                if(matrix[i+1][j+1]){
                    count += 1;
                }
                if(matrix[i][j-1]){
                    count += 1;
                }
                
                if(matrix[i+1][j-1]){
                    count += 1;
                }
            
            }
        }else if(i === matrix.length-1){
            if(j===0){
                if(matrix[i][j+1]){
                    count += 1;
                }
                
                if(matrix[i-1][j]){
                    count += 1;
                }
                
                if(matrix[i-1][j+1]){
                    count += 1;
                }
            }else if(j=== matrix[0].length-1){
                if(matrix[i][j-1]){
                    count += 1;
                }
                
                if(matrix[i-1][j-1]){
                    count += 1;
                }
                
                if(matrix[i-1][j]){
                    count += 1;
                }
            }else{
                if(matrix[i][j+1]){
                    count += 1;
                }
                
                if(matrix[i-1][j]){
                    count += 1;
                }
                
                if(matrix[i-1][j+1]){
                    count += 1;
                }
                if(matrix[i][j-1]){
                    count += 1;
                }
                
                if(matrix[i-1][j-1]){
                    count += 1;
                }
            
            }
        }else{
            if(matrix[i][j+1]){
                count += 1;
            }

            if(matrix[i-1][j]){
                
                count += 1;
            }

            if(matrix[i-1][j+1]){
                
                count += 1;
            }
            if(matrix[i][j-1]){
                
                count += 1;
            }
            
            if(matrix[i-1][j-1]){
                
                count += 1;
            }

            if(matrix[i+1][j-1]){
                count += 1;
            }
            if(matrix[i+1][j]){
                
                count += 1;
            }

            if(matrix[i+1][j+1]){
                
                count += 1;
            }
        }
        return count
    }
    
    function getValue(curValue, countNum){
        if(curValue === 1){
            if(countNum === 2 || countNum === 3){
                return 1
            }else if(countNum < 2){
                return 0
            }else{
                return 0
            }
        }else{
            return countNum ===3 ? 1 : 0
        }
    }
    
};
