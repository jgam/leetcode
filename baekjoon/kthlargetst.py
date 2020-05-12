class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        
        #points.sort(key=lambda x:abs(x[0]))
        #N*K
        
        currentPoints = points[:K].copy()# [[1,3]]
        currentSums = [currentPoints[i][0]*currentPoints[i][0]+currentPoints[i][1]*currentPoints[i][1] for i in range(len(currentPoints))]#[10]
        currentMax = max(currentSums)#10 => K
        
        print(currentPoints)
        print(currentSums)
        
        for i in range(K, len(points)):
            #for loop starting from K
            
            if points[i][0]*points[i][0] + points[i][1]*points[i][1] < currentMax:
                #then find index of currentMax in currentPoints
                poppedIndex = currentSums.index(currentMax)
                currentSums[poppedIndex] = points[i][0]*points[i][0] + points[i][1]*points[i][1]
                currentPoints[poppedIndex] = points[i]
                currentMax = max(currentSums)
        return currentPoints
    #N*K