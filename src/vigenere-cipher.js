class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

encrypt(message, key) {
    if(message.length == 0 || key.length == 0 ) throw new Error();

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        messageArray = message.toUpperCase().split(''),
        keyArray = key.toUpperCase().split(''),
        encryptedMessage = [],
        x = 0;

    for (let i = 0; i < messageArray.length; i++) {
     
      if(alphabet.indexOf(messageArray[i]) == -1) { // if symbol is not in alphabet
        encryptedMessage.push(messageArray[i]); // just push it into encrypted 
        continue; // and carry on
      }

      let sum = alphabet.indexOf(messageArray[i]) + alphabet.indexOf(keyArray[x]),  // ex: attack and cat > 
         finIndex = -1;
      
      if (alphabet.length - sum < 1) {
         finIndex = Math.abs(alphabet.length - sum - 1) - 1;
      } else {
        finIndex = sum;
      }
      
      encryptedMessage.push(alphabet[finIndex]);
      
      x++;
      if (x === keyArray.length) x = 0;
    }

    return this.reverse ? encryptedMessage.join('') : encryptedMessage.reverse().join('');

  }

  decrypt(message, key) {
    
    if(message.length == 0 || key.length == 0 ) throw new Error();
    
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // reformat params
    let m = message.toUpperCase().split('');
    let k = key.toUpperCase().split('');

    // calculate encryptedMessage
    let encryptedMessage = [];
    let j = 0;

    for (let i = 0; i < m.length; i++) {
      // if symbol isn't a letter, just add it and go on
      if(alphabet.indexOf(m[i]) === -1) {
        encryptedMessage.push(m[i]);
        continue;
      }

      let mI = alphabet.indexOf(m[i]);
      let kI = alphabet.indexOf(k[j]);
    
      let finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
      if(finIndex < 0) {
        finIndex = alphabet.length + finIndex;
      }
      
      encryptedMessage.push(alphabet[finIndex]);
      
      j++;
      if (j === k.length) j = 0;
    }

    return (this.reverse === false) ? encryptedMessage.reverse().join('') : encryptedMessage.join('');
  }
}

module.exports = VigenereCipheringMachine;