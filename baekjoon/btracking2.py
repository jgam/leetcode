class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        curHash = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }
        
        ans = []
        
        def generate(current, curIndex):
            if curIndex == len(digits):
                if curIndex == 0:
                    return 0
                else:
                    ans.append(current)
                return 0
            else:
                #list of alphabets
                curAlphas = curHash[int(digits[int(curIndex)])]
                
                for alpha in curAlphas:
                    generate(current+alpha, curIndex+1)
        
        generate('', 0)
        return ans
            
