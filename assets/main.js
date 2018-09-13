$(document).ready(function(){

    
    // establishing random range of target numbers
    var randomRupees= Math.floor(Math.random()* 57 + 42);
    console.log(randomRupees);
    $('#rupees-to-guess').text(randomRupees);
  
    
    var counter = 0;
    var wins = 0;
    var losses = 0;

    

    // resets game 
    function reset() {
        var randomRupees=Math.floor(Math.random()* 57 + 42);
        console.log(randomRupees);
        $('#rupees-to-guess').text(randomRupees);
        var purple = Math.floor(Math.random() * 19 + 1);
        var green = Math.floor(Math.random() * 19 + 1);
        var red = Math.floor(Math.random() * 19 + 1);
        var silver = Math.floor(Math.random() * 19 + 1);
        var blue = Math.floor(Math.random() * 19 + 1);
        counter = 0;
        $("#final-rupees").text(counter);
    }


    $("#number-wins").text(wins);
    $("#number-losses").text(wins);

    
    // winning the game
    function win() {
        alert("You did it! Hyrule forever!");
        wins++;
        $("#number-wins").text(wins);
        reset();
    }

    // losing the game
    function lose() {
        alert("Oh no! That darned wizard!");
        losses++;
        $("#number-losses").text(losses);
        reset();
    }


    // setting up random values for each rupee
    var purple = Math.floor(Math.random() * 19 + 1);
    var green = Math.floor(Math.random() * 19 + 1);
    var red = Math.floor(Math.random() * 19 + 1);
    var silver = Math.floor(Math.random() * 19 + 1);
    var blue = Math.floor(Math.random() * 19 + 1);

    // rupee click functions
    $("#purple").on("click", function() {
        counter = counter + purple;
        console.log("Rupees so far: " + counter);
        $("#final-rupees").html(counter);
        
        if (counter === randomRupees) {
            win();
        }
        else if (counter > randomRupees) {
            lose();
        }
    })

    $("#green").on("click", function() {
        counter = counter + green;
        console.log("Rupees so far: " + counter);
        $("#final-rupees").text(counter);

        if (counter === randomRupees) {
            win();
        }
        else if (counter > randomRupees) {
            lose();
        }
    })

    $("#red").on("click", function() {
        counter = counter + red;
        console.log("Rupees so far: " + counter);
        $("#final-rupees").text(counter);

        if (counter === randomRupees) {
            win();
        }
        else if (counter > randomRupees) {
            lose();
        }
    })

    $("#silver").on("click", function() {
        counter = counter + silver;
        console.log("Rupees so far: " + counter);
        $("#final-rupees").text(counter);

        if (counter === randomRupees) {
            win();
        }
        else if (counter > randomRupees) {
            lose();
        }
    })

    $("#blue").on("click", function() {
        counter = counter + blue;
        console.log("Rupees so far: " + counter);
        $("#final-rupees").text(counter);

        if (counter === randomRupees) {
            win();
        }
        else if (counter > randomRupees) {
            lose();
        }
    })
});