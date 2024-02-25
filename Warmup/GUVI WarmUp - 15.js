/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (typeof word1 == 'number' || typeof word1 == 'undefined') {
		return -1
	} else {
		return word1.length
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));