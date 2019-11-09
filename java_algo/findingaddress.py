import sys

read = lambda : sys.stdin.readline().strip()

print(read)# this only outputs data type of read which is the lambda function

n = int(read())

def dfs(matrix, cnt, x,y):
    matrix[x][y]=0
    #changing it to 0 for the already checked path
    dx = [1,-1,0,0]
    dy = [0,0,1,-1]
    for i in range(4):
        n_x = x + dx[i]
        n_y = y + dy[i]
        # go to near n_x and n_y
        if n_x>=0 and n_x<n and n_y>=0 and n_y<n:
            # region/boundary check
            if matrix[n_x][n_y]==1:
            # when that part is equal to 1
                cnt = dfs(matrix, cnt+1, n_x, n_y)
                # increase the cound and check again
    return cnt
    # return cnt when done

matrix = [list(map(int, list(read()))) for _ in range(n)]
# put input to matrix

ans = []
for i in range(n):
    for j in range(n):
        if matrix[i][j]==1:
            #this is something group with 1s?
            ans.append(dfs(matrix, 1, i, j))

print(len(ans))
for i in sorted(ans):
    print(i)