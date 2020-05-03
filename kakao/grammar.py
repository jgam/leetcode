# testpython


import sys


def multiply_number(num):
    def product(number):
        'product() here is a closure'
        print('num is ', num)
        print('number is ', number)
        return num * number
    return product


num_2 = multiply_number(2)
print(num_2(11))
print(num_2(24))

num_6 = multiply_number(6)
print(num_6(1))


def trace_calls(frame, event, arg):
    # The 'call' event occurs before a function gets executed.
    if event != 'call':
        return
    # Next, inspect the frame data and print information.
    print 'Function name=%s, line num=%s' % (frame.f_code.co_name, frame.f_lineno)
    return


def demo2():
    print 'in demo2()'


def demo1():
    print 'in demo1()'
    demo2()


sys.settrace(trace_calls)
demo1()
