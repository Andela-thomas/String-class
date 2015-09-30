require('../lib/strings');

(function() {
  'use strict';

  describe('String Class', function() {
    describe('hasVowels', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.hasVowels).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.hasVowels).toBe('function');
      });

      it('hasVowels Should Return boolean Datatype', function() {
        expect(typeof 'mother'.hasVowels()).toBe('boolean');
      });

      it('Return type should be truthy for word ansd falsy for fbghskl', function() {
        expect('The garage is awesome'.hasVowels()).toBeTruthy();
        expect('The pen '.hasVowels()).toBeTruthy();
        expect('The ink is red'.hasVowels()).toBeTruthy();
        expect('The word of God'.hasVowels()).toBeTruthy();
        expect('The pusture is green'.hasVowels()).toBeTruthy();
        expect('fbghskl'.hasVowels()).toBeFalsy();
      });

      it('should cater for case sensitvity', function() {
        expect('ThE gArAgE Is AwEsOmE'.hasVowels()).toBe(true);
        expect('ThE pEn'.hasVowels()).toBe(true);
        expect('The wOrd Of GOd'.hasVowels()).toBe(true);
        expect('RSVP'.hasVowels()).toBe(false);
      });
    });

    describe('toUpper Method', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.toUpper).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.toUpper).toBe('function');
      });

      it('should return a Datatype of string', function() {
        expect(typeof 'world'.toUpper() === 'string').toBeTruthy();
      });

      it('should return MOTHER for mother', function() {
        expect('mother is awesome'.toUpper()).toBe('MOTHER IS AWESOME');
        expect('The world IS, rouND'.toUpper()).toBe('THE WORLD IS, ROUND');
      });
    });

    describe('toLower Method', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.toLower).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.toLower).toBe('function');
      });

      it('should return a Datatype of string', function() {
        expect(typeof 'world'.toLower()).toBe('string');
      });

      it('should return mother for MOTHER', function() {
        expect('MOTHER'.toLower()).toBe('mother');
        expect('MOTHER is the WOrld'.toLower()).toBe('mother is the world');
      });
    });

    describe('ucFirst method', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.ucFirst).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.ucFirst).toBe('function');
      });

      it('should return a Datatype of string', function() {
        expect(typeof 'world'.ucFirst()).toBe('string');
      });

      it('should return Mother for mother', function() {
        expect('we all want the same thing'.ucFirst()).toBe('We All Want The Same Thing');
      });
    });

    describe('isQuestion Method', function() {
      it('should return boolean Datatypes', function() {
        expect(typeof 'we are the champs'.isQuestion()).toBe('boolean');
      });

      it('hasVowels shoudd be a function', function() {
        expect(typeof String.prototype.isQuestion).toBe('function');
      });

      it('should return a true if is question and false if not', function() {
        expect('we are the champs'.isQuestion()).toBeFalsy();
        expect('are the champs?'.isQuestion()).toBeTruthy();
      });
    });

    describe('words Method', function() {
      it('should return an object', function() {
        expect(typeof 'andela is awesome'.words()).toBe('object');
        expect(Array.isArray('andela is awesome'.words())).toBe(true);
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.words).toBe('function');
      });

      it('should return an array of words', function() {
        expect('this is andela?'.words()).toEqual(['this', 'is', 'andela']);
        expect('this is a test test test test of Tests'.words()).toEqual(['this', 'is', 'a', 'test', 'of', 'Tests']);
      });
    });

    describe('wordCount Method', function() {
      var sentence = "this is a test test test test of Tests";

      it('should be a prototype of the string object', function() {
        expect(typeof sentence.wordCount()).toBe('number');
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.wordCount).toBe('function');
      });

      it('should return 8 for Andela is the most amazing place to be', function() {
        expect(sentence.wordCount()).toBe(6);
      });
    });

    describe('toCurrency Method', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.toCurrency).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.toCurrency).toBe('function');
      });

      it('should return a Datatype of string', function() {
        expect(typeof '11111.11'.toCurrency()).toBe('string');
      });

      it('should return formated currency  taking care of cents(.)', function() {
        expect('111.11'.toCurrency()).toBe('111.11');
        expect('1111.11'.toCurrency()).toBe('1,111.11');
        expect('11111.11'.toCurrency()).toBe('11,111.11');
        expect('111111.11'.toCurrency()).toBe('111,111.11');
        expect('111111111.11'.toCurrency()).toBe('111,111,111.11');
        expect('5689896.89'.toCurrency()).toBe('5,689,896.89');
      });
    });

    describe('fromCurrency Method', function() {
      it('should be a prototype of the string object', function() {
        expect(String.prototype.fromCurrency).toBeDefined();
      });

      it('hasVowels should be a function', function() {
        expect(typeof String.prototype.fromCurrency).toBe('function');
      });

      it('should return a Datatype of string', function() {
        expect(typeof '11111.11'.fromCurrency()).toBe('number');
      });

      it('should return 11111.11 for 11,111.11', function() {
        expect('11'.fromCurrency()).toBe(11);
        expect('11.11'.fromCurrency()).toBe(11.11);
        expect('1,111.11'.fromCurrency()).toBe(1111.11);
        expect('2,111,233.11'.fromCurrency()).toBe(2111233.11);
        expect('5,689,896.89'.fromCurrency()).toBe(5689896.89);
      });
    });
  });
})();
