def solution(N):
    answer = 0
    #dp[i] = dp[i-1] + vp[i]*2
    
    vp = [1,1,2,3]
    dp = [4,6,10,16]
    
    if N < 5:
        return dp[N-1]
    
    for i in range(4, N):
        vp.append(vp[i-1]+vp[i-2])
        dp.append(dp[i-1]+vp[i]*2)
    
    return dp[-1]