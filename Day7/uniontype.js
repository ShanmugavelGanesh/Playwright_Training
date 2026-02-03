//Create a type alias using paymentMethod and allows only "UPI", "CreditCard", or "PayPal".
function makePayment(method, amount) {
    switch (method) {
        case 'UPI':
            return "".concat(method, " Processing UPI payment of ").concat(amount, ".");
        case 'credit_card':
            return "".concat(method, "Processing Credit Card payment of ").concat(amount, ".");
        case 'paypal':
            return "".concat(method, "Processing PayPal payment of ").concat(amount, ".");
        default:
            return "".concat(method, " is Invalid payment method.");
    }
}
//Create a function that takes a union type as an argument and performs different actions based on the type provided.
console.log(makePayment('UPI', 200));
console.log(makePayment('credit_card', 150));
//Negative test case
console.log(makePayment('debit_card', 250));
console.log(makePayment('bank_transfer', 100));
