n = 0
dx = [[0,0,0,1,1,1], [0,0,1,1,2,2]]
dy = [[0,1,2,0,1,2], [0,1,0,1,0,1]]

def safe(x, y, n):
    return min(x,y) >= 0 and max(x,y) < n

def possible(x, y, k, count, matrix, check, n):
    col = -1
    cur = 0
    for i in range(6):
        nx = x + dx[k][i]
        ny = y + dy[k][i]
        if safe(nx, ny, n):
            if matrix[nx][ny]:
                if col == -1:
                    col = matrix[nx][ny]
                else:
                    if col != matrix[nx][ny]:
                        return count, matrix, check, False
            else:
                cur += 1
                if count[nx][ny]:
                    return count, matrix, check, False
        else:
            return count, matrix, check, False
    if cur != 2:
        return count, matrix, check, False
    for i in range(6):
        nx = x + dx[k][i]
        ny = y + dy[k][i]
        check[nx][ny] = True
    return count, matrix, check, True


def solution(board):
    n = len(board)
    answer = 0
    count = [[0 for i in range(n)] for j in range(n)]
    check = [[0 for i in range(n)] for j in range(n)]
    while True:
        for i in range(n):
            for j in range(n):
                count[i][j] = check[i][j] = 0
        flag = False
        for i in range(n):
            for j in range(n):
                if board[i][j] > 0:
                    count[i][j] = 1
                else: count[i][j] = 0
        for i in range(1,n):
            for j in range(n):
                count[i][j] += count[i-1][j]
        for i in range(n):
            for j in range(n):
                for k in range(2):
                    count, board, check, possi = possible(i,j,k,count,board,check, n)
                    if possi:
                        flag = True
                        answer += 1
        for i in range(n):
            for j in range(n):
                if check[i][j]:
                    board[i][j] = 0
        if not flag:
            break
    return answer


print(solution([[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,4,0,0,0],[0,0,0,0,0,4,4,0,0,0],[0,0,0,0,3,0,4,0,0,0],[0,0,0,2,3,0,0,0,5,5],[1,2,2,2,3,3,0,0,0,5],[1,1,1,0,0,0,0,0,0,5]]))