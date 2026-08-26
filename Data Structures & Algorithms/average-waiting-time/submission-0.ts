class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers: number[][]): number {
         let s=0
 let cur=0
 for(let c of customers){
    cur=Math.max(cur,c[0])
    let w=cur+c[1]-c[0]
    s+=w
    cur=cur+c[1]
 }   

 return s/customers.length
    }
}
