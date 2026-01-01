//Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

fn main() {
    println!("{}", sum_digits(99));
    println!("{}", sum_digits2(99));
}

fn sum_digits(n: i32) -> i32 {
    n.abs()
        .to_string()
        .chars()
        .filter_map(|c| c.to_digit(10))
        .sum::<u32>() as i32
}
fn sum_digits2(numb: i32) -> i32 {
    let mut n = numb.abs() as u32;
    let mut sum = 0;
    while n>0 {
        sum+=n%10;
        n/=10;
    }
    sum as i32
}

#[cfg(test)]
mod sample_tests {
    use super::sum_digits;

    #[test]
    fn test_sum_digits_10() {
        let n = 10;
        let expected = 1;
        let actual = sum_digits(n);
        assert_eq!(actual, expected, "\nsum_digits({}) should be {}, got {}", n, expected, actual);
    }

    #[test]
    fn test_sum_digits_99() {
        let n = 99;
        let expected = 18;
        let actual = sum_digits(n);
        assert_eq!(actual, expected, "\nsum_digits({}) should be {}, got {}", n, expected, actual);
    }

    #[test]
    fn test_sum_digits_neg_32() {
        let n = -32;
        let expected = 5;
        let actual = sum_digits(n);
        assert_eq!(actual, expected, "\nsum_digits({}) should be {}, got {}", n, expected, actual);
    }
}