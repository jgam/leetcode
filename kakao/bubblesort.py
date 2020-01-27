def countSwaps(a):
    numSwaps = 0

    for i in a:
        for j in range(len(a)-1):
            if a[j] > a[j+1]:
                # swap
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                #numSwaps += 1
                numSwaps += 1

    print('Array is sorted in '+str(numSwaps)+' swaps.')
    print('First Element: '+str(a[0]))
    print('Last Element: '+str(a[len(a)-1]))
