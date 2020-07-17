class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        from itertools import combinations
        
        curList = [i for i in range(1, n+1)]
        
        combs = list(combinations(curList,k))
        ans = []
        for i in combs:
            ans.append(list(i))
        return ans
