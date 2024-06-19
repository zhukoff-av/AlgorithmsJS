function scanDocument(doc) {
    // Regular expression to match words, considering only alphanumeric characters as part of words
    const words = doc.match(/\b[a-z0-9]+\b/gi);

    // Create a map to store the frequency of each word
    const frequencyMap = new Map();

    if (words) {
        words.forEach(word => {
            // Normalize the word to lowercase to ensure case-insensitivity
            const normalizedWord = word.toLowerCase();
            // Update the frequency count for this word in the map

            // Normalized word
            // frequencyMap.set(normalizedWord, (frequencyMap.get(normalizedWord) || 0) + 1);
            frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1)
        });
    }

    // Convert the map into an array of [word, count] pairs
    const sortedArray = Array.from(frequencyMap.entries());

    console.log('logger:', frequencyMap)

    // Sort the array based on the count in descending order
    sortedArray.sort((a, b) => b[1] - a[1]);

    return sortedArray;
}

// Example Usage
const doc = "Hello world, hello again. This world is a beautiful world.";
const result = scanDocument(doc);
console.log(result);
