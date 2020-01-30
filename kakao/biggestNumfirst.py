import itertools
import functools
import operator


def solution(numbers):
    answer = ''
    current = []
    # generate permutations of the numbers
    #list(itertools.permutations([1, 2, 3]))
    #
    for i in range(len(numbers)):
        numbers[i] = str(numbers[i])

    current = list(itertools.permutations(numbers))
    # print(current)
    currentNum = int(''.join(current[0]))
    # print(currentNum)

    # ''.join also is a loop

    for i in range(1, len(current)):
        compareNum = int(''.join(current[i]))
        if currentNum > compareNum:
            continue
        else:
            currentNum = compareNum

    # print(currentNum)
    # bubble sort and return the last element and that is it

    return str(currentNum)
