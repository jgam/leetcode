class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        import copy

        dp = copy.deepcopy(grid)

        xMax = len(grid)
        yMax = len(grid[0])

        currentQueue = []

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 2:
                    currentQueue.append([i, j])

        count = 0
        while len(currentQueue) > 0:
            currentRange = len(currentQueue)
            cond = False
            # print(currentQueue)
            for _ in range(currentRange):

                indexes = currentQueue.pop(0)
                findingIndexes = [[indexes[0]-1, indexes[1]], [indexes[0]+1, indexes[1]], [
                    indexes[0], indexes[1]-1], [indexes[0], indexes[1]+1]]
                dp[indexes[0]][indexes[1]] = 2
                # change x and y
                for xy in findingIndexes:
                    if xy[0] < 0:
                        continue
                    elif xy[0] >= xMax:
                        continue
                    elif xy[1] < 0:
                        continue
                    elif xy[1] >= yMax:
                        continue
                    else:
                        if dp[xy[0]][xy[1]] != 1:
                            continue
                        else:
                            if [xy[0], xy[1]] in currentQueue:
                                continue
                            else:
                                cond = True
                                currentQueue.append([xy[0], xy[1]])
            if cond:
                count += 1
        # print(dp)
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if dp[i][j] == 1:
                    return -1
        return count
