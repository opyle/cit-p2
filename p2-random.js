/*
    CIT 281 Project 2
    Name: Your Name
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random lowercase letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // 0 - 26 because of getRandomInteger() max parameter
    return alphabet[getRandomInteger(0, alphabet.length)];
}

// Return a string of random length comprising random lowercase letters
function getRandomString(minLength, maxLength) {
    let result = "";
    let lengthOfResult = getRandomInteger(minLength, maxLength + 1);
    for (let i = 0; i < lengthOfResult; i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getRandomString(10, 20));
