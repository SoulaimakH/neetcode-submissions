class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result=0

       for(let i=0;i<height.length;i++){
        let maxl=0
        let maxr=0
        for(let j=0;j<=i;j++)
        {
            maxl=Math.max(maxl,height[j])
        }

        for(let j=i;j<height.length;j++)
        {
            maxr=Math.max(maxr,height[j])
        }
        
        let water = Math.min(maxr,maxl) - height[i]
        if (water > 0) result += water
       }
       return result
    }
}
