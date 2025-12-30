//you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

fn main() {
    println!("{}", dont_give_me_five(4, 17))
}

fn dont_give_me_five(start: isize, end: isize) -> isize {
    (start..=end).filter(|&x| !x.to_string().contains('5')).count() as isize
}

#[test]
fn returns_expected() {
    assert_eq!(dont_give_me_five(1, 9), 8);
    assert_eq!(dont_give_me_five(4, 17), 12);
}