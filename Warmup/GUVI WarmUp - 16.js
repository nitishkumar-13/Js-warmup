/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	if (word1.length == word2.length) {
		return true
	} else {
		return false
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(isSameLength("GUVI", "GEEK"));
console.log(isSameLength("GUVI", "ZEN"));
console.log(isSameLength("Hello", "GUVI"));