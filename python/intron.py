dnk = input()
startPos = max(0,  int(input()))
endPos = max(startPos,  int(input()))
print((dnk, dnk.replace(dnk[startPos:endPos], ""))[(startPos < len(dnk) and endPos < len(dnk))])
