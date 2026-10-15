// Topic: Boundary Value Inspector
// 2. Create a discount validator for a store. Customers get a 10% discount if they spend between $50 and $100 (inclusive).


let amount = 75;

if (amount >= 50 && amount <= 100) {
    let discount = amount * 0.10;

    console.log("Discount=" + discount);
} else {
    console.log("No discount");
}