
//You are given positive integers, a a and b b ( a < b) (a<b).
//Find a positive integer k k such that gcd ( a + k , b + k) gcd(a+k,b+k) is maximized.
//If there are multiple values of k k that satisfy the condition above, return the smallest one.
//Here gcd ( x , y) gcd(x,y) means the greatest common divisor of x x and y y.

fn main() {
    println!("{}", get_k(5, 7));
}


fn get_k(a: u64, b: u64) -> u64 {
    let delta = b - a;
    let remainder = a % delta;
    
    if remainder == 0 {
        delta
    } else {
        delta - remainder
    }
}

#[cfg(test)]
mod tests {
    use super::get_k;

    #[test]
    fn test_add() {
        assert_eq!(get_k(5, 7), 1);
        assert_eq!(get_k(2, 10), 6);
        assert_eq!(get_k(100, 200), 100);
        assert_eq!(get_k(123, 456), 210);
    }
}

