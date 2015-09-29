# StringJs
This library extends the functionality of the string class by providng you with methods that you canuse to manipulate strings to achieve maximum perfomance. Mosts of this methods have been implemented using regular epxressions.

# usage
To use this methods on both node environment and html page inclusion. First download _**`StringJs`**_ and include into your `js` folder _**npm not available at the moment**_

1. ###### Node
    To use _**`StringJs`**_ on your node  application require it  in your node app
    ``` JavaSript
        // just to let you know express has nothing to do with our stringJs
        var express = require('express');
        app = express();
        require("./js/strings");

        // now we can have stringjs methods all to our selves
        var random = "sphynx";
            random.hasVowels(); // return => false
        // happy hunting
    ```

2. ###### Html page
    To use _**`StringJs`**_ in your page include it an the end of your html page
    ``` Html
        <!Doctype html>
        <html>
            <body>
                <!--alot html above-->
                <!--include StringJS script an the end of your page-->
                <script src="js/strings.js"></script>
            </body>
        </html>
    ```

# Methods
This library consist of nine custom methods, `hasVowels()` , `toUpper()`, `toLower()`, `isQuestion()`, `words()`, `wordCount()`, `toCurrency()` and lastly `fromCurrency`.

1. ######  Method _`hasVowels()`._

    This method can be used to check if a string has vowels, it will return a boolean Datatype of true if vowels exists and false if they dont.
    ``` JavaScript
        var feeling = "This is the best day ever";
            feeling.hasVowels(); // return => true
        var random = "sphynx";
            random.hasVowels(); // return => false
    ```
2. ######  Method _`toUpper()`_.

    This method can be used to uppercase words, it custom implementation of JavaScript inbuilt `toUpperCase()`, This method will return an all uppercase string.
    ``` JavaScript
        var myVar = "We all love javasript";
            myVar.toUpper(); // return => WE ALL LOVE JAVASCRIPT
    ```
3. ######  Method _`toLower()`_.

    This method can be used to lowercase words, it custom implementation of JavaScript inbuilt `toLowerCase()`, This method will return All uppercase string.
    ``` JavaScript
        var myVar = "WE ALL LOVE JAVASCRIPT";
            myVar.toLower(); // return => we all love javascript
    ```
4. ######  Method _`ucFirst()`_.

    This methods can be used to to capitize a sentence, it returns a string with all the words capitalized.
    ``` JavaSript
        var sentence = "i want this sentence capiatalized";
            sentence.ucFirst(); // returns I Want This Sentence Capitalized
    ```
5. ######  Method _`isQuestion()`_.

    This method can be used to detect if a sentence is a question or not. it will return a boolean value of true or false.
    ``` JavaScript
        var myVar = "Are you serious?", mySecondVar = "yes i am";
            myVar.isQuestion(); // returns => true
            mySecondVar.isQuestion(); // returns => false
    ```
6. ######  Method _`words()`_.

    This method can be used to return the all the words in sentence in form of an array e.g `['me', 'and', 'myself']`
    ``` JavaScript
        var sentence = "me and myself";
            sentence.words(); // returns => ['me', 'and', 'myself']
    ```

7. ######  Method _`WordCount()`_.

    This method can be used to find the number of words words in a sentence, it utilizes the methods words above to maximize perfomance.
    ``` JavaScript
        var sentence = "me and myself";
            sentence.wordCount(); // returns = 3
    ```

8. ######  Method _`toCurrency()`_.

    This method can be used to format a string to currency.
    ``` Javascript
        var money = "234456789.123"
            money.toCurrency(); // returns 234,456,789.123
    ```

9. ######  Method _`fromCurrency()`_.

    This method can be used to converts a currency format, back to nummber. it return type is a number.
    ``` JavaScript
        var currency = "12,345,678.12";
            currency.fromCurrency(); // returns  => 12345678.12
    ```

The above methods should be able to help you to manipulate your strings to suite your particular enviroment.
changes are bound to be made to maximse perfomance and add more functionality.

## Thank You.

