/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/*
1->n-1
2->n-2
3->n-3
*/
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let org=head
        let prv=null
        let counthead=head
        let c=0
        while(counthead){
            c++
            counthead=counthead.next
        }

        let p=Math.max(0,c-n)
       // console.log(p)
        if(!p)return org.next
        while(p>0){
          //  console.log(p)
            if(head.next){
                prv=head
                head=head.next
            }
           
          else return null

        p--
        }
        //console.log(head)
        if(head&&prv){
        let nx=head.next
        prv.next=nx
        return org}
        else return null


    }
}
