class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let dummy = { next: head };
    let fast = dummy;
    let slow = dummy;

    console.log(fast)

    // move fast n+1 steps
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    // move both
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    // delete node
    slow.next = slow.next.next;

    return dummy.next;
  }
}