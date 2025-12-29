//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

fn main() {
    println!("{}", make_negative(1));
    println!("{}", make_negative(-5));
}

fn make_negative(x: i32) -> i32 {
    -x.abs()
}


#[cfg(test)]
mod tests {
    use super::make_negative;

    #[test]
    fn sample_tests() {
        assert_eq!(make_negative(1), -1);
        assert_eq!(make_negative(-5), -5);
        assert_eq!(make_negative(0), 0);
    }
}