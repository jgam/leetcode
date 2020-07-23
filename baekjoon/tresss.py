class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        initial = [[1],[1,1],[1,2,1],[1,3,3,1]]
        if numRows < 4:
            return initial[:numRows]
        else:
            for i in range(3,numRows-1):
                current = [1]
                for j in range(1,len(initial[i])):
                    current.append(initial[i][j-1] + initial[i][j])
                current.append(1)
                initial.append(current)
        return initial
