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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let arr = []

        let current = head
        while(current){
            arr.push(current.val)
            current = current.next
        }

        arr[arr.length-n] = null

        let dummy = new ListNode(0)
        let currentNode = dummy

        for(const value of arr){
            if(value !== null){
                const newNode = new ListNode(value)
                currentNode.next = newNode
                currentNode = currentNode.next
            }
        }

        return dummy.next
    }
}
