const topKfreqWords = (words, k) => {
    const map = new Map();
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    const sorted = Array.from(map.keys()).sort((a, b) => {
        if (map.get(a) === map.get(b)) {
            return a.localeCompare(b);
        }
        return map.get(b) - map.get(a);
    });
    return sorted.slice(0, k);
}


topKfreqWords(["i", "love", "leetcode", "i", "love", "coding"], 2)