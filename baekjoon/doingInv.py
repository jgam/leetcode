
def maxInversions(arr):
    # write your code here
    f = [0] * len(arr)

    # for loop
    for k in range(1, 4):
        print('k loop')
        print(f)
        for i in range(len(arr)):
            print('for loop')
            print(f)
            if k == 1:
                f[i] = 1
            else:
                f[i] = 0
                for j in range(i+1, len(arr)):
                    print('j loop')
                    if arr[j] < arr[i]:
                        f[i] += f[j]
                    print(f)
    print(f)
    return sum(f)

# [5,3,4,2,1]

# [5,4,3],[5,4,2]


print(maxInversions([5, 3, 4, 2, 1]))

# 4 2 2 1 0 this is the list of numbers that can be done with two numbers pair in decreasing number

# because 5 is larger than naything, becomes

# 5 2 2 1 0

# because 3 is larger than 2, 1 => 5 1 2 1 0

# because 4 is larger than 2, 1 => 5 1 1 1 0

# because 2 cannot be done
