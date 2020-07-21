class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        curList = []
        for i in range(n):
            curList.append(i+1)
        
        from itertools import permutations
        perms = list(permutations(curList,n))

        #v = ''.join(perms[0])
        ret = []
        """
        for perm in perms:
            ret.append("".join(map(str,perm)))
        """ 
        for i in range(len(perms)):
            if i == k-1:
                return "".join(map(str,perms[i]))
