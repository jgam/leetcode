# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        half = int(n/2)
        
        
        start = 0 
        end = n+1
        
        while True:
            if end - start == 1:
                return end
            # if end <= start:
            #     for i in range(end, start+1):
            #         if isBadVersion(i) == False:
            #             return i + 1
            if isBadVersion(half):
                end = half
                half = int(half / 2)
            else:
                start = half
                half = half + int((end-half)/2)
