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
    hasCycle(head) {
        let nodes = new Set()
        let current = head

        while(current){
            if(nodes.has(current.next)) return true
            nodes.add(current.next)
            current = current.next
        }
        return false
    }
}
