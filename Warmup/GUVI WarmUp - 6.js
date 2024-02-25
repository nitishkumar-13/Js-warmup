/* Write a function that converts hours into seconds. */

function hourToSeconds(hours) {
	///Your code Starts here 
	let minToseconds = 60 * 60
	let hrToseconds = hours * minToseconds
	return hrToseconds
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(hourToSeconds(24));
console.log(hourToSeconds(10));
console.log(hourToSeconds(2));