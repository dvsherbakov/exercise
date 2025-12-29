//Given a string str, reverse it and omit all non-alphabetic characters.

fn main() {
    println!("{}", reverse_letters("ultr53o"));
}

fn reverse_letters(str: &str) -> String {
    str.chars().filter(|c| c.is_alphabetic()).rev().collect()
}


#[cfg(test)]
mod tests {
    use super::reverse_letters;

    fn dotest(s: &str, expected: &str) {
        let actual = reverse_letters(s);
        assert!(actual == expected,
                "With s = \"{s}\"\nExpected \"{expected}\" but got \"{actual}\"")
    }

    #[test]
    fn fixed_tests() {
        dotest("krishan","nahsirk");
        dotest("ultr53o?n","nortlu");
        dotest("ab23c","cba");
        dotest("krish21an","nahsirk");
    }
}
