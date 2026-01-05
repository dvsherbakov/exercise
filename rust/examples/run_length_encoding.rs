//Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//

fn main() {
    println!("{:?}", run_length_encoding2("hello world!"));
    println!("{:?}", run_length_encoding("aab"));
}

fn run_length_encoding2(s: &str) -> Vec<(usize, char)> {
    s.chars()
        .map(|c| (s.chars().filter(|&x| x == c).count(), c))
        .collect()
}

fn run_length_encoding(s: &str) -> Vec<(usize, char)> {
    let mut result = Vec::new();
    let mut chars = s.chars().peekable();

    while let Some(c) = chars.next() {
        let mut count = 1;
        while chars.peek() == Some(&c) {
            count += 1;
            chars.next();
        }
        result.push((count, c));
    }

    result
}

#[cfg(test)]
mod tests {
    use super::run_length_encoding;

    #[test]
    fn sample_tests() {
        assert_eq!(run_length_encoding(""), vec![]);
        assert_eq!(
            run_length_encoding("abc"),
            vec![(1, 'a'), (1, 'b'), (1, 'c')]
        );
        assert_eq!(run_length_encoding("aab"), vec![(2, 'a'), (1, 'b')]);
        assert_eq!(
            run_length_encoding("hello world!"),
            vec![
                (1, 'h'),
                (1, 'e'),
                (2, 'l'),
                (1, 'o'),
                (1, ' '),
                (1, 'w'),
                (1, 'o'),
                (1, 'r'),
                (1, 'l'),
                (1, 'd'),
                (1, '!')
            ]
        );
        assert_eq!(
            run_length_encoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
            vec![(34, 'a'), (3, 'b')]
        );
        assert_eq!(
            run_length_encoding(
                "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"
            ),
            vec![
                (12, 'W'),
                (1, 'B'),
                (12, 'W'),
                (3, 'B'),
                (24, 'W'),
                (1, 'B'),
                (14, 'W')
            ]
        );
    }
}
