class Solution:
    def numberOfArithmeticSlices(self, A: List[int]) -> int:
        # exception
        if len(A) < 3:
            return 0

        # initial set
        dp = []
        dpEle = 0
        curNumCount = 1
        pattern = A[1]-A[0]

        for i in range(1, len(A)):
            if A[i] - A[i-1] == pattern:
                curNumCount += 1
                if curNumCount >= 3:
                    dpEle += 1
                    dp.append(dpEle)
            else:
                # if not a pattern then we need to reset
                curNumCount = 2
                pattern = A[i]-A[i-1]
                dpEle = 0

        return sum(dp)
# with dp you can incremenet number from the previous dp index.

        # Dp way
        """
        if len(A) < 3:
            return 0
        
        dp = [0,0]
        numCount = 2
        pattern = A[1]-A[0]
        
        for i in range(2, len(A)):
            if A[i] - A[i-1] == pattern:
                numCount += 1
                if numCount >= 3:
                    dp.append(dp[i-1] + 1)
                else:
                    dp.append(0)
            else:
                pattern = A[i] - A[i-1]
                numCount = 2
                dp.append(0)

        return sum(dp)
        """
