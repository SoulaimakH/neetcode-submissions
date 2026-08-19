class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let r=s.length-1
        let l=0
        let result=0
        while(l<=r-1){
           // console.log(s[l],s[l+1],s[r],s[r-1],result)
            if(l!=r-1){
             result+=Math.abs(s[l+1].charCodeAt(0)-s[l].charCodeAt(0))
            l++
            result+=Math.abs(s[r].charCodeAt(0)-s[r-1].charCodeAt(0))
            r--
            }
            else {
                
               result+= Math.abs(s[r].charCodeAt(0)-s[r-1].charCodeAt(0))
                l++
                r--
                
            }

        }
        
        return result
    }
}
