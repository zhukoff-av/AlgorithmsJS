

const tmp = (arr) => {

    arr.sort((a,b) => a -b )

    let res = []
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === i) {
            res.push(arr[i])
        }
        else{
             res.push(arr[i]++)
        }
    }
    console.log(arr)

}

console.log(tmp([1,6,12,2,4,7,9,10]))

