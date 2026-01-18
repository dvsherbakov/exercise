fn main() {
    let num1: u32 = 2;
    let num2: u32 = 11;
    let result = add(num1, num2);
    println!("{} + {} = {}", num1, num2, result);
}

fn add(num1: u32, num2: u32) -> u64 {
    let a1 = num1.to_string().chars().rev().collect::<Vec<char>>();
    let a2 = num2.to_string().chars().rev().collect::<Vec<char>>();
    let count = a1.len().max(a2.len());

    let mut res_v = Vec::new();
    for i in 0..count {
        let a1 = a1.get(i).unwrap_or(&'0');
        let a2 = a2.get(i).unwrap_or(&'0');
        let sum = a1.to_digit(10).unwrap() + a2.to_digit(10).unwrap();
        res_v.push(sum.to_string());
    }

    res_v
        .iter()
        .rev() // разворачиваем
        .cloned() // копируем &str
        .collect::<Vec<_>>()
        .join("") // склеиваем
        .parse() // парсим
        .unwrap() // получаем число
}

#[test]
fn test_real_add() {
    // behaves just like normal addition in these cases
    assert_eq!(add(2, 11), 13);
    assert_eq!(add(0, 1), 1);
    assert_eq!(add(0, 0), 0);
}

#[test]
fn test_silly_add() {
    // should also work with the "new", silly addition method
    assert_eq!(add(16, 18), 214);
    assert_eq!(add(26, 39), 515);
    assert_eq!(add(122, 81), 1103);
}
