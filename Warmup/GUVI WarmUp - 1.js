/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	if (typeof num === 'string' || typeof num === 'number' && num % 1 !== 0) {
		return -1;
	}
	return -num
	///Your code Ends here
}
/*
Lines For TestCase*/
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));