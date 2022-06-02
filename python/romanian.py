def romanize(n):
   n2rMap = {1000:'M', 900:'CM', 500:'D', 400:'CD', 100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4:'IV', 1:'I'}
   roman = ""
   for key in n2rMap.keys():
      count = int(n / key)
      roman += n2rMap[key] * count
      n -= key * count
   return roman

   print(romanize(22))