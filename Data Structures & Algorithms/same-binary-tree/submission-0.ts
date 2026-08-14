/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if(!p && !q)return true
        if(!p || !q)return false

        if(p.val==q.val){
                if(p.left==null && q.left==null && p.right==null && q.right==null ) 
                return true
                else{
                        return this.isSameTree(p.left,q.left) && this.isSameTree(p.right,q.right)
                }
        }
        else return false 
    }
}
