class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        iArray = []
        jArray = []
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    iArray.append(i)
                    jArray.append(j)
                    continue
                
        
        zeroArray = [0] * len(matrix[0])
        for i in range(len(matrix)):
            if i in iArray:
                matrix[i] = zeroArray
            for j in range(len(matrix[0])):
                if j in jArray:
                    matrix[i][j] = 0
