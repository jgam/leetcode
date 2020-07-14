class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        from itertools import permutations,combinations
        
        answer = [[]]
        if len(nums) < 1:
            return answer
        
        for length in range(1, len(nums)+1):
            perms = list(set((combinations(nums, length))))
            current = []
            for i in range(len(perms)):
                if sorted(list(perms[i])) in current:
                    continue
                current.append(sorted(list(perms[i])))
                answer.append(sorted(list(perms[i])))
        return answer
