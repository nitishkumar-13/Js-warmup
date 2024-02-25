/* There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. */

function remainder(num1, num2) {
	///Your code Starts here 
	let result = num1 % num2
	return result
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));