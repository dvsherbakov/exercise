// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

fn main() {
    println!("{}", series_sum(39));
}

fn series_sum(n: u32) -> String {
    format!(
        "{:.2}",
        (0..n).fold(0.0, |acc, x| acc + 1.0 / (1.0 + ((x * 3) as f32))),
    )
}

#[cfg(test)]
mod tests {
    use super::series_sum;

    fn test(input: u32, expected: &str) {
        let actual = series_sum(input);
        assert!(
            actual == expected,
            "Expected series_sum({input}) to be {expected}, but was {actual}"
        );
    }

    #[test]
    fn sample_tests() {
        test(1, "1.00");
        test(2, "1.25");
        test(3, "1.39");
        test(7, "1.68");
        test(39, "2.26");
        test(0, "0.00");
    }
}
