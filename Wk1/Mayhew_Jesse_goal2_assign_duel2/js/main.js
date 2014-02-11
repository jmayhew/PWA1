/*Jesse Mayhew*/
/*February 5th 2014*/
/*The Duel Part One*/

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    var fighter1 =["Spiderman",20,100];
    var fighter2 =["Batman",20,100];


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

    function fight(){
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);//math.random generates a decimal number below one.
            //console.log(f1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
               //console.log(f2);


            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

//console.log(playerOneHealth);
   // console.log(playerTwoHealth);


            console.log(fighter1[0]+": "+fighter1[2] + " " + fighter2[0]+":"+fighter2[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

            } else{
                alert(result);
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