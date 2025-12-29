//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

fn main() {
    println!("{:?}", add_five(-5));
}

fn add_five(num: i32) -> i32 {
    num + 5
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_basics() {
        assert_eq!(add_five(5), 10);
        assert_eq!(add_five(0), 5);
        assert_eq!(add_five(-5), 0);
    }
}
