# hotter.py\
# using heap


def solution(scoville, K):
    answer = 0

    # here binary search algorithm
    import heapq

    heap = []

    for i in scoville:
        heapq.heappush(heap, i)

    # always compare the first two from list
    while K > heap[0]:
        try:
            heapq.heappush(heap, heapq.heappop(heap) + heapq.heappop(heap)*2)
        except:
            return -1
        answer += 1
        # now you have to place this in efficient way

    return answer
