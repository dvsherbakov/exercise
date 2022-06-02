def hex_string_to_RGB(hex):
     hex = hex.lstrip('#')
     res={}
     res['r']=int(hex[0:2], 16)
     res['g']=int(hex[2:4], 16)
     res['b']=int(hex[4:6], 16)
     return res


print(hex_string_to_RGB("#FF9933"))

#https://www.codewars.com/kata/5282b48bb70058e4c4000fa7