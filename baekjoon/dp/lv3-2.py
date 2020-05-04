def solution(triangle):
    answer = 0
    dp = [[] for i in range(len(triangle))]
    dp[0].append(triangle[0][0])
    
    print(dp)
    
    for i in range(1,len(triangle)):
        for j in range(len(triangle[i])):
            if j == 0:
                if triangle[i][j]+dp[i-1][j] > answer:
                    answer = triangle[i][j]+dp[i-1][j]
                dp[i].append(triangle[i][j]+dp[i-1][j])
            elif j== len(triangle[i])-1:
                if triangle[i][j]+dp[i-1][j-1] > answer:
                    answer = triangle[i][j]+dp[i-1][j-1]
                dp[i].append(triangle[i][j]+dp[i-1][j-1])
            else:
                #now with multiple
                currentMax = max(dp[i-1][j-1],dp[i-1][j])
                if currentMax+triangle[i][j] > answer:
                    answer = currentMax+triangle[i][j]
                dp[i].append(currentMax+triangle[i][j])
    return answer

#ok I think i can just append the max num in there