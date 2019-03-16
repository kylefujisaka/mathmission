//variable for answer input
var divide = document.getElementById("divide");
//variable for text box
var divideoops = document.getElementById("divideoops");

//variable for answer options
var add = document.getElementById("add");
//variable for text box
var addoops = document.getElementById("addoops");

//randomizes two numbers for the addition
var addnumber1 = Math.floor(Math.random() * 151);
var addnumber2 = Math.floor(Math.random() * 76);
//gets the values of those numbers from the function
var addnum1 = document.getElementById("addnum1");
var addnum2 = document.getElementById("addnum2");
//adds the two numbers together
var addnumsum = addrandomnum1() + addrandomnum2();

//function returns the value of the numbers
function addrandomnum1() {
    return addnumber1;
}

function addrandomnum2() {
    return addnumber2;
}

//variable for answer input
var subtract = document.getElementById("subtract");
//variable for text box
var subtractoops = document.getElementById("subtractoops");

//randomizes the numbers for the subtraction
var subnumber1 = Math.floor(Math.random() * 81 + 35);
var subnumber2 = Math.floor(Math.random() * 36);
//gets the values of the number from the function
var subnum1 = document.getElementById("subnum1");
var subnum2 = document.getElementById("subnum2");
//takes the difference of the two numbers
var subnumsum = subrandomnum1() - subrandomnum2();

//gets the values of the numbers
function subrandomnum1() {
    return subnumber1;
}

function subrandomnum2() {
    return subnumber2;
}

//variable for answer options
var multiply = document.getElementById("multiply");
//variable for text box
var multiplyoops = document.getElementById("multiplyoops");

//variable for sound effect
var chime = new Audio("pokemon_level_up.mp3");

//variables for blue
var gary = document.getElementById("gary");
var garyoops = document.getElementById("garyoops");

//randomizes the numbers for blue
var number1 = Math.floor(Math.random() * 51);
var number2 = Math.floor(Math.random() * 31);
//takes the value of the numbers from the function
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//adds the two numbers
var numsum = randomnum1() + randomnum2();
//returns the value of the numbers
function randomnum2() {
    return number2;
}

function randomnum1() {

    return number1;

}
var refresh = document.getElementById("refresh");


// Execute a function when the user releases a key on the keyboard
divide.addEventListener("mouseout", function() {
    var divans = divide.value;
    // Number 13 is the "Enter" key on the keyboard
    if (divans === "7") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the border style with the enter key

        divide.style.border = "3px solid green";
        divideoops.innerHTML = "Congrats! Thanks to you, Larelei was able to make her sculpture without it melting.";
        chime.play();

    }

    else {
        divide.style.border = "3px solid maroon";
        divideoops.innerHTML = "Oooh, not quite. Try again, or click below for help.";
    }
    if (divans === "") {
        divide.style.border = "none";
        divideoops.innerHTML = "";

    }

});

addnum1.innerHTML = addrandomnum1();
addnum2.innerHTML = addrandomnum2();
add.addEventListener("keyup", function(event) {
    var addans = add.value;

    if (event.keyCode === 13 && addans == addnumsum) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the border style with the enter key

        add.style.border = "3px solid green";
        addoops.innerHTML = "Right on! Bruno was able to lift that much. Now he can train to become even stronger.";
        chime.play();

    }

    else if (event.keyCode === 13) {

        add.style.border = "3px solid maroon";
        addoops.innerHTML = "Hmm, that doesn't seem right. Check again, or see below for help.";
    }

    if (addans === "") {
        add.style.border = "none";
        addoops.innerHTML = "";

    }

});


subnum1.innerHTML = subrandomnum1();
subnum2.innerHTML = subrandomnum2();
// Execute a function when the user releases a key on the keyboard
subtract.addEventListener("keyup", function(event) {
    var subtractans = subtract.value;
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 && subtractans == subnumsum) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the border style with the enter key

        subtract.style.border = "3px solid green";
        subtractoops.innerHTML = "Excellent. Now Agatha knows how many ghosts she needs to round up using her Silph Scope. You move on to the next member of the Elite Four!";
        chime.play();
    }

    else if (event.keyCode === 13) {
        subtract.style.border = "3px solid maroon";
        subtractoops.innerHTML = "That doesn't seem right. Recheck your work or seek assistance below.";

    }
    if (subtractans === "") {
        subtract.style.border = "none";
        subtractoops.innerHTML = "";

    }

});

multiply.addEventListener("mouseout", function() {
    var multiplyans = multiply.value;

    if (multiplyans === "6") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the border style with the enter key
        multiply.style.border = "3px solid green";
        multiplyoops.innerHTML = "Great! Lance has 6 Dratini eggs to take care of and raise in order for them to become fierce Dragonite!";
        chime.play();

    }

    else {

        multiply.style.border = "3px solid maroon";
        multiplyoops.innerHTML = "That doesn't look right. Click below if you are stuck.";
    }

    if (multiplyans === "") {
        multiply.style.border = "none";
        multiplyoops.innerHTML = "";

    }

});

num1.innerHTML = randomnum1();
num2.innerHTML = randomnum2();
// Execute a function when the user releases a key on the keyboard
gary.addEventListener("keyup", function(event) {
    var garyans = gary.value;
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 && garyans == numsum) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the border style with the enter key

        gary.style.border = "3px solid green";
        chime.play();
        garyoops.innerHTML = "Yay! You got it! Now you should try and catch even more Pokemon than that.";
    }

    else if (event.keyCode === 13) {
        gary.style.border = "3px solid maroon";
        garyoops.innerHTML = "Uh oh. That aint it chief";
    }

    if (garyans === "") {
        gary.style.border = "none";
    }

});

refresh.addEventListener("mouseover", function() {
    refresh.style.color = "rgb(175,10,10)";

});

refresh.addEventListener("mouseout", function() {
    refresh.style.color = "rgb(10,10,195)";
});
