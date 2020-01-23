def makeAnagram(a, b):
    # first sort the strings and make an aray
    a = sorted(a)
    b = sorted(b)
    a_count = 0

    # go through a and check remove elements in b
    for i in a:
        if i in b:
            a_count += 1
            b.remove(i)

    # return length of a and b
    return len(a)-a_count+len(b)
