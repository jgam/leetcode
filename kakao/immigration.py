def solution(n, times):
    answer = 0
    maxtime = max(times) * n
    temp = maxtime
    answer = maxtime
    left = 0
    right = maxtime
    while right >= left:
        mid = (right+left) / 2
        people = 0
        for i in times:
            people += int(mid//i)
        #with half, we can reduce the num size
        if people == n:
            if answer >= mid:
                answer = mid
            right = mid -1
        elif people > n:
            right = mid - 1
        else:
            left= mid + 1
    #what is this?
    
    if answer == temp:
        return int(right+1)
    else:
        return int(answer)