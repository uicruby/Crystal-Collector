$(document).ready(function () {

    // creating a random number that player has to play with
    var Random = Math.floor(Math.random() * 101 + 19);
    //appending the number generated to html
    $('#random').text(Random);

    // generating four random numbers between 1-12
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    // assigning variable to have  count on number of times user wins, looses, Usertotal
    var userTotal = 0;
    var wins = 0;
    var loses = 0;

    // appending the number of wins and looses to html
    $("#wins").text(wins);
    $("#loses").text(loses);

    // reset function, so everytime user wins or lose it will reset the count and the  random numbers so that user can play again
    function reset() {
        var Random = Math.floor(Math.random() * 101 + 19);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 101 + 19);
        num4 = Math.floor(Math.random() * 101 + 19);
        userTotal = 0;
        $("#finalScore").text(userTotal);
    }

    //function to be  called if user wins
    function win() {
        alert("Congratulations! You won");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    //function to be  called if user lose
    function lose() {
        alert("Sorry! You lose this game. Try again");
        loses++;
        $("#loses").text(loses);
        reset();
    }

    $("#blue").on('click', function () {
        userTotal += num1;   //adding clicked jewels random number to user total
        $("#finalScore").text(userTotal);
        if (userTotal == Random) // if usertotal= random number than user wins
        {
            win();
        }
        else if (userTotal > Random) {  // if number goes above random user loose
            lose();
        }

    })
    $("#green").on('click', function () {
        userTotal += num2;   //adding clicked jewels random number to user total
        $("#finalScore").text(userTotal); 
        if (userTotal == Random) // if usertotal= random number than user wins
        {
            win();
        }
        else if (userTotal > Random) {  // if number goes above random user loose
            lose();
        }

    })
    $("#red").on('click', function () {
        userTotal += num3;   //adding clicked jewels random number to user total
        $("#finalScore").text(userTotal); 
        if (userTotal == Random) // if usertotal= random number than user wins
        {
            win();
        }
        else if (userTotal > Random) {  // if number goes above random user loose
            lose();
        }

    })
    $("#yellow").on('click', function () {
        userTotal += num4;   //adding clicked jewels random number to user total
        $("#finalScore").text(userTotal); 
        if (userTotal == Random) // if usertotal= random number than user wins
        {
            win();
        }
        else if (userTotal > Random) {  // if number goes above random user loose
            lose();
        }

    })
});