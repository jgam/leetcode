from collections import defaultdict, deque

def solution(n, edge):
    dists = {i:0 for i in range(1, n+1)}#{1:0, 2:0...}
    edges = defaultdict(list)
    
    for u, v in edge:
        edges[u].append(v)
        edges[v].append(u)
    #print(edges)
    #print(dists)
    #do bfs and search each node accordingly
    q = deque(edges[1])#initialize for 1 [3,2]
    #print(q)
    dist = 1
    #print(edges)
    while q:
        size = len(q)# 2
        for i in range(size):# 0 1
            #v is current node
            v = q.popleft()
            #if not visited, then put length and connect with other
            if dists[v] == 0:#{1:0, 2:0, 3:0...}
                dists[v] = dist#{...3:1...}
                for w in edges[v]:#go to 3 [6,4,2,1]
                    q.append(w)
        dist += 1
    
    del dists[1]
    a = list(dists.values())
    a.sort()
    a = a[::-1]
    maxNum = a[0]
    ans = 0
    for i in a:
        if i != maxNum:
            return ans
        ans += 1