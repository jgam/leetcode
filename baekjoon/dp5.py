class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_index = 0
        if s=="":
            return True
        
        if t=="":
            return False
        
        for i in range(len(t)):
            if t[i] == s[s_index]:
                if s_index == len(s) - 1:
                    return True
                s_index += 1
        return False
        