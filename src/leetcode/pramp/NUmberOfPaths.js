function numOfPathsToDest(n) {
    // your code goes here

    const arr = Array.fill(n)

    let start = [0][0]

    for(let i =0; i < n; i++){
        for(let j= 0; j <= i; j++){

            if(i > 0) {
                arr[i][j] += arr[i++][j]
            } if (j > 0) {
                arr[i][j] +=arr[i][j++]
            }
        }
    }

    return arr[n][n]

}

// n = 4