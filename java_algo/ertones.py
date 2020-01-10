
the_string = raw_input()
first_num, second_num = the_string.split()


#end num

#begin num

#create two lists: 1. sqrt for checking duplicatees, 2. true with the list of booleans

num_list = [0] * int(second_num)

#print(num_list)

#now sqrt list

m = int(int(second_num) ** 0.5)

for i in range(2, m+1):
    if num_list[i] == 0:
        for j in range(i+i, int(second_num), i):
            num_list[j] = 1
num_list[1] = 1
##print([ i for i in range(int(first_num), int(second_num)) if num_list[i]==0])

for i in range(int(first_num), int(second_num)):
    if num_list[i]==0:
        print(i)
    else:
        continue


