class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        #get range
        max_range = [0]*(n+1)
        #get possibles
        for i, r in enumerate(ranges):
            left, right = max(i-r, 0), min(i+r, n)
            max_range[left] = max(max_range[left], right-left)
        
        #check with for loop
        def check_possible(A):
            count, reachable, curr_reachable = 0, 0, 0
            for i, length in enumerate(A):
                #when disconnected
                if i > reachable:
                    return -1
                #update
                if i > curr_reachable:
                    curr_reachable = reachable
                    count += 1
                reachable = max(reachable, i+length)
            return count
        return check_possible(max_range)
            
            
