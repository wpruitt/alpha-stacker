console.log("hello alpha-stacker.js")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetter (array) {
	for (i = 1; i < array.length +1; i++) {
		x=0;
		alphabetString = "";
		while (x != i) {
			alphabetString += alphabet[x];
			x++;
			if (x % 3 === 0){
				alphabetString += " ";
			}
			// if (i = 26){
			// 	break
			// }
		} 
	console.log(alphabetString)	
	}
}

