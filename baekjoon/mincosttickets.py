class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        # easier way
        dp = [0] * 366
        curIndex = 0
        for i in range(1, 366):  # (1,366)
            if curIndex < len(days):
                print(curIndex, days[curIndex])
                if i == days[curIndex]:
                    #print('in here')
                    if i - 30 >= 0:
                        print('later here')
                        # only consider the first cost
                        dp[i] = min(dp[i-30]+costs[2], dp[i-7]+costs[1], dp[i-7]+costs[2],
                                    dp[i-1]+costs[0], dp[i-1] + costs[1], dp[i-1] + costs[2])
                    elif i-7 >= 0:
                        #print('must be here')
                        # print(i)
                        # 2 cases
                        dp[i] = min(dp[i-7]+costs[1], dp[i-1] +
                                    costs[0], dp[i-1] + costs[1])
                    else:
                        # 3cases
                        dp[i] = dp[i-1] + costs[0]
                    curIndex += 1
                else:
                    dp[i] = dp[i-1]
            else:
                if i <= 7:
                    # do seven
                    dp[i] = min(dp[i-7] + costs[1], dp[i-1])
                elif i <= 30:
                    # do thirty
                    dp[i] = min(dp[i-30] + costs[2], dp[i-1])
                else:
                    dp[i] = dp[i-1]

        print(dp[:31])
        return dp[-1]
