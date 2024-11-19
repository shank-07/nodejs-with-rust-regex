const input = "The quick brown fox jumps over the lazy dog.";
const pattern = /\b\w{4}\b/; // Matches words with exactly 4 letters

console.time("Node.js Regex Performance");
for (let i = 0; i < 1_000_000; i++) {
    pattern.test(input);
}
console.timeEnd("Node.js Regex Performance");
