def print_hi(name):
    print(f'Hi world, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


def disemvowel(string_):
    for ch in ['a', 'e', 'u', 'i', 'o']:
        if ch in string_:
            string_ = string_.replace(ch, '')
    return string_


if __name__ == '__main__':
    print_hi('PyCharm Base')

a = True
b = False
print(a and b or not a and not b)

x = 5
y = 10
print(y > x * x or y >= 2 * x and x < y)


