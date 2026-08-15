class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let nm=0
        for(let s of details){
            let a=Number(s.substring(11,13))
            if(a>60)nm++
        }
        return nm
    }
}
