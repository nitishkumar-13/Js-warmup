/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	let x = y2 - y1
	let y = x2 - x1
	let z = (x * x) + (y * y)
	let result = Math.sqrt(z)
	return Math.floor(result)
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(getDistance(100, 100, 400, 300));
console.log(getDistance(1, 2, 4, 6));