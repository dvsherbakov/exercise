def luck_check(string):
    i, j, total = 0, len(string) - 1, 0
    while i != j and i < j:
        total += (int(string[i]) - int(string[j]))
        i += 1
        j -= 1
    return total == 0


print(luck_check('6F43E8'))

# https://www.codewars.com/kata/5314b3c6bb244a48ab00076c