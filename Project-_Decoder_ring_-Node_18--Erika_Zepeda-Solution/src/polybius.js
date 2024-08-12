// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42",
      "k": "52", "l": "13", "m": "23", "n": "33", "o": "43",
      "p": "53", "q": "14", "r": "24", "s": "34", "t": "44",
      "u": "54", "v": "15", "w": "25", "x": "35", "y": "45",
      "z": "55"
    };

    if (!encode) {
      const cleanedInput = input.replace(/\s/g, '');
      if (cleanedInput.length % 2 !== 0) return false;

      const words = input.split(" ");
      const decodedSentence = words.map(word => {
        const decodedWord = word.match(/.{1,2}/g).map(pair => {
          if (pair === "42") {
            return "(i/j)";
          } else {
            const letter = Object.entries(polybiusSquare).find(([key, value]) => value === pair);
            return letter ? letter[0] : '';
          }
        });
        return decodedWord.join('');
      });
      return decodedSentence.join(' ');
    }

    const encodedSentence = input.toLowerCase().split(" ").map(word => {
      const encodedWord = word.split('').map(char => {
        if (char === " ") return char;
        const encodedChar = polybiusSquare[char];
        return encodedChar ? encodedChar : '';
      });
      return encodedWord.join('');
    });

    return encodedSentence.join(' ');
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };      
            
            