def balance(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    arr1_c = []
    arr2_c = []
    for i in set1:
        arr1_c.append(arr1.count(i))
    for i in set2:
        arr2_c.append(arr2.count(i))

    if sorted(arr1_c) == sorted(arr2_c):
        return True
    else:
        return False

# https://www.codewars.com/kata/58429d526312ce1d940000ee

array1 = ["a", "a", "a", "a", "a", "b", "b", "b"]
array2 = ["c", "c", "c", "c", "c", "d", "d", "d"]
print(balance(array1, array2))

