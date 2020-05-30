class Solution:
    def maxArea(self, height: List[int]) -> int:

        start = 0
        end = len(height)-1

        areas = []

        while start <= end:
            curMin = min(height[start], height[end])
            areas.append(curMin * (end-start))

            if curMin == height[start]:
                start += 1
            else:
                end -= 1
        return max(areas)
