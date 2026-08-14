class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let setofnums = new Set<number>()
        let result=false
        let n=0
        while(!result && n<nums.length){
            let prvsize= setofnums.size
            setofnums.add(nums[n])
            if(prvsize==setofnums.size)result=true
            n++;
        }
        return result
    }
}
