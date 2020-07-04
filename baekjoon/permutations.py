class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        from itertools import combinations
        ans = []
        for i in range(1, len(nums) + 1):
            newComb = list(combinations(nums, i))
            ans += newComb

        for i in range(len(ans)):
            ans[i] = list(ans[i])

        ans.append([])
        return ans
