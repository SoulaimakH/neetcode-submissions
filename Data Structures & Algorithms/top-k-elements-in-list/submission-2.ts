class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count={}
        const fq=Array.from({length:nums.length+1},()=>[])
        
        for(const n of nums) {
             count[n] = (count[n] || 0) + 1;
        }
       
        for (const c in count){
            fq[count[c]].push(parseInt(c))
        }
        let res=[]

        for(let i=nums.length;i>=0;i--){
            for(const v of fq[i] )
            {
                res.push(v)
                if(res.length==k)return res
            }
        }
        return res
    }
}
