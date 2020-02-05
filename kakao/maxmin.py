#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maxMin function below.
def maxMin(k, arr):
    arr.sort()
    #k = 3
    #[1 2 3 4 5 6 7 8]
    answer = arr[-1]
    for endIndex in range(k,len(arr)+1):
        #newArr = arr[endIndex-k:endIndex]#this is the subarray
        maxNewArr = arr[endIndex-1]
        minNewArr = arr[endIndex-k]

        if answer > (maxNewArr - minNewArr):
            answer = maxNewArr - minNewArr
    return answer

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    k = int(input())

    arr = []

    for _ in range(n):
        arr_item = int(input())
        arr.append(arr_item)

    result = maxMin(k, arr)

    fptr.write(str(result) + '\n')

    fptr.close()
