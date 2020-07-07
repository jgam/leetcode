class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashValue = {}
        
        for i in strs:
            current = ''.join(sorted(i))
            if current in hashValue:
                hashValue[current].append(i)
            else:
                hashValue[current] = [i]
        return list(hashValue.values())
