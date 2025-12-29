fn main() {
    let answer = are_you_playing_banjo("Borland");
    println!("({})", answer);
}

fn are_you_playing_banjo(name: &str) -> String {
    if name.starts_with('R') || name.starts_with('r') {
        name.to_string() + &String::from(" plays banjo")
    } else {
        name.to_string() + &String::from(" does not play banjo")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_are_you_playing_banjo() {
        assert_eq!(
            are_you_playing_banjo("Martin"),
            "Martin does not play banjo"
        );
        assert_eq!(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
        assert_eq!(are_you_playing_banjo("bravo"), "bravo does not play banjo");
        assert_eq!(are_you_playing_banjo("rolf"), "rolf plays banjo");
    }
}
