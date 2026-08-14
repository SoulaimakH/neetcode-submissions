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
1- create second half of the liste and revert it 
2- seperate the first half
3- concatination element form 1ft half and element fropm second 
*/

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
    
    let slow=head
    let fast=head

    while(fast && fast.next &&fast.next.next)
    {
         // console.log(fast)
        slow=slow.next
        fast=fast.next.next
    }
    let second=slow.next
    slow.next=null

    let prv=null
    let cur=second
  //  console.log(slow,second)
    while(cur){
       
        let nx=cur.next
        cur.next=prv
        prv=cur
        cur=nx
         //console.log(nx,cur,prv)
    }

     second=prv   
    let first=head
    while(first && second)
    { let t1=first.next
    let t2=second.next

    first.next=second

    second.next=t1

    first=t1
    second=t2


    }
   
    }
}
