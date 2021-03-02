class Solution:
    def longestPalindrome(self, s):
        if len(s) < 1:
            return s

        def isPalindrome(left, right):
            return s[left:right] == s[left:right][::-1]

        left, right = 0, 1
        for index in range(1, len(s)):
            if index - right > 0 and isPalindrome(index - right - 1, index + 1):
                left, right = index - right - 1, right + 2
            if index - right >= 0 and isPalindrome(index - right, index + 1):
                left, right = index - right, right + 1
        return s[left: left + right]
