module.exports = function repeater(str, options) {
   
   let repeater = options.repeatTimes,
   separator = options.separator || '+',
   addition = (options.addition === null) ? 'null' : options.addition,
   addRepeater = options.additionRepeatTimes,
   addSeparator = options.additionSeparator || '|';
  
   let addedString = new Array(addRepeater).fill(addition).join(addSeparator),
   finalString = new Array(repeater).fill(str + addedString).join(separator);

   return finalString;
};



 
