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
    return index < 6
}

const canMoveLeft = (index) => {
    return index % 3 > 0
}

const canMoveRight = (index) => {
    return index % 3 < 2
}

// 4 Implemening moves
const moveUp = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveUp(emptySpace)) {
        [board[emptySpace], board[emptySpace - 3]] = [board[emptySpace - 3], board[emptySpace]]
        return true
    }
    return false
}

const moveDown = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveDown(emptySpace)) {
        [board[emptySpace], board[emptySpace + 3]] = [board[emptySpace + 3], board[emptySpace]]
        return true
    }
    return false
}

const moveLeft = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveLeft(emptySpace)) {
        [board[emptySpace], board[emptySpace - 1]] = [board[emptySpace - 1], board[emptySpace]]
        return true
    }
    return false
}

const moveRight = (board) => {
    const emptySpace = findEmptySpace(board)
    if (canMoveRight(emptySpace)) {
        [board[emptySpace], board[emptySpace + 1]] = [board[emptySpace + 1], board[emptySpace]]
        return true
    }
    return false
}

const solvePuzzle = (board) => {
    let queue = [];
    const visited = new Set();
    const boardToString = (board) => board.join(",");

    if (boardToString(board) === boardToString(goal)) return [];

    queue.push({ board: board, path: [] });
    visited.add(boardToString(board)); // Mark the initial state as visited

    while (queue.length > 0) {
        let { board, path } = queue.shift();

        // Generate all possible moves from the current state
        [[moveUp, "up"], [moveDown, "down"], [moveLeft, "left"], [moveRight, "right"]].forEach(([moveFunc, direction]) => {
            let newBoard = [...board]; // Make a copy to test the move
            if (moveFunc(newBoard)) { // Apply the move
                let newState = boardToString(newBoard);
                if (!visited.has(newState)) { // Check if the new state was already visited
                    if (newState === boardToString(goal)) return path.concat(direction);
                    queue.push({ board: newBoard, path: path.concat(direction) });
                    visited.add(newState); // Mark new state as visited
                }
            }
        });
    }

    return null; // If no solution is found
};


// console.log("Initial Board:", board.join(" "));
// moveRight(board);
// console.log("After moving right:", board.join(" "));
// moveDown(board);
// console.log("After moving down:", board.join(" "));


let initialBoard = [1, 2, 3, 4, 5, 6, 0, 7, 8];
let solutionPath = solvePuzzle(initialBoard);

if (solutionPath) {
    console.log("Solution found:", solutionPath.join(" -> "));
} else {
    console.log("No solution exists.");
}