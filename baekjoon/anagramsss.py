class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs)< 2:
            return [strs]
        
        curHash = {}
        
        for eachWord in strs:
            sortedStr = sorted(eachWord)
            key = ''.join(sortedStr)
            
            if key in curHash:
                curHash[key].append(eachWord)
            else:
                curHash[key] = [eachWord]
        return list(curHash.values())
