// Note: Try to solve this task in-place (with O(1) additional memory),
// since this is what you'll be asked to do during an interview.
// You are given an n x n 2D matrix that represents an image.
// Rotate the image by 90 degrees (clockwise).
//     Example


// a = [[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]

function rotateImage(a) {
    let res = []

    for (let i = 0; i < a[0].length; i++) {
        res[i] = new Array(a.length)
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            res[j][a.length - i - 1] = a[i][j]
        }

    }
    return res
}

rotateImage(
    [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]])