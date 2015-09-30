// Module: String Class
// Author: Nyambati Thomas
// Company: Andela ltd.
// E-mail: thomas.nyambati@andela.com
// Checkpont 2.

(function() {
  'use strict';

  // this prototype function will return true or false
  // if a word or sentence has a vowels in it
  // also caters for case sensitivity
  String.prototype.hasVowels = function() {
    return /[aeiou]/gi.test(this);

  };

  // This function will return a string value upper case
  // First we convert our words into ASCII values
  // we then check if they are uppercase or not
  // we then convert the word to uppercase by subtracting 32
  // We also ensure we preserve the empty spaces.
  String.prototype.toUpper = function() {
    var string = '',
      counter = 0,
      charCode = 0;
    while (counter < this.length) {
      charCode = this.charCodeAt(counter);
      if (charCode !== 32 && charCode >= 97) {
        charCode -= 32;
      }
      string += String.fromCharCode(charCode);
      counter++;
    }
    return string;
  };

  // This function will return a string value in toLowercase,
  // First we convert our words into ASCII values,
  // We then check if they are uppercase or not
  // We then convert the word to uppercase adding 32
  // We also ensure we preserve the empty spaces,
  // and special characters
  String.prototype.toLower = function() {
    var string = '',
      counter = 0,
      charCode = 0;
    while (counter < this.length) {
      charCode = this.charCodeAt(counter);
      if (charCode !== 32 && charCode < 97) {
        charCode += 32;
      }
      string += String.fromCharCode(charCode);
      counter++;
    }
    return string;
  };

  // This function will capitilse each word in a sentence
  // we use the regular expression to detect words and then,
  // the callback functon will replace the lowercase value,
  // to uppercse using our to upper method
  String.prototype.ucFirst = function() {
    // match any word character,
    //and a character that is not white space, tabs or line spaces,
    return this.replace(/\w\S*/g, function(i) {
      return i.charAt(0).toUpperCase() + i.slice(1);
    });
  };

  // This function will detect if is sentence is a quetion,
  // and will return a value of boolean
  // 'mother?'.isQuetion() => true.
  // check over multiple lines or questions
  String.prototype.isQuestion = function() {
    return /[?+$]/g.test(this);
  };

  // This function will return an array of all words in a sentence
  // "this is a word function".words(); => ['this','is','a','word','function']
  String.prototype.words = function() {
    // check for word character,
    // spaces and zero or more of the preceding characters.
    var array = this.match(/\w+\s*/gi),
      filteredArray = [];
    for (var key in array) {
      // since our regec returns an array with words and spaces
      // we want to clean that up so we replae all the spaces
      array[key] = array[key].replace(/\s/, '');
      // filter the array to reduce redunddancy.
      // i.e we dont wna t our array to repeat words if they are used twice.
      if (filteredArray.indexOf(array[key]) === -1) {
        filteredArray.push(array[key]);
      }
    }
    return filteredArray;
  };


  // This function will return the number of words in the sentence,
  // It uses the words function above to find the total number of words
  String.prototype.wordCount = function() {
    return this.words().length;
  };

  // This function will convert a string value or number into currency.
  // it converts the input to currency format.
  String.prototype.toCurrency = function() {
    //?= match and split if preceded by 3 characters(\d{3}) (reverse)
    //?: match but dont remember the match to avoid repetition
    // example if it maches 345,in 12345 if we dont ?: it will rerurn 12,345,345 which we don't want
    return this.split(/(?=(?:\d{3})+(?:\.|$))/g).join();
  };

  // This function converts input back  from currency format.
  String.prototype.fromCurrency = function() {
    return parseFloat(this.replace(/[,]+/g, ''));
  };
})();
