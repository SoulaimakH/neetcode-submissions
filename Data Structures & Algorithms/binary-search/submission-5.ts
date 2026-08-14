class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
       let l=0
       let r=nums.length-1
        if(target>nums[r])return -1
        if(target<nums[l])return -1
       while(l<=r){
        if(target==nums[l])return l
         if(target==nums[r])return r
        l++
        r--
       }
       return -1
    }

    
}
