function keySearch(l, k){
	for (var i = 0; i < l.length; i++) {
		if (i[0] == k) {
			return i[l]
		};
	};
	return null;
}

var EtoF = ['du pain', 'du vin', 'mange', 'bois', 'aime', 'un', '6.00'];

function isInArray(word, words){
	console.log('isInArray Word: ' + word);
	console.log('isInArray Words: ' + words);
	return word.indexOf(words) > 1;
	console.log('isInArray Word2 : ' + word);
	console.log('isInArray Words2 : ' + words);
}

// console.log(isInArray('du pain', EtoF));

function translateWord (word, words) {
	// console.log('translateWord Word: ' + word);
	// console.log('translateWord Words: ' + words);
	if (isInArray(word, words)) {
		return words[word];
	} else {
		return word;
	}
}

// console.log(translateWord('du pain', EtoF));


/* This does not work!!! */
function translate (sentence) {
	console.log(sentence);
	var translation = '';
	var word = '';
	console.log('translation: ' + translation);
	console.log('word: ' + word);
	// This for loop is funky
	for (i in sentence) {
		console.log('sentence after for loop: ' + sentence);
		if (i != ' ') {
			word = word + i.toString();
			console.log('Word after if: ' + word);
		} else {
			translation = translation + ' ' + translateWord(word, EtoF);
			word = '';
		}
	};
	var translatedWord = translation[1] + ' ' + translateWord(word, EtoF);
	return translatedWord;
	console.log('Translated Word: ' + translatedWord);
}

// console.log(translate('John eats bread'));


function toChars (s) {
	var ans = '';
	for (c in s.length) {
		if (c in s)
			ans = ans + c
	}
}
//console.log(toChars('123'));


function isPal (s) {
	if (s <= 1) {
		return true;
	} else {
		return s[0] == s[-1] && isPal(s[-1]);
	}
}

function isPalindrome (s) {
	// Return true is s is a palindrome and false otherwise
	return isPal(toChars(s));
}
console.log(isPalindrome('Guttug'));