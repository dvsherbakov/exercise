// Given a non-empty array of integers, return the result of multiplying the values together in order.

fn main() {
    let s = grow(vec![1, 2, 3, 4]);
    println!("{}", s);
}

fn grow(nums: Vec<i32>) -> i32 {
    nums.iter().product()
}

#[test]
fn basic_test() {
    assert_eq!(grow(vec![1, 2, 3]), 6);
    assert_eq!(grow(vec![4, 1, 1, 1, 4]), 16);
    assert_eq!(grow(vec![2, 2, 2, 2, 2, 2]), 64);
}