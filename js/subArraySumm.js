const subArraySum = (nums, k) => {
    let answer = 0, currentSum = 0, iSums = new Map([[0, 1]])

    for (i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        const toRemove = currentSum - k
        answer += iSums.get(toRemove) || 0
        const prevCount = iSums.get(currentSum) || 0
        iSums.set(currentSum, prevCount + 1)
    }

    return answer
}

console.log(subArraySum([4, 1, 6, -2, -1, 5, 4, 3, 8, -3, 1, 5], 5))
console.log(subArraySum([7, 2, -5, 1, 1, -1, 5, -5], 5))
console.log(subArraySum([5, 1, 3], 5))
console.log(subArraySum([5, 5, 5], 5))
