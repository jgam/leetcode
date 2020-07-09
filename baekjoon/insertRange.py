class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:

        intervals.append(newInterval)
        intervals.sort(key = lambda x:x[0])
        length=len(intervals)
        res=[]
        for i in range(length):
            if res==[]:
                res.append(intervals[i])
            else:
                size=len(res)
                if res[size-1][0]<=intervals[i][0]<=res[size-1][-1]:
                    res[size-1][-1]=max(intervals[i][-1], res[size-1][-1])
                else:
                    res.append(intervals[i])
        return res
