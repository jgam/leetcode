class Solution:
    def isPalindrome(self, x: int) -> bool:
        print(x)
        if str(x)[0] == "-":
            return False
        total_length = len(str(x))
        if total_length % 2 == 0:
            #even number of palindrome integer
            mid_index = int(total_length/2)
            print(mid_index)
            cmp_a = str(x)[:mid_index]
            cmp_b = str(x)[mid_index:][::-1]
            if cmp_a==cmp_b:
                return True
        else:
            #odd number
            mid_index = total_length//2
            cmp_a = str(x)[:mid_index]
            cmp_b = str(x)[mid_index+1:]
            cmp_b = cmp_b[::-1]
            if cmp_a==cmp_b:
                return True
        return False