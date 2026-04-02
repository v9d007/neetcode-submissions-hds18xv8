// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null
        let prev = null
        let current = head

        while(current){
            let nextTemp = current.next
            current.next = prev
            prev = current
            current = nextTemp
        }
        return prev
    }
}
