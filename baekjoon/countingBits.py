class Solution:
    def countBits(self, num: int) -> List[int]:
        ret = [0,1,1]
        
        if num < 3:
            return ret[:num+1]
        current_two = 2
        two_power = 4
        for i in range(3,num+1):
            if i % two_power == 0:
                current_two = i
                two_power *= 2
                ret.append(1)
            else:
                ret.append(ret[current_two] + ret[i-current_two])
        return ret