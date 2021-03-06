class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrices = []
        curMax = 0
        ret = 0
        for i in range(len(prices)-1,-1,-1):
            if prices[i] > curMax:
                curMax = prices[i]
            ret = max(ret, curMax-prices[i])
            
        
#         ret = 0
#         for i in range(len(prices)):
#             ret = max(ret, minPrices[i] - prices[i])
        
        return ret
