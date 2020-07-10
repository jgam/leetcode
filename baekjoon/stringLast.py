class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        if s=="":
            return 0
        if s[-1] == " ":
            s = s.rstrip()
        return len(s.split(" ")[-1])
