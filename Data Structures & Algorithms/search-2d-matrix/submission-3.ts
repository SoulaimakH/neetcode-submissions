class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
     search(tab:number[],t:number){
       let r=tab.length
       let l=0
       while(r>=l){
        let mid=Math.floor((r+l)/2)
        if(t==tab[mid])return true
        if(t>tab[mid])l=mid+1
        else r=mid-1
       }
       return false
    }
    searchMatrix(matrix: number[][], target: number): boolean {
        let newtab=[]
        for(let i=0;i<matrix.length;i++){
            newtab.push(...matrix[i])
            
        }
        //console.log(newtab)
        return this.search(newtab,target)
    }
}
