class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        print(matrix)
        dp = matrix
        
        #count all single 1s
        counter = 0
        for i in matrix:
            for j in i:
                if j == 1:
                    counter += 1
        
        #count nxn squares starting with 2
        while len(dp) > 1:
            temp_list = []
            for i_index in range(len(dp)-1):
                current = []
                for j_index in range(len(dp[i_index])-1):
                    #check if around is 1
                    if dp[i_index][j_index] == 1 and dp[i_index+1][j_index+1]:
                        if dp[i_index+1][j_index] == 1 and dp[i_index][j_index+1]:
                            counter += 1
                        else:
                            dp[i_index][j_index] = 0
                    else:
                        dp[i_index][j_index] = 0
                    current.append(dp[i_index][j_index])
                temp_list.append(current)
            dp = temp_list

        return counter
        