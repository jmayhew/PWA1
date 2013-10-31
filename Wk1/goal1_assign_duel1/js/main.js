/**Goal1 Assignment Part One
 * Created by Jesse Mayhew on 10/30/13.
 */
//self executing function
(function(){

console.log("FIGHT!!!");

    //player names
    var playerOne = "Spiderman";
    var playerTwo = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round =1;

    function fight(){

    console.log('in the fight function');

        alert(playerOne+":"+playerOneHealth+" *START* "+playerTwo+":"+playerTwoHealth);//comes from variables above at this point

    for (var i=0; i<10; i++){//will process 10 times

            //random formula is Math.floor(Math.random() * (max - min) + min);//parenthesis does first inner most
            //Math.random generates a number of either one or zero
            //use console to make sure it loops console.log(i);
        var minDamage1 = player1Damage*.5;//variable for min in Math.floor function
        var minDamage2 = player2Damage*.5;

       var f1= Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
       var f2= Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

        //console.log(f1);//to check to see if above functions are working
        //console.log(f2);

        //inflicting damage
        playerOneHealth-=f1;//same as playerOneHealth-f1;
        playerTwoHealth-=f2;

        //console.log(playerOneHealth);
        //console.log(playerTwoHealth);

        console.log(playerOne+": "+playerOneHealth + " " + playerTwo+":"+playerTwoHealth);

        var results = winnerCheck();
        console.log(results);

        if (result==="no winner")
        {
            round++;
            alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

        } else{
            alert(result);
            break;
        };

    };
    };

    //check for victor
    function winnerCheck(){

        console.log("in the winnerCheck Fn");//if this goes out then winnerCheck is good

        var result = "No Winner";//code will go here

        if (playerOneHealth<1 && playerTwoHealth<1);
        result = "You Have Both Died";
    }else if(playerOneHealth<1){
        result = playerTwo +" Wins";
    }else if(playerTwoHealth<1){
        result = playerOne +" Wins";
    };

    return result;//goes to the winnerCheck()

    var results = winnerCheck();//stores the results from return to winnerChecklater
    //the program starts below to execute fight function

    console.log('program starts here');

    fight();

})();