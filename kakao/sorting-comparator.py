from functools import cmp_to_key


class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return (self.name + ' ' + str(self.score))

    def comparator(a, b):  # compares them and returns a negative number for less than, zero for equality, and a positive number for a greater than
        #print(a.score ,b.score , 'asdfasdfasdf')
        if a.score < b.score:
            return 1
        elif a.score > b.score:
            return -1
        elif a.score == b.score:
            # here then compare the names
            value = min(a.name, b.name)
            if value == a.name:
                return -1
            elif value == b.name:
                return 1
            else:
                return 0
        else:
            return 0
        return 1

    '''
        if a.score > b.score:
            return 1
        elif a.score < b.score:
            -1
        else:
            return 0
    '''
