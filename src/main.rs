use regex::Regex;
use std::env;
use std::time::Instant;

fn main() {
    // Get the arguments passed to the CLI
    let args: Vec<String> = env::args().collect();
    if args.len() != 4 {
        eprintln!("Usage: regex_tool <pattern> <input> <iterations>");
        std::process::exit(1);
    }

    let pattern = &args[1];
    let input = &args[2];
    let iterations: usize = args[3].parse().unwrap_or_else(|_| {
        eprintln!("Iterations must be a valid number.");
        std::process::exit(1);
    });

    // Compile the regex
    let regex = Regex::new(pattern).unwrap_or_else(|err| {
        eprintln!("Invalid regex pattern: {}", err);
        std::process::exit(1);
    });

    // Measure performance
    let start = Instant::now();
    for _ in 0..iterations {
        let _ = regex.is_match(input);
    }
    let duration = start.elapsed();

    println!("{:?}", duration);
}
