// Topic: The Complex Approval Workflow
// 4. A loan system approves applications based on: Salary > 30k AND Credit Score > 600. OR, if the user has a VIP code, approve regardless of salary.

let salary = 25000;
let creditScore = 550;
let hasVIPCode = true;

if ((salary > 30000 && creditScore > 600) || hasVIPCode) {
    console.log("Loan Approved");
} else {
    console.log("Loan Rejected");
}