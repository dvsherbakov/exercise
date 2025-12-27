//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

fn main() {
    let v = between(1, 4);
    println!("{:?}", v);
}

fn between(a: i16, b: i16) -> Vec<i16> {
    (a..=b).collect()
}

#[cfg(test)]
mod tests {
    use super::between;

    fn dotest(a: i16, b: i16, expected: &[i16]) {
        let actual = between(a, b);
        assert_eq!(actual, expected, "Test failed with a = {a}, b = {b}\nExpected {expected:?}\nBut got {actual:?}")
    }

    #[test]
    fn test_basic() {
        dotest(1,4, &[1,2,3,4]);
        dotest(-2, 2, &[-2, -1, 0, 1, 2]);
    }
}