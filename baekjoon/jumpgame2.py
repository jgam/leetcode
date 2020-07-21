class Solution:
    def jump(self, nums: List[int]) -> int:
        placeHash={}
        import sys
        maxNum = sys.maxsize
        indexNums = [maxNum for _ in range(len(nums))]
        
        if len(nums) <= 1:
            return 0
        
        for i in range(nums[0]+1):
            if i == len(nums):
                return 1
                break
            indexNums[i] = 1
        
        for i in range(1,len(nums)):
            curRange = i + nums[i]+1
            if curRange > len(indexNums):
                curRange = len(indexNums)
            for j in range(curRange-1,i-1,-1):
                curMin= min(indexNums[j], indexNums[i]+1)
                if curMin == indexNums[j]:
                    break
                indexNums[j] = curMin
        return indexNums[-1]
