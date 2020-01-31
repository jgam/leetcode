import math
from functools import reduce

def solution(clothes):
    answer = 0
    clothesDict = {}
    for i in clothes:
        if i[1] in clothesDict:
            clothesDict[i[1]].append(i[0])
        else:
            clothesDict[i[1]] = [i[0]]
    
    listCount = list(map(lambda x: len(x)+1, clothesDict.values()))
    
        
    return reduce(lambda x,y: x*y, listCount) - 1