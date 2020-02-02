class Solution:
    def balancedStringSplit(self, s: str) -> int:
        ret = 0
        current = 0
        for i in s:
            if i == 'R':
                current += 1
            elif i == 'L':
                current -= 1
            else:
                continue

            if current == 0:
                ret += 1
        return ret
