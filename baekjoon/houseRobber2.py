class Solution:
    def rob(self, nums: List[int]) -> int:
        if(len(nums)==1):
            return(nums[0])
        
        a = len(nums)
        
        def helper(odd,even,x,y):
            for i in range(x,y):
                if(i%2==0):
                    even = max(even+nums[i],odd)
                else:
                    odd = max(odd+nums[i],even)
            return(max(odd,even))
        
        max1 = helper(0,0,0,a-1)
        max2 = helper(0,0,1,a)
        return(max(max1,max2))
        
