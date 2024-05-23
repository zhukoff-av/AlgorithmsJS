const board = [1, 2, 3, 4, 5, 6, 7, 0, 8]
const goal = [1, 2, 3, 4, 5, 6, 7, 8, 0]


// 1 find empty space
function findEmptySpace(board) {
    return board.indexOf(0)
}

// 2 Validate inputs/moves
/**
 *
 1 2 3
 4 5 6
 7 8 0
 */

const canMoveUp = (index) => {
    return index > 2
}

const canMoveDown = (index) => {
    return index > 6
}

const canMoveLeft = (index) => {
    return index % 3 > 0
}

const canMoveRigth = (index) => {
    return index % 3 < 2
}

// 4 Implemening moves

const moveUp = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveUp(emptySpace)) {
        [board[emptySpace], board[emptySpace - 3]] = [board[emptySpace - 3], board[emptySpace]]
    }
}

const moveDown = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveUp(emptySpace)) {
        [board[emptySpace], board[emptySpace + 3]] = [board[emptySpace + 3], board[emptySpace]]
    }
}

const moveLeft = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveUp(emptySpace)) {
        [board[emptySpace], board[emptySpace - 1]] = [board[emptySpace - 1], board[emptySpace]]
    }
}

const moveRight = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveUp(emptySpace)) {
        [board[emptySpace], board[emptySpace + 1]] = [board[emptySpace + 1], board[emptySpace]]
    }
}

// console.log("Initial Board:", board.join(" "));
// moveRight(board);
// console.log("After moving right:", board.join(" "));
// moveDown(board);
// console.log("After moving down:", board.join(" "));
