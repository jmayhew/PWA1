/**
 * Created by Jesse Mayhew on 2/9/14.
 * Goal 2 assignment JavaScript practice

create a function named 'avgNumbers'
- accept 1 parameter into the function that will be an array of unlimited numbers
- find the average of all the numbers
- return the average from the function
- console.log the answer outside of the function
 */





var myArray =[4,3];

var avgNumbers = function(){


    var math= (myArray[0]+myArray[1])/myArray.length;
     return math;
}
var math = avgNumbers();
console.log(math);









    /*
 create a function named 'fullName'
- accept 2 parameters into the function that are strings (firstname and lastname)
- return the name after it has been concatenated
- console.log the answer outside of the function

*/


var first   ='James';
var last     =' Ellington';

var fullName = function(firstName,lastName){

   var math = (first.concat(last));

    return math;

};

var math = fullName();
console.log(math);




/*

    create a function named 'wordCount'
- accept 1 parameter into the function that is a long string of text words
- create a function that counts all the words and returns the answer
- console.log the answer outside of the function

*/
var srt1 = 'Hi my name is Marshall';

var wordCount = function(){

      var newMath =srt1.split(" ");
    return newMath;

}

var newMath = wordCount();
console.log(newMath.length);




/*
 create a function named 'charCount'
- accept 1 parameter into the function that is a long string of text
- return length of the array of string characters
- console.log the answer outside of the function
*/



var charCount = function(){

    var charCount = srt1.length;
    return charCount;
}

console.log(charCount());
/*
 create a function named 'vowelsInWord'
- accept 1 parameter into the function that is a one word string
- return the number of vowels in the word
- console.log the answer outside of the function
*/

var vowelsInWord = function(){
    var method =srt1.indexOf("a","e","i","o","u","y");
return method;
}
var method = vowelsInWord();
console.log(method);

/*
 create a function named 'findNum'
- accepts 2 parameters into the function - 1. array of numbers, 2. boolean
- if the second parameter being passed is "false" or null then
 - create an array with all of the odd numbers from the array
- else
 -
 create an array with all of the even numbers from the array
- return the array
- console.log the answer outside of the function
 */

var newArray = [3,4,7,8];
var boo = false;
var findNum = function(){
    if(boo === true){

    }else{
        if (newArray[3] % 2 && newArray[3] >= 1){

           //var mathCheck = newArray[3] % 2 && newArray[3] >= 1;
            //console.log(mathCheck);
        }
    }

}