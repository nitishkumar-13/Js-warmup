/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	let sum = 0
	if (array.length > 0) {
		for (let i of array) {
			sum = i
		}
		return sum
	} else {
		return -1
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getLastElement([]));