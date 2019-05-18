$(document ).ready(function() {
    //object for all the crystals
        var crystals = {
            green: {image: "green", value: 0},
            red: {image: "red", value: 0},
            silver: {image: "silver", value: 0},
            yellow: {image: "yellow", value: 0},
        };
    
    //variables for wins,losses,counter, target
        var targetNum = 0,
            counter = 0,
            wins = 0,
            losses = 0;
    
        function start() {
            //counter gets set to 0 whenever called function is called
            counter = 0;
            //random number on the target box
            targetNum = (Math.floor(Math.random() * 102) + 19);
            $(".randomNumberBox").html(targetNum);
    
            //each crystal has a random value at the start 
            crystals.green.value = Math.floor(Math.random() * 12) + 1;
            crystals.red.value = Math.floor(Math.random() * 12) + 1;
            crystals.silver.value = Math.floor(Math.random() * 12) + 1;
            crystals.yellow.value = Math.floor(Math.random() * 12) + 1;
        };
        //adds crystals to total score
        function adding(crystals) {
            counter += crystals.value;
            $(".totalScoreBox").html(counter);
            check();
        }
        //checks if counter matches or goes over 
        //?? does if/else if need else ?
        function check() {
            if (counter > targetNum) {
                losses++;
                lossesText();
                $("#loss").html(losses);
                start();
            } else if (counter === targetNum) {
                wins++;
                winsText();
                $("#wins").html(wins);
                start();
            }
        }
        //start function called 
        start();
    
        //adds and displays inside the total score box
        $("#green").on("click", function () {
            adding(crystals.green);
        });
        $("#red").on("click", function () {
            adding(crystals.red);
        });
        $("#silver").on("click", function () {
            adding(crystals.silver);
        });
        $("#yellow").on("click", function () {
            adding(crystals.yellow);
        });
        
        //function alerts when results occur
        function winsText(){
            setTimeout(function () {
                alert("CONGRATS, YOU WON!");
            }, 500);
        };
        function lossesText(){
            setTimeout(function () {
                alert("SORRY, YOU LOST!");
            }, 500);
        }
    });
    