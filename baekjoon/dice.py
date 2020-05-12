def solution(A):
    compare = []

    compare_dict = {

    }

    for i in range(1, 7):
        count = 0
        for j in range(len(A)):
            current = A[j]
            #make dict for it
    return 0


def solutionC(A):
    sumNum = sum(A)

    dp = []
    dp.append(A[0])

    for i in range(1, len(A)):
        if dp[i-1] < (sumNum -dp[i-1]):
            return i
        else:
            dp.append(dp[i-1]+A[i])
    return 0

print(solutionC([1,-3,3,8,5]))
print(solutionC([-5, -43, 6, 16]))