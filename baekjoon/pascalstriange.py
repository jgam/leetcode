class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        ans = [[1], [1,1], [1,2,1]]
        
        if numRows < 1:
            return None
        elif numRows < 4:
            return ans[:numRows]
        else:
            for i in range(3, numRows):
                cur = [1]
                for j in range(1,len(ans[i-1])):
                    cur.append(ans[i-1][j-1] + ans[i-1][j])
                cur.append(1)
                ans.append(cur)
        
        return ans
