//The first row of the triangle is a single 1.
//The next row of the triangle will always start with the previous row's last element.
//The element in position k of row n will be the sum of the elements in position k-1 of the rows n and n - 1

use std::option::Option::Some;

fn main() {
    println!("{:#?}", aitken(2, 2));
    println!("{:#?}", aitken(2, 1));
}

fn aitken(n: u32, k: u32) -> u32 {
    if n == 0 {
        return 1;
    }
    println!("n: {}, k: {}", n, k);
    //    if n >= k {
    aitken(n - 1, k) + aitken(n - 1, k - 1)
    //  }
    // None
}

#[cfg(test)]
mod tests {
    use super::aitken;

    #[test]
    fn basic_tests() {
        assert_eq!(
            aitken(0, 0),
            Some(1),
            "\nWith n=0 and k=0, your answer (left) is not the expected answer (right)."
        );
        assert_eq!(
            aitken(2, 2),
            Some(5),
            "\nWith n=2 and k=2, your answer (left) is not the expected answer (right)."
        );
        assert_eq!(
            aitken(2, 3),
            None,
            "\nWith n=2 and k=3, your answer (left) is not the expected answer (right)."
        );
    }
}
