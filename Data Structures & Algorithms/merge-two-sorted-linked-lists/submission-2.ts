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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1)return list2
        if(!list2)return list1
        let dummy=new ListNode()
        let head=dummy
        while(list1){
             console.log(list1,list2)
            if(list2){
               
                if(list1.val<list2.val){
                    dummy.next=new ListNode(list1.val,null)
                    list1=list1.next
                   dummy=dummy.next
                }
                else  if(list1.val>list2.val){
                     dummy.next=new ListNode(list2.val,null)
                    list2=list2.next
                    dummy=dummy.next
                }
                else if(list1.val==list2.val){
                    dummy.next=new ListNode(list2.val,new ListNode(list1.val,null))
                    
                    list2=list2.next
                    list1=list1.next
                    dummy=dummy.next.next
                }

            }
            else
            {
                dummy.next=list1
                list1=null
            }
        }
        if(list2){
            dummy.next=list2
        }
        return head.next
    }
}
