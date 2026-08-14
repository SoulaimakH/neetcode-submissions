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
     * @return {void}
     */
    reverse(head: ListNode){
        if(!head || !head.next)return head
        let newhead=this.reverse(head.next)
        head.next.next=head
        head.next=null
        return newhead
    }
    reverseList(head: ListNode | null): ListNode {
         let pr=null
         let cur=head
        while(cur){
        let nx=cur.next
        cur.next=pr
        pr=cur
        cur=nx         
        }
        return pr
        
    }
    reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    // 1. Find middle
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let second = slow.next;
    slow.next = null;

    second = this.reverseList(second);

    // 3. Merge two halves
    let first = head;

    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;

        first.next = second;
        second.next = tmp1;

        first = tmp1;
        second = tmp2;
    }
}
}
