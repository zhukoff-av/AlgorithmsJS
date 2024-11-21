const combination = (n, k) => {
    const result = [];

    function backtrack(start, current) {
        if (current.length === k) {
            result.push([...current])
            return
        }
        const need = k - current.length;
        const remain = n - start + 1
        const available = remain - need

        for (let i = start; i <= start + available; i++) {
            console.log(i)
            current.push(i)
            backtrack(i + 1, current)
            current.pop()
        }
    }

    backtrack(1, [])
    return result;
}


console.log(combination(4, 2))