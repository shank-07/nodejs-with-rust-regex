const { exec } = require('child_process');

const pattern = '\\b\\w{4}\\b'; // Regex pattern
const input = 'The quick brown fox jumps over the lazy dog.'; // Input string
const iterations = 1_000_000; // Number of iterations

// Construct the CLI command
// const command = `regex_tool "${pattern}" "${input}" ${iterations}`;
const command = `C:/projects/regex_performance/target/release/regex_performance.exe "${pattern}" "${input}" ${iterations}`;

console.log('Running Rust CLI Tool...');

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Execution Time: ${stdout.trim()}`);
});
