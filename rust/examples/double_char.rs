//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

fn main() {
    println!("{}", double_char("String"));
}

fn double_char(s: &str) -> String {
    s.chars()
        .fold(String::new(), |acc, c| format!("{}{}{}", acc, c, c))
}

#[cfg(test)]
mod tests {
    use super::double_char;

    fn dotest(s: &str, expected: &str) {
        let actual = double_char(s);
        assert!(
            actual == expected,
            "With s = \"{s}\"\nExpected \"{expected}\" but got \"{actual}\""
        )
    }

    #[test]
    fn test_hello_world() {
        dotest("Hello World", "HHeelllloo  WWoorrlldd")
    }
    #[test]
    fn test_numbers() {
        dotest("1234!_ ", "11223344!!__  ")
    }
}
