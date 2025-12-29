//Complete the square sum function so that it squares each number passed into it and then sums the results together.

fn main() {
    println!("{:?}", square_sum([1,2,3].to_vec()));
    println!("{:?}", square_sum2([1,2,3].to_vec()));
}

fn square_sum(vec: Vec<i32>) -> i32 {
    vec.iter().map(|x| x * x).sum()
}

fn square_sum2(vec: Vec<i32>) -> i32 {
    vec.iter().fold(0, |t,i| t + i*i)
}

#[test]
fn returns_expected() {
    assert_eq!(square_sum(vec![1, 2]), 5);
    assert_eq!(square_sum(vec![-1, -2]), 5);
    assert_eq!(square_sum(vec![5, 3, 4]), 50);
    assert_eq!(square_sum(vec![]), 0);
}