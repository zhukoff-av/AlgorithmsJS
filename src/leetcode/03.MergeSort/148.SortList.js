var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    // find the middle of the LL
    const getMid = (head) => {
        let slow = head;
        let fast = head;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) prev.next = null;
        return slow;
    };

    // merge two sorted LL
    function merge(left, right) {
        const dummy = new ListNode();
        let current = dummy;
        while (left && right) {
            if (left.value < right.value) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }
        current.next = left || right;
        return dummy.next;
    }

    const mid = getMid(head);

    const left = sortList(head);
    const right = sortList(mid);

    return merge(left, right);
};
