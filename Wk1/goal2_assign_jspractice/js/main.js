


/*
 Created by Jesse Mayhew on 2/9/14.
 Goal 2 assignment JavaScript practice


create a function named 'avgNumbers'
- accept 1 parameter into the function that will be an array of unlimited numbers
- find the average of all the numbers
- return the average from the function
- console.log the answer outside of the function
 */


var myArray =[4,3];

var avgNumbers = function(digits){

    var math= (digits[0]+digits[1])/digits.length;

    return math;
}

var math = avgNumbers(myArray);
console.log(math);//3.5









    /*
 create a function named 'fullName'
- accept 2 parameters into the function that are strings (firstname and lastname)
- return the name after it has been concatenated
- console.log the answer outside of the function

*/


var first   ='James';
var last     =' Ellington';

var fullName = function(firstName,lastName){

   var math = (firstName.concat(lastName));

    return math;

};

var math = fullName(first,last);
console.log(math);//James Ellington




/*

    create a function named 'wordCount'
- accept 1 parameter into the function that is a long string of text words
- create a function that counts all the words and returns the answer
- console.log the answer outside of the function

*/

var srt1 = 'Hi my name is Marshall';

var wordCount = function(sentence){

      var newMath = sentence.split(" ");

    return newMath;

}

var newMath = wordCount(srt1);
console.log(newMath.length);//5




/*
 create a function named 'charCount'
- accept 1 parameter into the function that is a long string of text
- return length of the array of string characters
- console.log the answer outside of the function
*/

var willShake ="To be or not to be.";

var charCount = function(verse){

    var charCount = verse.length;

    return charCount;

}

console.log(charCount(willShake));//19


/*
 create a function named 'vowelsInWord'
- accept 1 parameter into the function that is a one word string
- return the number of vowels in the word
- console.log the answer outside of the function
*/
/*

 */

var manners = "underdog";

var  i;

var vowelsInWord = function(instructions){


var finalArray =[];

    console.log(instructions);




    var wordToArray = instructions.split("");

    console.log(wordToArray);

    for(i=0;i<wordToArray.length;i++){

       // console.log("ins"+i);

        switch (wordToArray[i])
        {
            case 'a':
                finalArray.push(wordToArray[i]);
                i++;
                break;


            case 'e':
                finalArray.push(wordToArray[i]);

                i++;
                break;


            case 'i':
                finalArray.push(wordToArray[i]);
                i++;
                break;


            case 'o':
                finalArray.push(wordToArray[i]);

                i++;
                break;

            case 'u':
                finalArray.push(wordToArray[i]);

                i++;
                break;


        }

    }

    return finalArray.length;
}

var finalArray = vowelsInWord(manners);
console.log(finalArray);



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


var newArray = [3,4];

var boo = false;


var findNum = function(par1,par2){

    var myEvenArr = [];
    var myOddArr = [];

    if(par2 === false || par2=== null){


        for ( par1[index]=0;par1[index]<par1.length; par1[index]++){

            if(par1[index]%2===0){

                console.log('this 1st if runs');

                 myEvenArr.push[par1[index]];

                return myEvenArr;

                }else{

            }

                if(par1[index]%2===null){

                    myOddArr.push[par1[index]];

                    return myOddArr;

                }else{

                    if(par2 === true){

                        for ( par1[index]=0;par1[index]<par1.length; par1[index]++){

                            if(par1[index]%2===0){

                                myEvenArr.push[par1[index]];
                                return myEvenArr;

                            }else{

                            }

                            if(par1[index]%2===null){
                                myOddArr.push[par1[index]];
                                console.log(myOddArr);
                                return myOddArr;
                            }



                console.log(myEvenArr);
                }
                        console.log(myEvenArr);
            }
                    console.log(myEvenArr);
        }
            console.log(myEvenArr);
    }

        console.log(myEvenArr);
var results = myEvenArr+ myOddArr;
            //console.log(myarr[index]);




}

    console.log(myEvenArr);



var results = findNum();
console.log(results);
