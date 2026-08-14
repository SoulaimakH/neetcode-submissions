class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    fingerprint(str){
    const binary=new Array(26).fill(0);
    for(const c  of str.toLowerCase()) {
    const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
    binary[index]++;
    }
    return binary.join(',')
    }
    groupAnagrams(strs) {
        const m= new Map()
        for(const str of strs){
            let key=this.fingerprint(str)
            if(m.get(key))m.set(key,[...m.get(key),str])
            else m.set(key,[str])
        }
    return Array.from(m.values())
    }
}
