#using memoization

n = int(input())

dp = [0,1,2,4,7]

if n < 5:
    return dp[n]

for i in (5,n):
    dp.append(dp[i-3]+dp[i-2]+dp[i-1])

return dp[-1]