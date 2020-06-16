class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        current = target
        for i in range(len(nums)-1):
            current = current - nums[i]
            if current in nums[i+1:]:
                return [i, nums.index(current, i+1)]
            else:
                current = target
                continue
        return []
