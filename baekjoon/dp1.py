import sys
input = sys.stdin.readline
arr = []
dp = []

l = int(input())
for _ in range(l):
    arr.append(int(input()))


dp.append(arr[0])
dp.append(max(dp[0], dp[0]+arr[1]))
dp.append(max(arr[1]+arr[2], arr[2]+arr[0]))

for i in range(3, l):
    dp.append(arr[i] + max(dp[i-2], dp[i-3]+arr[i-1]))

print(dp.pop())
