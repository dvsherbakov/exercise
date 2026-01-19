//Given a number n, find the number of trailing zeros in its binary representation.

fn main() {
    println!("{:?}", trailing_zeros(32));
    println!("{:?}", trailing_zeros2(25));
}

fn trailing_zeros(mut n: i32) -> u32 {
    let mut count = 0;
    while n & 1 == 0 {
        count += 1;
        n >>= 1;
    }
    count
}

fn trailing_zeros2(n: i32) -> u32 {
    format!("{n:b}")
        .chars()
        .rev()
        .take_while(|&c| c == '0')
        .count() as u32
}

#[cfg(test)]
mod tests {
    use super::*;

    fn do_test(n: i32, expected: u32) {
        let actual = trailing_zeros(n);
        assert_eq!(
            actual, expected,
            "n: {}, expected: {}, actual: {}",
            n, expected, actual
        );
    }

    #[test]
    fn simple_test() {
        do_test(32, 5);
        do_test(25, 0);
        do_test(5, 0);
        do_test(4, 2);
    }
}
