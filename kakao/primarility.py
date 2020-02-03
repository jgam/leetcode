#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the primality function below.
def primality(n):
    if n == 1 or n == 0:
        return "Not prime"
    
    if n == 2:
        return "Prime"
    #eratones's amy
    forRange = int(math.sqrt(n))+1
    #now use for loop to check
    for checkNum in range(2, forRange):
        if n % checkNum == 0:
            return "Not prime"
    return "Prime"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    p = int(input())

    for p_itr in range(p):
        n = int(input())

        result = primality(n)

        fptr.write(result + '\n')

    fptr.close()
