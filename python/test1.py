n = int(input())
a = [0]*n
for i in range (0, n):
    a[i] = int(input())
minCh=1000001
for fm in range(0, n-7):
    for sm in range(fm+7, n):
        if ((a[fm]&1)+(a[sm]&1))<2:
            tmp = a[fm]*a[sm]
            if tmp<minCh:
                minCh = tmp
res = 0 if minCh==1000001 else minCh
print(res)