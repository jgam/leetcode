#test.py

from itertools import permutations

a = set(permutations(["1","2","3","4","5","6","7","8","9"], 3))
print(a)

for i in a:
    print("".join(i))