class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        visited = [0] * len(M)

        def dfs(y):
            # from y+1 to end of y call dfs and change visited
            for i in range(len(M[y])):
                if i == y:
                    continue

                if M[y][i] == 1:
                    if visited[i] == 1:
                        continue
                    else:
                        visited[i] = 1
                        # print(y,i)
                        dfs(i)
                else:
                    continue
            return 0
        count = 0
        for i in range(len(visited)):
            #print(visited, count)
            if visited[i] == 0:
                visited[i] = 1
                dfs(i)
                count += 1
                # run dfs
            else:
                continue
        return count
