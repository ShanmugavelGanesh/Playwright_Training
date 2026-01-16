//Datatype :
/* Primitive and Non - primitive

Primitive :
1. numbers --> in other langauge(int,float,double)
2. biginit ---> if the number is above a certain limit it is taken as bigint datatype
2. boolean --> true / false
3. string --> "",'',`` (Backtick --> In keyboard the key that is above tab button)
4. undefined 
5. null*/

//numbers
var phoneNumber = 789793452
console.log(phoneNumber)
console.log(typeof phoneNumber) // number the datatype is being retreived

var rateOfInterest = 7.5
console.log(rateOfInterest)
console.log(typeof rateOfInterest)


/* //typeof operator 
Helps to retreive the datatype pf the value that is stored in a variable(in our example "phoneNumber")
 */
/* var is the keyword to convey JS that phoneNumber is a userdeined variable used to store the value */





/* BigInt
- (2^53 - 1) to (2^53 - 1)

This range is:
-9007199254740991 to 9007199254740991

If you go beyond this range — like using:

let num = 9007199254740992;

JavaScript **can't guarantee accuracy**, and you'll get the `ts(80008)` warning in TypeScript because the value might be **rounded**, **inaccurate**, or **unexpected**.

 */

var accountNumber = 78798908098098098n
console.log(accountNumber);
console.log(typeof accountNumber);//bigint

//boolean
var accountNumberValid = true
console.log(accountNumberValid);
console.log(typeof accountNumberValid);//boolean

//string -> "",'',``(Backtick)

var username = "demoSalesManager@123 23"
console.log(username);
console.log(typeof username);//string


//undefined

var xyz // declaration --> memory space created and is empty
//var xyz = 123 // assignment 
//TOgether declaration and asignment together we call it initilization

console.log(xyz)
console.log(typeof xyz);


//null--> // 
var abc = null 
// here the memory space is created and we are explicitley conveying to JS that abc is empty
console.log(abc);
console.log(typeof abc); // historical bug created during the development stage of JS