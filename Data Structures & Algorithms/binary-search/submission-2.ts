class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let n=Math.floor(nums.length/2)
        console.log(n)
        while(nums[n]<=target && n<nums.length)
        {
        if(nums[n]==target)return n
        n++
        }
         n=Math.floor(nums.length/2)
        while(nums[n]>=target && n>=0)
        {
        if(nums[n]==target)return n
        n--
        }
        return -1
    }
}
