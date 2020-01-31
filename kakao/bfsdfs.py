def bfs(graph, start_node):
    visit = list()
    queue = list()
    print('in bfs')
    #first in first out
    queue.append(start_node)
    #queue = [A], visit = []

    while queue:
        node = queue.pop(0)
        if node not in visit:
            visit.append(node)
            print(visit)#['A']
            queue.extend(graph[node])#['A','C','H']
            print(queue)#['B']

    return visit


def dfs(graph, start_node):
    visit = list()
    stack = list()

    stack.append(start_node)

    while stack:
        node = stack.pop()
        if node not in visit:
            visit.append(node)
            stack.extend(graph[node])

    return visit

#gogo
if __name__ == "__main__":
    graph = {
        'A': ['B'],
        'B': ['A', 'C', 'H'],
        'C': ['B', 'D', 'G'],
        'D': ['C', 'E'],
        'E': ['D', 'F'],
        'F': ['E'],
        'G': ['D'],
        'H': ['B', 'I', 'J', 'M'],
        'I': ['H'],
        'J': ['H', 'K'],
        'K': ['J', 'L'],
        'L': ['K'],
        'M': ['H']
    }

    print(bfs(graph, 'A'))
    print(dfs(graph, 'A'))