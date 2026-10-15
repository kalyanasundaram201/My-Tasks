// Topic: Optimizing Conditional Paths
// 5. Create an authentication validator. The system checks: 1. Is the account suspended? 2. Is the password correct? 3. Is the MFA token valid?

let isSuspended = false;
let isPasswordCorrect = true;
let isMFValid = false;

if (isSuspended) {
    console.log("Account is suspended.");
} else if (!isPasswordCorrect) {
    console.log("Incorrect password.");
} else if (!isMFValid) {
    console.log("Invalid MFA.");
} else {
    console.log("Login successful!");
}