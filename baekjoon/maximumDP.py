class Solution:
    def integerBreak(self, n: int) -> int:
        # break it into prime numbers
        dp = [0 for i in range(n+4)]
        # dp => [0,1,2,4,6...]
        dp[0] = 0
        dp[1] = 0
        dp[2] = 1
        dp[3] = 2
        # 0 1 2 3 4 5 6 7 8 9 10
        # 0 0 1 2 4 6 9 12182736
        for i in range(4, n+1):
            curMax = 0
            for j in range(2, int(i/2)+1):
                max1 = 0
                max2 = 0

                if dp[j] > j:
                    max1 = dp[j]
                else:
                    max1 = j

                if dp[i-j] > (i-j):
                    max2 = dp[i-j]
                else:
                    max2 = i-j

                if max1*max2 > curMax:
                    curMax = max1 * max2
            dp[i] = curMax
        return dp[n]
