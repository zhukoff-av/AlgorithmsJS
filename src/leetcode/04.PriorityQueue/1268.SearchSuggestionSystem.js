// products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"

const suggestedProducts = (products, searchWord) => {

    products.sort()

    const result = []

    function binarySearch(arr, prefix) {
        let left = 0
        let right = arr.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (arr[mid] < prefix) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }

    let prefix = ''
    for (let c of searchWord) {
        let startIndex = binarySearch(products, prefix)

        let suggestion = []

        for (let i = startIndex; i < products.length && suggestion.length < 3; i++) {
            if (products[i].startsWith(prefix)) {
                suggestion.push(products[i])
            } else {
                break;
            }
        }
        result.push(suggestion)
    }
    console.log(result)
    return result
}

suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], 'mouse')

// EXP
// [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],
// ["mouse","mousepad"],["mouse","mousepad"]]
