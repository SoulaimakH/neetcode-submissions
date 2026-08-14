class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        if(t.length!=s.length)return false
        for (const char of s) {
           if(!t.includes(char))return false 
           t=t.replace(char, "");
        }
        return true
    }
}
