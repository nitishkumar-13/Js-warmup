/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	if (firstName && lastName) {
		return firstName + ' ' + lastName;
	} else if (firstName) {
		return firstName;
	} else if (lastName) {
		return lastName;
	} else {
		return ''; // If both are empty strings
	}
}
/*
Lines For TestCase
*/
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI"));
console.log(getFullName("GEEK"));
console.log(getFullName("", ""));