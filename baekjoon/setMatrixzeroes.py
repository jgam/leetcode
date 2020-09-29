class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        zeroesI = []
        zeroesY = []
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    if len(zeroesI) > 0:
                        if zeroesI[-1] != i:
                            zeroesI.append(i)
                    else:
                        zeroesI.append(i)
                    if len(zeroesY) > 0:
                        if zeroesY[-1] != j:
                            zeroesY.append(j)
                    else:
                        zeroesY.append(j)
        
        ItobeReplaced = [0] * len(matrix[0])
        
        # from copy import deepcopy
        
        for i in range(len(matrix)):
            if i in zeroesI:
                matrix[i] = ItobeReplaced
            else:
                for j in zeroesY:
                    matrix[i][j] = 0
        
