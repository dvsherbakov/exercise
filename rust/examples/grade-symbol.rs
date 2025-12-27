//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

fn main() {
    println!("Started");
    let s = get_grade(55, 43, 16);
    println!("{}", s);
}

fn get_grade(s1: u16, s2: u16, s3: u16) -> char {
    match (s1 + s2 + s3) / 3 {
        90..=100 => 'A',
        80..=89 => 'B',
        70..=79 => 'C',
        60..=69 => 'D',
        _ => 'F',
    }
}

#[cfg(test)]
mod tests {
    use super::get_grade;

    fn dotest(s1: u16, s2: u16, s3: u16, expected: char) {
        let actual = get_grade(s1, s2, s3);
        assert_eq!(actual, expected, "With s1 = {s1}, s2 = {s2}, s = {s3}\nExpected '{expected}' but got '{actual}'")
    }

    #[test]
    fn test_get_grade() {
        dotest(100, 100, 100, 'A');
        dotest(95, 90, 93, 'A');
        dotest(82, 85, 87, 'B');
        dotest(60, 82, 76, 'C');
        dotest(58, 62, 70, 'D');
        dotest(58, 59, 60, 'F');
        dotest(0, 0, 0, 'F');
    }
}
