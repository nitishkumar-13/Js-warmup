/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here
	if (num >= 0) {
		if (num % 2 == 0) {
			return true
		} else {
			return false
		}
	} else {
		return -1
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));