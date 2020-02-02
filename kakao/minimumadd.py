class Solution:
    def minAddToMakeValid(self, S: str) -> int:
        ans = 0
        mCount = 0
        for i in S:
            if i == "(":
                ans += 1
            elif i == ")":
                if ans > 0:
                    ans -= 1
                else:
                    mCount += 1
            else:
                continue
        return (ans + mCount if ans > 0 else mCount)
