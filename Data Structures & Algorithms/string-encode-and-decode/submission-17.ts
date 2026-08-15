class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result=""
        for(let s of strs){
            result+=s.length+"#"+s
        }
        
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result=[]
        let i=0
        

        while(i<str.length){
            let j=i
            while(str[j]!="#"){
                j++
            }
            
            let length=Number(str.substring(i,j))
            let s=str.substring(j+1,j+1+length)
            j=j+1+length
            i=j
            result.push(s)
            
        }
    return result
    }
}
