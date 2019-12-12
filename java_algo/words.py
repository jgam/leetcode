import fileinput


string_num = int(raw_input())
string_list = []

for i in range(string_num):
    current = str(raw_input())
    string_list.append(current)

print(string_list)
