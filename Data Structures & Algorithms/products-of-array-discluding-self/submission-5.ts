class Solution {
    productExceptSelf(nums: number[]): number[] {
        let prefix = [nums[0]]
        let postfix = [nums[nums.length - 1]]

        let j = nums.length - 2

        for (let i = 1; i < nums.length; i++) {
            prefix.push(prefix[i - 1] * nums[i])
            postfix.push(postfix[i - 1] * nums[j])
            j--
        }

        postfix.reverse()

        let result = []

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result.push(postfix[i + 1])
            } else if (i === nums.length - 1) {
                result.push(prefix[i - 1])
            } else {
                result.push(prefix[i - 1] * postfix[i + 1])
            }
        }

        return result
    }
}