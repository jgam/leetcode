#fill in matrix

import sys
sys.setrecursionlimit(10**6)
input = lambda:sys.stdin.readline().strip()

n, m = map(int, input().split())
dp = [[-1 for i in range(1<<14)] for ii in range(n*m)]

def func(cur, bit):
    if cur > n*m:
        return 0
    if cur == n*m:
        return bit==0

    if dp[cur][bit] != -1:
        return dp[cur][bit]

    if bit & 1: #만약 채워져있다면 해당 위치에 1x2가 이미 있다는 의미임
        dp[cur][bit] = func(cur+1, (bit>>1)) #때문에 한칸을 미루고 진행
    else: #채워져있지 않다면 1x2를 하나둠
        dp[cur][bit] = func(cur+1, (bit>>1) | (1<<(m-1))) #그리고 bit를 1칸 땡기고 m-1위치와 or연삼함
        if cur%m != (m-1) and (bit & 1<<1) == 0: #그리고 마지막이 아니고 해당위치 오른쪽에 둘수있다면
            dp[cur][bit] += func(cur+2, (bit>>2)) #2x1 도미노를 두고 2칸 떙김
    return dp[cur][bit]
print(func(0,0)%9901)