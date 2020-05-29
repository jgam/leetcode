from itertools import permutations


def solution(s):
    listS = list(s)

    current = []

    for i in range(1, len(s)+1):
        pm = list(permutations(listS, i))
        curEle = []
        for j in pm:
            curEle.append(int(''.join(j)))

        curEle = list(set(curEle))
        current += curEle

    current = list(set(current))
    print(current)

    def checkPrime(num):
        import math
        if num <= 1:
            return False
        elif num <= 3:
            return True

        for i in range(2, int(math.sqrt(num))+1):
            if num % i == 0:
                return False
        return True

    ans = 0
    for i in current:
        if checkPrime(i):
            ans += 1
    return ans
