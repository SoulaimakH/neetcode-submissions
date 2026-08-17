class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
            let arrcp=[...arr]
    for(let i=0; i<=arr.length-2;i++){
        let r=arr.length-1
        let l=i+1
        arrcp[i]=arrcp[l]
        
        while(l<=r){
            
            if(arrcp[i]<arrcp[l]){
                arrcp[i]=arrcp[l]
            }
            if(arrcp[i]<arrcp[r]){
                arrcp[i]=arrcp[r]
            }
            l++
            r--
           
        }
    }
    arrcp[arr.length-1]=-1
    return arrcp
    }
}
