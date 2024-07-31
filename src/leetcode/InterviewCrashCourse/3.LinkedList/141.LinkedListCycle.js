/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    const set = new Set()
    let pointer = head

    while (pointer !== null) {

        if (set.has(pointer)) {
            return true
        }

        set.add(pointer)
        pointer = pointer.next;


    }

    return false;

};