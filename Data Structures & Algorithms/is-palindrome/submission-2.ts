class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        const s2= s.split("").reverse().join("");
        s=s.split("").join("");
        return s2==s
    }
}
