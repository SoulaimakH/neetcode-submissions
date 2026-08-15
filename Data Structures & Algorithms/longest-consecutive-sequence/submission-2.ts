class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let store=new Set<number>()
        for (let n of nums){
            store.add(n)
        }
        let result=0
        for(let n of nums){
            if(!store.has(n-1)){
                let l=0
            let mx=0
            while(mx<nums.length){
                if(store.has(n+mx)){
                    l++
                }
                else break
                mx++
            }
            result = Math.max(l,result)
            }
            
        }

        return result

    }
}
