string_num = int(raw_input())
string_list = []

for _ in range(string_num):
    word = str(raw_input())
    word_count = len(word)
    string_list.append((word, word_count))


string_list = list(set(string_list))


words_list.sort(key=lambda word: (word[1], word[0]))

for word in words_list:
    print(word[0])
