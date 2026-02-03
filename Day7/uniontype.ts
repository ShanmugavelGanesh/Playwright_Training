//Create a function that accepts only specific payment methods
type Method = 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer'|'UPI' ;

//Create a type alias using paymentMethod and allows only "UPI", "CreditCard", or "PayPal".
function makePayment(method: Method, amount: number): string {
    switch (method) {
        case 'UPI':
            return `${method} Processing UPI payment of ${amount}.`;
        case 'credit_card':
            return `${method} Processing Credit Card payment of ${amount}.`;
        case 'paypal':
            return `${method}Processing PayPal payment of ${amount}.`;
        default:
            return `${method} is Invalid payment method.`;
    }
}
//Create a function that takes a union type as an argument and performs different actions based on the type provided.
console.log(makePayment('UPI', 200));          
console.log(makePayment('credit_card', 150));
//Negative test case
console.log(makePayment('debit_card', 250));
console.log(makePayment('bank_transfer', 100));  



