/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === word[0]){
                if(dfs(i,j,0,board)){
                    return true
                }
            }
        }
    }
    return false
    
    function dfs(x,y,curIndex,localBoard){
        
        if(curIndex === word.length){
            return 1
        }else{
            // check the directions
            if(x > localBoard.length-1 || x < 0){
                return 0
            }
            if(y > localBoard[0].length-1 || y < 0){
                return 0
            }
            if(localBoard[x][y] ===1){
                return 0
            }
            
            //valid so set current to be 1 in localBoard with checking of word and board
            if(localBoard[x][y] === word[curIndex]){
                let temp = localBoard[x][y];
                localBoard[x][y] = ''
                let boolean = dfs(x+1,y, curIndex + 1,localBoard) + dfs(x-1,y,curIndex + 1,localBoard) + dfs(x,y+1, curIndex+1,localBoard,) + dfs(x,y-1, curIndex+1,localBoard) 
                localBoard[x][y] = temp;
                return boolean
            }
            return 0
            
            
        }
    }
    
    
    
};
