

const arr =[1,3,5,2,4,2,1,0,9,3,1]

function quickSort(arr){
    // base case
    if(arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length -1 ; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log('Original array: ', arr)
console.log('Sorted array: ', quickSort(arr))