class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let r=0
        
        let s=0
        let arr=[]
        for(let n of nums){
            s+=n
            arr.push(s)
           
            if(n==k)r++
        }
         console.log(arr)
        for(let i=1;i<arr.length;i++){
            if(arr[i]==k)r++
            //else{
                for(let j=0;j<i-1;j++){
                    if((arr[i]-arr[j])==k)r++
                }
            //}
        }
        return r
    }
}
