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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeTwoList(l1, l2) {
        let dummyList = new ListNode(0)
        let current = dummyList

        while(l1 && l2){
            if(l1.val <= l2.val){
                current.next = l1
                l1 = l1.next
            }else{
                current.next = l2
                l2 = l2.next
            }
            current = current.next
        }

        current.next = l1 || l2

        return dummyList.next
    }

    mergeKLists(lists) {
        if(lists.length===0) return null

        let final = lists[0]

        for(let i=1; i<lists.length; i++){
            final = this.mergeTwoList(final, lists[i])
        }

        return final
    }
}
