const kClosest = (arr, k) => {

    const getDistance = ([x, y]) => x * x + y * y

    arr.sort((a,b) => getDistance(a) - getDistance(b))

    console.log(arr.slice(0,k))
    return arr.slice(0,k)

}
//
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
kClosest([[1, 3], [-2, 2]], 1)
kClosest([[3,3],[5,-1],[-2,4]], 2)