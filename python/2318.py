r = 4 ** 503 + 3 * 4 ** 244 - 2 * 4 ** 444


def F(n):
    if n <= 5:
        return n
    if n > 5 and n % 5 == 0:
        return n + F(n / 5 + 1)
    if n > 5 and n % 5 != 0:
        return n + F(n + 6)
    return -1


p = 10
r = 0
while r <= 1000:
    p += 1
    r = F(p)

print(p, r)
