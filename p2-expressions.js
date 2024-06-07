/*
    CIT 281 Project 2
    Name: Your Name
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random lowercase letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length-1)];
}

// Return a string of random length comprising random lowercase letters
const getRandomString = function(minLength, maxLength) {
    let result = "";
    let lengthOfResult = getRandomInteger(minLength, maxLength + 1);
    for (let i = 0; i < lengthOfResult; i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getRandomString(10, 20));
