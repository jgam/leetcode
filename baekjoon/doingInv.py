
def maxInversions(arr):
    # write your code here
    f = [0] * len(arr)

    # for loop
    for k in range(1, 4):
        for i in range(len(arr)):
            if k == 1:
                f[i] = 1
            else:
                f[i] = 0
                for j in range(i+1, len(arr)):
                    if arr[j] < arr[i]:
                        f[i] += f[j]
    print(f)
    return sum(f)


print(maxInversions([5, 3, 4, 2, 1]))
