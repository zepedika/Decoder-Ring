// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    function shiftLetter(letter, shift) { 
    const index = alphabet.indexOf(letter);
      if (index === -1) { 
      return letter; 
      }
    
    let shiftedIndex = (index + shift + 26) % 26;
      const shiftedLetter = letter === letter.toUpperCase() ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
      return shiftedLetter;
  }
    let result = "";
    
    for (let char of input) {
      const lowerChar = char.toLowerCase();
      
      if(/[a-z]/.test(lowerChar)) {
      const charShift = encode ? shift : -shift;
      char = shiftLetter(lowerChar, charShift);
    }
    result += char; 
    }
  return result 
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
