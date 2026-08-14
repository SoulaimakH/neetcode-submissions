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
 take each node and look to it best position on fist list 
 o(n*n)

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
        let result: ListNode=new ListNode()
        let head=result
        while(list1){
            
            if(list2){
              
                if(list2.val>list1.val){
                     result.next=new ListNode()
                     result.next.val=list1.val
                    
                    list1=list1.next
                    result=result.next
                     
                }
               else if(list2.val<list1.val){
                    
                     result.next=new ListNode()
                    
                     result.next.val=list2.val
                    
                    list2=list2.next
                     result=result.next
                      
                }
                else if(list2.val==list1.val){
                    result.next=new ListNode()
                     result.next.val=list1.val

                    result.next.next=new ListNode()
                     result.next.next.val=list2.val

                    list1=list1.next
                    list2=list2.next
                    result=result.next.next
                     
                }
            }
            else{
               
                result.next=list1
                return head.next    
            }
         
        }
       
      result.next=list2
       return head.next   
       
    }
}
console