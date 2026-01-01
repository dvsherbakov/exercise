// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

fn main() {
    println!("{:?}", time_correct("11:70:10"));
    println!("{:?}", time_correct2("11:70:10"));
}

fn time_correct(time_str: &str) -> Option<String> {
    let parts: Vec<&str> = time_str.split(':').collect();
    if parts.len() != 3 || parts.iter().any(|p| p.len() != 2) {
        return None;
    }

    let parts: Vec<u32> = parts
        .iter()
        .filter_map(|&s| s.parse::<u32>().ok())
        .collect();

    if parts.len() != 3 {
        return None;
    }

    let (h, m, s) = (parts[0], parts[1], parts[2]);
    let total_secs = h * 3600 + m * 60 + s;
    let total_secs = total_secs % 86400; // 24 hours in seconds

    let hours = (total_secs / 3600) % 24;
    let mins = (total_secs / 60) % 60;
    let secs = total_secs % 60;

    Some(format!("{:02}:{:02}:{:02}", hours, mins, secs))
}

fn time_correct2(time_str: &str) -> Option<String> {
    if time_str.is_empty() {
        return None;
    }

    let parts: Vec<&str> = time_str.split(':').collect();
    if parts.len() != 3 || parts[0].len() != 2 || parts[1].len() != 2 || parts[2].len() != 2 {
        return None
    }

    let parse_part = |s: &str| s.parse::<u32>().map_err(|_| "Invalid number".to_string());

    let mut secs = parse_part(parts[2]).ok()?;
    let mut mins = parse_part(parts[1]).ok()?;
    let mut hours = parse_part(parts[0]).ok()?;

    mins += secs / 60;
    secs %= 60;

    hours += mins / 60;
    mins %= 60;

    hours %= 24;

    Some(format!("{:02}:{:02}:{:02}", hours, mins, secs))

}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty() {
        assert!(time_correct("").is_none());
    }

    #[test]
    fn invalid_format() {
        assert!(time_correct("001122").is_none());
        assert!(time_correct("00;11;22").is_none());
        assert!(time_correct("00:1c:22").is_none());
    }

    #[test]
    fn corrections() {
        assert_eq!(time_correct("09:10:01"), Some(String::from("09:10:01")));
        assert_eq!(time_correct("11:70:10"), Some(String::from("12:10:10")));
        assert_eq!(time_correct("19:99:09"), Some(String::from("20:39:09")));
        assert_eq!(time_correct("19:99:99"), Some(String::from("20:40:39")));
        assert_eq!(time_correct("24:01:01"), Some(String::from("00:01:01")));
        assert_eq!(time_correct("52:01:01"), Some(String::from("04:01:01")));
    }
}