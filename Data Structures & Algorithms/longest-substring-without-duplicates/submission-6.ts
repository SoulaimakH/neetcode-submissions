class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

    let l=s.length
    let st = new Map<string, number>();
    let i=0
    let nb=0
    let max=0
    if (s.length === 0) return 0;
        if (s.length === 1) return 1;
    while(i<l){
        if(!st.has(s[i])){
            st.set(s[i],i)
            nb=st.size
            
        }
        else{
            nb=st.size
            i=st.get(s[i])+1;
            st=new Map<string, number>();
            st.set(s[i],i)
            

        }
        max=Math.max(max,nb)
        i++
    }

    
    return max
    }
}
