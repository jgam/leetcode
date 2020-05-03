# house robbers
class Solution:
    def rob(self, nums: List[int]) -> int:
        print(nums)
        lenNums = len(nums)
        if lenNums == 2:
            return max(nums[1], nums[0])
        elif lenNums == 1:
            return nums[0]
        elif lenNums == 0:
            return 0
        elif lenNums == 3:
            return max(nums[2]+nums[0], nums[1])
        else:
            dp = nums[:2]
            dp.append(nums[2]+dp[0])
            print(dp)

            for i in range(3, lenNums):
                dp.append(nums[i] + max(dp[i-2], dp[i-3]))
            return max(dp[lenNums-1], dp[lenNums-2])
