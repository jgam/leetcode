class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        if len(nums) < 2:
            return len(nums)
        idx = 2
        while True:
            lenNums = len(nums)
            if idx == lenNums:
                return lenNums
            
            if nums[idx] == nums[idx-2]:
                #pop out
                nums.pop(idx)
            else:
                idx += 1
