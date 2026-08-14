class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /*
    map where se store each element with a value present count
    then we return kem most frequent elements
    */
    topKFrequent(nums: number[], k: number): number[] {
        let m=new Map<number,number>()
        let r=nums.length-1
        let l=0
        while(l<=r){
            if (m.has(nums[l]))
            {
               m.set(nums[l],m.get(nums[l])+1)
            }
            else  m.set(nums[l],1)


            if (m.has(nums[r]))
            {
               m.set(nums[r],m.get(nums[r])+1)
            }
            else  m.set(nums[r],1)

            r--
            l++
        }

        const descKeys = Array.from(m.entries())
  .sort((a, b) => b[1] - a[1])
  .map(([key]) => key);

console.log(descKeys)
console.log(m)
    let result=[]
    let i=0
  while(k){
        result.push(descKeys[i])
        k--
        i++
    }
    return result
    }

    
}
