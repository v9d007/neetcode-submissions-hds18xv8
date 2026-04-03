class Solution {
  removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // move first n+1 steps
    for (let i = 0; i <= n; i++) {
      first = first.next;
    }

    // move both pointers
    while (first) {
      first = first.next;
      second = second.next;
    }

    // delete node
    second.next = second.next.next;

    return dummy.next;
  }
}