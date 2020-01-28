answer = 0


def solution(numbers, target, index=0):
    #answer = 0
    if index == len(numbers)-1:
        # then here do the calculation with sum after adding the values
        if sum(numbers) == target:
            answer += 1

        numbers[-1] = numbers[-1] * -1
        if sum(numbers) == target:
            answer += 1
    else:
        # first case
        solution(numbers, target, index+1)
        #second - case
        numbers[index] = numbers[index] * -1
        solution(numbers, target, index+1)
    print(target)
    return answer
