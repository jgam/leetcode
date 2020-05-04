def solution(triangle):
    answer = 0
    dp = [[] for i in range(len(triangle))]
    dp[0].append(triangle[0][0])
    
    print(dp)
    
    for i in range(1,len(triangle)):
        for j in range(len(triangle[i])):
            #check the first
            if j == 0:
                #only add the first num
                if triangle[i][j]+dp[i-1][j] > answer:
                    answer = triangle[i][j]+dp[i-1][j]
                dp[i].append(triangle[i][j]+dp[i-1][j])
            elif j == len(triangle[i])-1:
                #last element only add previous
                if triangle[i][j]+dp[i-1][j-1] > answer:
                    answer = triangle[i][j]+dp[i-1][j-1]
                dp[i].append(triangle[i][j]+dp[i-1][j-1])
            else:
                #add two nums
                current= []
                #first
                #check if previous first is list or not
                if type(dp[i-1][j-1])==list:
                       #list then loop through
                       tempCurrent = []
                       for v in dp[i-1][j-1]:
                            if triangle[i][j]+v > answer:
                                answer = triangle[i][j]+v
                            tempCurrent.append(triangle[i][j]+v)
                       current+=tempCurrent
                else:
                        if dp[i-1][j-1]+triangle[i][j] > answer:
                            answer = dp[i-1][j-1]+triangle[i][j]
                        current.append(dp[i-1][j-1]+triangle[i][j])
                #second
                if type(dp[i-1][j])==list:
                       tempCurrent = []
                       for v in dp[i-1][j]:
                        if triangle[i][j]+v > answer:
                            answer = triangle[i][j]+v
                        tempCurrent.append(triangle[i][j]+v)
                       current+=tempCurrent
                       #list then loop through
                else:
                        if dp[i-1][j]+triangle[i][j] > answer:
                            answer = dp[i-1][j]+triangle[i][j]
                        current.append(dp[i-1][j]+triangle[i][j])
                dp[i].append(current)
    print(dp)
    return answer

#ok I think i can just append the max num in there