#using memoization

n = int(input())

dp = [0,1,2,4,7]

if n < 5:
    print(dp[n])
    print('the program ended')

for i in (5,n):
    dp.append(dp[i-3]+dp[i-2]+dp[i-1])

print(dp[-1])