class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        from itertools import permutations
        perms = permutations(nums, len(nums))
        
        ans = []
        for i in perms:
            ans.append(list(i))
        return ans
