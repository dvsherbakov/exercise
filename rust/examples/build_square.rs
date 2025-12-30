//I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

fn main() {
    println!("{:?}", generate_shape(4))
}

fn generate_shape(n: i32) -> String {
    (0..n).map(|_| "+".repeat(n as usize)).collect::<Vec<_>>().join("\n")
}


#[cfg(test)]
mod tests {
    use super::generate_shape;

    fn dotest(n: i32, expected: &str) {
        let actual = generate_shape(n);
        assert_eq!(actual, expected, "With n = {n}\nExpected \"{expected}\" but got \"{actual}\"")
    }

    #[test]
    fn sample_test() {
        dotest(3, "+++\n+++\n+++")
    }
}
