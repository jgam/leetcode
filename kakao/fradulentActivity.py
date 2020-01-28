# Complete the activityNotifications function below.
def mergeSorted(newExpenditure, added, removed):
    # first remove in Expenditure
    newExpenditure.remove(removed)
    # then find where to add added using mergesort
    for i in range(len(newExpenditure)):
        #[2,3,4,5,5], [4]
        if added >= newExpenditure[i]:
            if i == (len(newExpenditure)-1):
                newExpenditure.append(added)
                break
            else:
                continue
                #newExpenditure.insert(i-1, added)
                # break
        else:
            newExpenditure.insert(i-1, added)
            break
    return newExpenditure
    '''
    currentLenght = int(len(newExpenditure)/2)
    while True:
        if newExpenditure[currentLenght] > added:
            #reduce currentLength to half again
        else:
            #add the half of currentLength to it
    '''


def activityNotifications(expenditure, d):
    notice = 0
    fixedD = d
    # within, calculate median index or median calculation when d is even
    medianIndex = 0
    medianIndex2 = -1
    if d % 2 == 0:
        # index needs to be caalculated
        medianIndex = int(d/2)
        medianIndex2 = medianIndex - 1
    elif d == 1:
        medianIndex = 0
    else:
        medianIndex = int((d-1)/2)

    print(medianIndex)
    print(medianIndex2)

    newExpenditure = sorted(expenditure[:d])
    # for loop must be from the d
    for i in range(d, len(expenditure)):
        # here we should come up with newExpenditure with sorted from certain range

        removed = expenditure[i-d]
        # calculate the compareFradulent with condition of medianIndex2
        compareFradulent = 0
        if medianIndex2 < 0:
            print('here', newExpenditure, i, removed)
            compareFradulent = newExpenditure[medianIndex] * 2
            # this needs to be done merge-sorted
            newExpenditure = mergeSorted(
                newExpenditure, expenditure[i], removed)
        else:
            print('here2')
            compareFradulent = newExpenditure[medianIndex] + \
                newExpenditure[medianIndex2]
            # this needs to be done merge-sorted
            newExpenditure = mergeSorted(
                newExpenditure, expenditure[i], removed)
        # compare whether to add notice or not
        if expenditure[i] >= compareFradulent:
            print('fradulent', compareFradulent, expenditure[i])
            notice += 1

    return notice

    # compare and given condition add 1 to notics
