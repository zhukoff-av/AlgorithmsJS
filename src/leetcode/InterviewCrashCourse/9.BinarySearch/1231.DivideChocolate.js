// You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.
//
//     You want to share the chocolate with your k friends so you start cutting the chocolate bar into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.
//
//     Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.
//
//     Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

//     Example 1:
//
// Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5
// Output: 6
// Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
// Example 2:
//
// Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8
// Output: 1
// Explanation: There is only one way to cut the bar into 9 pieces.
//     Example 3:
//
// Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2
// Output: 5
// Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]

const maximizeSweetness = function (sweetness, k) {
    let numberOfPeople = k + 1;
    let left = 0;
    let right = Math.floor(sweetness.reduce((x, y) => x + y) / numberOfPeople);

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        let curSweetness = 0;
        let pieces = 0;

        for (const s of sweetness) {
            curSweetness += s;
            if (curSweetness >= mid) {
                pieces += 1;
                curSweetness = 0;
            }
        }

        if (pieces >= numberOfPeople) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return right;
};