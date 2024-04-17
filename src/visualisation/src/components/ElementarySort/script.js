function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Selection sort
 In-Place Sorting: Selection sort modifies the original array directly.
 Time Complexity: O(n^2) – The nested loops make it a quadratic time algorithm.
 Stability: Selection sort is not a stable sorting algorithm.
 The relative order of elements with the same value might change.
 */
async function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        // Find the index of the minimum element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        updateVisual(arr, arr[i], arr[minIndex]);
        await sleep(100);
    }

    // return arr;
}

/**
 * Insertion sort
 In-Place Sorting: Insertion sort modifies the original array.
 Time Complexity: O(n^2) in the worst case, but performs better in nearly sorted data.
 Stability: It's a stable sorting algorithm (elements with the same value keep their relative order).
 */
async function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;

        // Compare 'key' with elements to its left, shifting them until the correct position is found
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;

        updateVisual(arr, arr[i], arr[j + 1]);
        await sleep(100);
    }

    // return arr;
}

/**
 * Shellsort
 * In-Place Sorting: Shell sort modifies the original array.
 * Time Complexity: It depends on the gap sequence used.
 * The time complexity lies somewhere between O(n) and O(n^2). It's generally more efficient than simple insertion sort.
 * Not Stable: Shell sort is not a stable sorting algorithm.
 * */

async function shellSort(arr) {
    const len = arr.length;

    // Start with a large gap
    let gap = Math.floor(len / 2);

    // Reduce the gap size until it reaches 1
    while (gap > 0) {
        // Perform insertion sort for each sublist with the current gap
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
            updateVisual(arr, arr[i], arr[j + 1]);
            await sleep(100);

        }

        // Reduce the gap size for the next iteration
        gap = Math.floor(gap / 2);
    }

    // return arr;

}

function updateVisual(arr, index1, index2) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous bars
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = 10 + arr[i] * 3 + "px"; // Adjust height for visualization
        bar.textContent = arr[i]
        if (i === index1 || i === index2) {
            bar.style.backgroundColor = "#D3C5E5"; // Highlight the bars being compared
        }
        container.appendChild(bar);
    }
}

function generateRandomArray(length, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * max) + 1);
    }
    return arr;
}

async function startSelectionSort() {
    const arr = generateRandomArray(33, 88); // Generate a random array
    await selectionSort(arr); // Sort the array
}

async function startInsertionSort() {
    const arr = generateRandomArray(33, 88); // Generate a random array
    await selectionSort(arr); // Sort the array
}

async function startShellSort() {
    const arr = generateRandomArray(33, 88); // Generate a random array
    await shellSort(arr); // Sort the array
}
