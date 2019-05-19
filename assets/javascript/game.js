$(document ).ready(function() {
    //object for all the crystals
        var crystals = {
            blue: {image: "blue", value: 0},
            red: {image: "red", value: 0},
            purple: {image: "purple", value: 0},
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
            $(".randomNumber").html(targetNum);
    
            //each crystal has a random value at the start 
            crystals.blue.value = Math.floor(Math.random() * 12) + 1;
            crystals.red.value = Math.floor(Math.random() * 12) + 1;
            crystals.purple.value = Math.floor(Math.random() * 12) + 1;
            crystals.yellow.value = Math.floor(Math.random() * 12) + 1;
        };
        //adds crystals to total score
        function adding(crystals) {
            counter += crystals.value;
            $(".totalScore").html(counter);
            check();
        }
        //checks if counter matches or goes over 
        //?? does if/else if need else ?
        function check() {
            if (counter > targetNum) {
                lossesInfo();
                start();
            } else if (counter === targetNum) {
                winsInfo();
                start();
            }
        }
        //start function called 
        start();
        
        //function to display info and add win/loss
        function winsInfo() {
            wins++;
            winsText();
            $("#wins").html(wins + "<h3> You Win! </h3>")
        }
        function lossesInfo() {
            losses++;
            lossesText();
            $("#losses").html(losses + "<h3> You Lost! </h3>")
        }
        //adds and displays inside the total score box
        $("#blue").on("click", function () {
            adding(crystals.blue);
        });
        $("#red").on("click", function () {
            adding(crystals.red);
        });
        $("#purple").on("click", function () {
            adding(crystals.purple);
        });
        $("#yellow").on("click", function () {
            adding(crystals.yellow);
        });
        
        //function alerts when results occur
        function winsText() {
            setTimeout(function () {
                alert("CONGRATS, YOU WON!");
                //once alert function gets a response from user, message will disappear from winLoss class box. 
                $("#wins").html(wins);                   
            }, 500);
        }
        function lossesText() {
            setTimeout(function () {
                alert("SORRY, YOU LOST!");
                //once alert function gets a response from user, message will disappear from winLoss class box. 
                $("#losses").html(losses);
            }, 500);
        }
    });
    