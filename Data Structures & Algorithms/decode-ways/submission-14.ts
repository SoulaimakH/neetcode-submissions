class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
     map=new Map<String,number>()
    
   numDecodings(s: string): number {
        if (s.length === 0) return 1;
        if (s[0] === '0') return 0;
        if(this.map.has(s)){
            return this.map.get(s)
        }
        else {

                    let result = this.numDecodings(s.substring(1));

        if (
            s.length >= 2 &&
            parseInt(s.substring(0, 2)) <= 26
        ) {
            result += this.numDecodings(s.substring(2));
        }
        this.map.set(s,result)
        return result;

        }

    }
}
