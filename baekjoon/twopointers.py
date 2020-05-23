class Solution:
    def longestOnes(self, A: List[int], K: int) -> int:
        # set two pointers
        i, j = 0, 0

        count = 0
        ans = 0

        # loop
        while j < len(A):
            if count <= K and A[j] == 0:
                count += 1

            if count > K:
                ans = max(ans, (j-i))
                if A[i] == 0:
                    count -= 1
                i += 1
            if count <= K:
                j += 1

            # check when counter is larger than k
            # then move ith index

        ans = max(ans, (j-i))
        return ans
