class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        #sorted people
        cur = sorted(people, key = lambda x: (-x[0], x[1]))
        
        #ret declaration
        ret = []
        
        #insert element at certain positions
        for _ in range(len(people)):
            curTobeAdded = cur.pop(0)
            if(len(ret) <= curTobeAdded[1]):
                ret.append(curTobeAdded)
            else:
                ret.insert(curTobeAdded[1], curTobeAdded)
        
        return ret
