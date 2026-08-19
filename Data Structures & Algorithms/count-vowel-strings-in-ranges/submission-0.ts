class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words: string[], queries: number[][]): number[] {
        let valid="aeiou"
        let r=new Array(queries.length).fill(0)
        let j=0
        for(let q of queries){
            for(let i=q[0];i<=q[1];i++){
                let l=words[i].length

                if(valid.includes(words[i][0])&&valid.includes(words[i][l-1])){
                    r[j]=r[j]+1
                } 
            }
            j++
        }
        return r
    }
}
