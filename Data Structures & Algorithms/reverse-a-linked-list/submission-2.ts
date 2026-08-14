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
2end : recussion
define the base condition : 1 node => head
2 node : next node is null return head
*/
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
       if (!head || !head.next) return head;

    let newHead = this.reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
    
    }
}
