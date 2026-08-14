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
2 methode 
1- : using 2 pointer
previous pointer 
and current 
foreach node 
current node next will the previous
we increment the privous to get value of the current 
and we incment the  current = next of current  
*/
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
     let prev=null
     let curr=head

     while(curr){
        let next=curr.next
        curr.next=prev
        prev = curr
        
        curr=next
     }
     return prev
        

    }
}
