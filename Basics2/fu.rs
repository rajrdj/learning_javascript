fn main() {
    // Example array
    let numbers = vec![10, 20, 30, 40, 50];
    let target_number = 30; // Change this to the number you want to check

    // Check if the number is present in the array
    if numbers.contains(&target_number) {
        println!("The number {} is present in the array.", target_number);
    } else {
        println!("The number {} is not present in the array.", target_number);
    }
}
