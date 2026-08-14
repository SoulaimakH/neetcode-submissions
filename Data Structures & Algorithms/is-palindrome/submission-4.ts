class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphabe(c){
         return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );      
    }
    isPalindrome(s: string) {
        const s2=s.toLowerCase()
        s=s2
        let i=0 
        let j=s.length-1

        while(i<j){
          
          if(this.isAlphabe(s[i]) && this.isAlphabe(s2[j])){
            if(s[i]!=s2[j])return false
          j--
          i++
          }
          else{
            if(!this.isAlphabe(s[i]))i++
            if(!this.isAlphabe(s2[j]))j--
          }
            
        
        }
        return true 
        
    }
}
