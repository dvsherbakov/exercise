fn main() {
    println!("{}", get_planet_name(3));
    println!("{}", get_planet_name(5));
    println!("{}", get_planet_name(1));
}

pub fn get_planet_name(id: u32) -> &'static str {
    const PLANETS: [&str; 8] = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ];
    
    if id >= 1 && id <= 8 {
        PLANETS[id as usize - 1]
    } else {
        unreachable!("Invalid planet ID")
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_get_planet_name() {
        assert_eq!(get_planet_name(3), "Earth");
    }
}