#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the getMinimumCost function below.
def getMinimumCost(n, k, c):
    c.sort()
    ret = 0
    currentCount = 0
    if k == n:
        return sum(c)
    else:#n will never be less than k
        #this is when we need greedy
        currentMultiply = 1
        for i in range(len(c)-1, -1, -1):
            if currentCount == k:
                currentCount = 0
                currentMultiply += 1
            ret += c[i] * currentMultiply
            currentCount += 1
        return ret



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    minimumCost = getMinimumCost(n, k, c)

    fptr.write(str(minimumCost) + '\n')

    fptr.close()
