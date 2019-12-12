string_num = int(raw_input())
string_list = []

for _ in range(string_num):
    string = str(raw_input())
    string_count = len(string)
    string_list.append((string, string_count))


string_list = list(set(string_list))


string_list.sort(key=lambda string: (string[1], string[0]))

for i in string_list:
    print(i[0])
