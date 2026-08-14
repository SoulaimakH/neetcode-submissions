/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    /*try toi do it using method fast slow*/
    hasCycle(head: ListNode | null): boolean {
        while(head){
            if(head.val!=-1001){
                head.val=-1001
                head=head.next
            }
            else return true
        }
        return false
    }
}
