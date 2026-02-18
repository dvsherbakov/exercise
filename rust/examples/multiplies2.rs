//We have two consecutive integers k 1 k 1 and k 2 k 2, where k 2 = k 1 + 1 k 2 =k 1 +1.
//We need to calculate the lowest strictly positive integer n, such that: the values
//n k 1 n⋅k 1  and n ⋅ k 2 n⋅k 2  have the same digits but in different order.

fn main() {
    println!("{}", find_lowest_int(325));
}

fn covert_to_chars(number: u64) -> String {
    let mut chars: Vec<char> = number.to_string().chars().collect();
    chars.sort();
    chars.into_iter().collect()
}

fn find_lowest_int(k: u64) -> u64 {
    let mut n = 9;
    loop {
        if covert_to_chars(n * k) == covert_to_chars((k + 1) * n) {
            break;
        }
        n += 9;
    }
    n
}

#[cfg(test)]
mod tests {
    use super::find_lowest_int;

    fn dotest(n: u64, expected: u64) {
        let actual = find_lowest_int(n);
        assert!(
            actual == expected,
            "With k = {n}\nExpected {expected} but got {actual}"
        )
    }

    #[test]
    fn fixed_tests() {
        dotest(325, 477);
        dotest(599, 2394);
        dotest(855, 999);
        dotest(1, 125874);
        dotest(100, 8919);
        dotest(1000, 89919);
        dotest(10000, 899919);
    }
}
