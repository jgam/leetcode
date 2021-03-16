class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ret = []
        cur = {}
        for num in nums:
            if num in cur:
                cur[num] += 1
            else:
                cur[num] = 1
        
        
        for i in cur:
            if cur[i] == 1:
                return i
        
