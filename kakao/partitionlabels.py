class Solution(object):
    def partitionLabels(self, S):
        # {'a': 8, 'b': 5, 'c': 7, 'd': 14, 'e': 15, 'f': 11, 'g': 13, 'h': 19, 'i': 22, 'j': 23, 'k': 20, 'l': 21}
        last = {c: i for i, c in enumerate(S)}
        j = anchor = 0
        ans = []
        for i, c in enumerate(S):
            j = max(j, last[c])  # update the current max possible Index
            if i == j:
                ans.append(i - anchor + 1)
                anchor = i + 1  # anchor never changes

        return ans
