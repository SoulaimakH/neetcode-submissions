class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const unique=new Set()
        for(const n of nums)
        {
            if(unique.has(n))return true
            unique.add(n)
        }
        return false
    }
}
