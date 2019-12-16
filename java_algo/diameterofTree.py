node = int(raw_input())
tree_info = [[] for _ in range(node + 1)]

for _ in range(node - 1):
    parent, child, length = map(int, raw_input().split())
    tree_info[parent].append((child, length))

print(tree_info)

#BFS
def bfs(graph_list, start):
    visited = []
    queue = [start]
    print('original queue')
    while queue:
        print(queue)
        node = queue.pop(0)
        print(node)
        visited.append(node)
        print(visited)
        for child in graph_list[node]:
            queue.append(child[0])
            
    return visited
    
    
#list creation for sorting
bfs_node = bfs(tree_info, 1)
max_node = [0 for _ in range(node + 1)]
print(max_node)
diameter = [[0] for _ in range(node + 1)]
print(diameter)
max_diameter = [0 for _ in range(node + 1)]
print(max_diameter)


#from the bottom of node, diameters extracted
while bfs_node:
    temp = bfs_node.pop()
    
    for child in tree_info[temp]:
        try:
            child_length = max_node[child[0]] + child[1]
        except:
            child_length = child[1]
        diameter[temp].append(child_length)
        max_node[temp] = max(diameter[temp])
        
    max_diameter[temp] += max(diameter[temp])
    diameter[temp].remove(max(diameter[temp]))
    try:
        max_diameter[temp] += max(diameter[temp])
    except:
        pass
        

#maximum diameter from diameters
print(max(max_diameter))