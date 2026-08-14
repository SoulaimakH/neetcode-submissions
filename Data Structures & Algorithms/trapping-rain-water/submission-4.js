class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         if(height.length == 0) return 0;
       let ml=height[0]
       let mr=height[height.length-1]
        let i=0
        let j=height.length-1
        let resutl=0
       while(i<=j){
        if(ml<=mr){
            resutl+=Math.max(0,ml-height[i])
            ml=Math.max(ml,height[i])
            i++
        }
        if(mr<ml){
            resutl+=Math.max(0,mr-height[j])
            mr=Math.max(mr,height[j])
            j--
        }
        
       }
       return resutl
    }
}
