//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

fn main() {
    println!("{:?}",count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].to_vec()));
}

fn count_positives_sum_negatives(input: Vec<i32>) -> Vec<i32> {
    if input.is_empty() {
        return vec![];
    }
    vec![input.iter().filter(|&&x| x > 0).count() as i32,  input.iter().filter(|&&x| x < 0).sum()]
}


#[cfg(test)]
mod tests {
    use super::count_positives_sum_negatives;

    fn dotest(a: &[i32], expected: &[i32]) {
        let actual = count_positives_sum_negatives(a.to_vec());
        assert_eq!(actual, expected, "With input = {a:?}\nExpected {expected:?} but got {actual:?}")
    }
    #[test]
    fn fixed_tests() {
        dotest(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], &[10, -65]);
        dotest(&[], &[]);
        dotest(&[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14], &[8, -50]);
        dotest(&[0,1,2,3,4,5], &[5, 0]);
        dotest(&[1,2,3,4,5], &[5, 0]);
        dotest(&[0,-1,-2,-3,-4,-5], &[0, -15]);
        dotest(&[-1,-2,-3,-4,-5], &[0, -15]);
        dotest(&[0,0,0,0], &[0,0]);
        dotest(&[0], &[0,0]);
    }
}