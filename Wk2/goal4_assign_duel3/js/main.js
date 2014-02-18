/*Jesse Mayhew*/
/*February 5th 2014*/
/*The Duel Part Three*/

/**
 *
 Modify fight() function

 Since this assignment is now using objects, the code in the fight() function must be modified
 from the previous version of the assignment to accommodate for this. NO loop will be needed!-
 since clicking on the button is what triggers the next round.
 Replace the alerts with code that access the DOM(HTML) such as getElemetById and/or querySelector
 Use JavaScript's innerHTML property to change the text in the HTML. The following information will
 be displayed dynamically in the HTML (view the demonstration again to see how this should look):
 Fighter's name and health at the top
 Current round number above the button

 Create a click event on the button
 When the button is clicked, the following should commence:

 advance round
 the modified fight() function is called

 Disable the button when the game is over and make sure the appropriate "game over message" is shown
 at the top. The message should be one of the following:

 Fighter 1 wins
 Fighter 2 wins
 Both Fighters Die
 Make sure the actual name of the fighter is shown not fighter1 or fighter2. You can always change
 the message to something else if you want to be more creative.
 Assignment 3
 Part 3/3 of series
 setters and getters

 person['age']='28';

 person.name = 'Tom Cruise';

 */

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //var fighter1 =["Spiderman",20,100];
    //var fighter2 =["Batman",20,100];

    fighter1 = {name:"Spiderman","Batman" damage:20,20 health:100,100};
    fighter2 = {name:"Batman", damage:20, health:100};
    //player name
    var playerOneName = "Spiderman";//index[0]
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;//index[1]
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;//index[2]
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    fighter1[i].onclick =function fight(){
        //alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
        //for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);//math.random generates a decimal
            // number below one.
            //console.log(f1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
               //console.log(f2);


            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

//console.log(playerOneHealth);
   // console.log(playerTwoHealth);


            console.log(fighter1[0]+": "+fighter1[2]+ " " +fighter2[0]+":"+fighter2[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                //alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

            } else{
               // alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (fighter1[2]<1 && fighter2[0]<1)
        {
            result = "You Both Die";
        } else if(fighter1[2]<1){
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1)
        {
            result = fighter1[2]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();