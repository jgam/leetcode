def isValid(s):
    '''
    orig_length = len(s)
    print(orig_length)
    set_length = len(set(s))

    if orig_length % set_length == 0:
        return 'YES'
    elif (orig_length-1) % set_length == 0:
        return 'YES'
    elif (orig_length+1) % set_length == 0:
        return 'YES'
    else:
        return 'NO'

    '''

    '''
    count_list = []
    currentAlph = s[0]
    currentCount = 1
    for i in range(1, len(s)):
        if s[i] == currentAlph:
            currentCount += 1
            if i == (len(s)-1):
                if currentCount not in count_list:
                    if len(count_list) == 2:
                        return 'NO'
                    else:
                        count_list.append(currentCount)
        else:
            if currentCount not in count_list:
                # append it to count_list
                # if len is already two? then return NO
                if len(count_list) == 2:
                    return 'NO'
                else:
                    count_list.append(currentCount)

            currentAlph = s[i]
            currentCount = 1

    if (max(count_list) - min(count_list)) > 1:
        return 'NO'
    return 'YES'
'''
s = input().strip()
freq = collections.Counter(s)#{'a':2, 'b':2...'d':1}
values = list(freq.values())#[2,2,1,1]
values.sort()#[1,1,2,2]
print('YES' if values.count(values[0]) == len(values) or (values.count(values[0]) == len(values) - 1 and values[-1] - values[-2] == 1) or (values.count(values[-1]) == len(values) - 1 and values[0] == 1) else 'NO')
