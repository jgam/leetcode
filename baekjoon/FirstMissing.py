class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        nums = list(set(nums))
        nums.sort()
        prev=0
        for num in nums:
            if num >= 1:
                if prev == (num-1):
                    prev = num
                    continue
                else:
                    return prev+1
            else:
                continue
        return prev+1
