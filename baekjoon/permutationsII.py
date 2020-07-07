class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        from itertools import permutations
        perms = permutations(nums, len(nums))
        
        ans = []
        
        for i in perms:
            if list(i) in ans:
                continue
            ans.append(list(i))
        return ans
