function arrayOfArrayProducts(arr) {
    // your code goes here

    const result = []
    const left = Array(arr.length).fill(1)
    const right = Array(arr.length).fill(1)


    // left
    for(let i=1; i < arr.length -1; i++){
        left[i] = left[i- 1] * arr[i-1]
    }

    console.log('left',left)

    //right
    for(let i = arr.length -1; i >= 0; i--) {
        right[i] = right[i] * left[i]
    }

    console.log('right',right)

//  result
    for(let i = 0; i < arr.length -1; i++){
        console.log('result', result[i])
        result[i] = left[i] * right[i]
    }

    return result
}


arrayOfArrayProducts([8, 10, 2])