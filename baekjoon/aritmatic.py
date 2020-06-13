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
