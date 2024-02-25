/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	let result = (num1 * num2) * 60
	return result
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));