//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

fn main() {
    println!("{:?}", remove_every_other(&[1, 2, 3, 4, 5, 6, 7, 8, 9]));
    println!("{:?}", remove_every_other2(&[1, 2, 3, 4, 5, 6, 7, 8, 9]));
}

fn remove_every_other2(arr: &[u8]) -> Vec<u8> {
    arr.iter()
        .enumerate()
        .filter(|(i, _)| i % 2 == 0)
        .map(|(_, &x)| x)
        .collect()
}

fn remove_every_other(arr: &[u8]) -> Vec<u8> {
    arr.iter().step_by(2).copied().collect()
}

#[cfg(test)]
mod tests {
    use super::remove_every_other;

    #[test]
    fn sample_test() {
        assert_eq!(
            remove_every_other(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            &[1, 3, 5, 7, 9]
        );
    }
}
