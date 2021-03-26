class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        def recursiveCall(curWords, wordsLeft):
            for eachWordIndex in range(len(curWords)):
                print(eachWordIndex, wordsLeft)
                if curWords[eachWordIndex] == wordsLeft:
                    return True
                elif curWords[eachWordIndex] == wordsLeft[:len(curWords[eachWordIndex])]:
                    #then this return
                    if eachWordIndex == len(curWords) - 1:
                        return recursiveCall(curWords,wordsLeft[len(curWords[eachWordIndex]):])
                    else:
                        return recursiveCall(curWords,wordsLeft[len(curWords[eachWordIndex]):])
                else:
                    continue
            return False
        
        wordDict.sort()
        
        for i in range(len(wordDict)):
            if wordDict[i][0] == s[0]:
                return recursiveCall(wordDict[i:], s)
            else:
                return False
