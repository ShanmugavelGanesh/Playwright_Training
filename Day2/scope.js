//Scoping in JS how var,let,const behaves in various blocks like function block{}, and if block{}
//var scoping

if (true) {
var companyName = "Amazon_var" // Other programming lang. string companyName = "Testleaf"
console.log("Accessing var inside the if block ", companyName); 
}
console.log("Accessing var outside the if block ", companyName); 


//let scoping

if (true) {
let companyName = "Flipkart_let" // Other programming lang. string companyName = "Testleaf"
console.log("Accessing let inside the if block ", companyName); 
}
console.log("Accessing let outside the if block ", companyName); 

//const scoping

if (true) {
const companyName = "Steam_const" // Other programming langstring companyName = "Testleaf"
console.log("Accessing const inside the if block ", companyName); 
}

console.log("Accessing const inside the if block ", companyName); 



