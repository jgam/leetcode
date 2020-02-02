class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        ret = []
        current = collections.defaultdict(list)

        for x, i in enumerate(groupSizes):
            current[i].append(x)
            if len(current[i]) == i:
                ret.append(current[i])
                current[i] = []
        return ret
