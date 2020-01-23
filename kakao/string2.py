def alternatingCharacters(s):
    # with for loop check alternated chars
    ret = 0
    current = s[0]
    for i in range(1, len(s)):
        if s[i] == current:
            ret += 1
        else:
            current = s[i]
    return ret
