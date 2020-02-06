import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

dx = (-1, -1, -1, 0, 1, 1, 1, 0)
dy = (-1, 0, 1, 1, 1, 0, -1, -1)

while True:
    w, h = map(int, input().split())
    if not w:
        break
    a = [list(map(int, input().split())) for _ in range(h)]
    check = [[False]*w for _ in range(h)]

    def dfs(x, y):
        check[x][y] = True
        for i in range(8):
            nx, ny = x+dx[i], y+dy[i]
            if nx < 0 or nx >= h or ny < 0 or ny >= w:
                continue
            if a[nx][ny] == 1 and check[nx][ny] is False:
                dfs(nx, ny)

    cnt = 0
    for i in range(h):
        for j in range(w):
            if a[i][j] == 1 and check[i][j] is False:
                dfs(i, j)
                cnt += 1
    print(cnt)
