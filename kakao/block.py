#test
def solution(board):
    answer = 0
    
    def defineObjects(board, i, j):
        if(board[i][j]=board[i][j+1]):
            #the first two are equal now
            if(board[i][j+1]=board[i][j+2]):
                #the first three are equal
                if(board[i][j]=board[i+1][j+2]):
                    return 1
                elif(board[i][j]=board[i+1][j]):
                    return 5
                elif(board[i][j]=board[i-1][j]):
                    return 3
                elif(board[i][j]=board[i-1][j+2]):
                    return 7
                else:
                    return 0
            elif(board[i][j] = board[i+1][j]):
                if(board[i][j]=board[i+2][j]):
                    return 2
            elif(board[i][j]=board)
    return answer