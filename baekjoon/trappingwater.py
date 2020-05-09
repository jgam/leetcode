class Solution:
    def trap(self, height: List[int]) -> int:

        answer = 0

        # this is n^2 approach
#         for i in range(1, len(height)-1):
#             left = height[i]

#             #check the left from the beginning to current index
#             for j in range(i):
#                 left = max(left, height[j])

#             right = height[i]
#             for j in range(i+1, len(height)):
#                 right = max(right, height[j])
#             if left == height[i] or right == height[i]:
#                 continue
#             else:
#                 answer += min(left,right)-height[i]

        # advance approach
        if len(height) == 0:
            return 0
        left = [0] * len(height)
        right = [0] * len(height)

        left[0] = height[0]

        for i in range(1, len(height)):
            left[i] = max(left[i-1], height[i])

        right[len(height)-1] = height[len(height)-1]
        for i in range(len(height)-2, -1, -1):
            right[i] = max(height[i], right[i+1])

        print(left)
        print(right)

        for i in range(1, len(height)-1):
            if height[i] < min(right[i], left[i]):
                answer += min(right[i], left[i]) - height[i]
        return answer
