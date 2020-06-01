# using heaps


def solution(stock, dates, supplies, k):
    answer = 0
    heap = []
    index = 0

    # using the heap
    # take out the maximum number out of the heap while in the dates possible
    import heapq
    while(stock < k):
        # first look at the possible dates and put it in the queue
        for i in range(index, len(dates)):
            if dates[i] <= stock:
                heapq.heappush(heap, supplies[i]*-1)
                index += 1
            else:
                # beacuse we cannot get to that specific date
                break

        # print(heapq.heappop(heap))
        # print(heap)
        stock += -1 * heapq.heappop(heap)

        answer += 1
    return answer

    return answer
