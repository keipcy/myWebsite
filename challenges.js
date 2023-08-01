// Challenge 1

function sayHello() {
    if (document.getElementById("myName").value == "charles" || document.getElementById("myName").value == "elizabeth") {
        return alert("Hello, your Majesty.");
    }
    else {
        return alert("Hello, " + document.getElementById("myName").value + "!");
    }
}

// Challenge 2

function knockKnock() {
    let who = prompt("Knock knock.");
    if (who !== "whos there") {
        alert("have you never heard a knock knock joke before?")
        return;
    }
    else {
        let whoTwo = prompt("Cargo.");
        if (whoTwo !== "cargo who") {
            alert("have you never heard a knock knock joke before?")
            return;
        }
        else {
            alert("Car go BEEP BEEP!")
            return;
        }
    }
}


// Challenge 3

function rectArea() {
    let area = document.getElementById("heightR").value * document.getElementById("widthR").value;
    return document.getElementById("hiddenArea").textContent = "The area of your rectangle is " + area;
}

function cubVol() {
    let volume = document.getElementById("height").value * document.getElementById("width").value * document.getElementById("length").value;
    return document.getElementById("hiddenAreaCub").textContent = "The volume of your cuboid is " + volume;
}

// Challenge 4

function alive() {
    let todaysdate = new Date();
    let birthday = document.getElementById("days").valueAsDate;
    // converts date to miliseconds
    let todaysdate_ms = todaysdate.getTime();
    let birthday_ms = birthday.getTime();
    // subtract
    let timeDif = todaysdate_ms - birthday_ms;
    // ms in one day (hours minutes seconds ms)
    const msDay = 24 * 60 * 60 * 1000;
    // calculate days alive
    let days = Math.floor(timeDif / msDay);
    // seconds in a day
    let secondsDay = 24 * 60 * 60;
    // calculate seconds alive
    let secondsAlive = Math.floor(timeDif / secondsDay);
    document.getElementById("hiddenDaysAlive").textContent = `You have been alive for ${days} days!`;
    document.getElementById("hiddenSecondsAlive").textContent = `You have been alive for ${secondsAlive} seconds!`;
}

// Challenge 5

function eligible() {
    let todaysdate = new Date();
    let birthday = document.getElementById("days").valueAsDate;
    let todaysdate_ms = todaysdate.getTime();
    let birthday_ms = birthday.getTime();
    let timeDif = todaysdate_ms - birthday_ms;
    let yearms = 1000 * 60 * 60 * 24 * 7 * 52;
    const age = Math.floor(timeDif / yearms);
    if (age >= 23) {
        return document.getElementById("hiddenEligible").textContent = "You are eligible to vote, join the army, drive and hire a car" 
    }
    else if (age >= 18) {
        return document.getElementById("hiddenEligible").textContent = "You are eligible to vote, join the army and drive. You are not eligible to hire a car."
    }
    else if (age >= 17) {
        return document.getElementById("hiddenEligible").textContent = "You are eligible to join the army and drive. You are not eligible to vote or hire a car."
    }
    if (age >= 16) {
        return document.getElementById("hiddenEligible").textContent = "You are eligible to join the army. You are not eligible to vote, hire a car or drive."
    }
    else {
        return document.getElementById("hiddenEligible").textContent = "You are not eligible to vote, hire a car, join the army or drive."
    }
}

// Challenge 6

function rockPaperScissors(clicked_id) {
    //cpu
    let cpu = Math.floor(Math.random() * 3) + 1;
    if (cpu == 1) {
        cpu = "rock"
    }
    else if (cpu == 2) {
        cpu = "paper"
    }
    else {
        cpu = "scissors"
    }
    // player
    if (clicked_id == "rock") {
        if (cpu == "rock") {
            return document.getElementById("hiddenRPS").textContent = "I picked rock. We drew!"
        }
        else if (cpu == "paper") {
            return document.getElementById("hiddenRPS").textContent = "I picked paper. You lost!"
        }
        else {
            return document.getElementById("hiddenRPS").textContent = "I picked scissors. You win!"
        }
    }
    if (clicked_id == "paper") {
        if (cpu == "paper") {
            return document.getElementById("hiddenRPS").textContent = "I picked paper. We drew!"
        }
        else if (cpu == "rock") {
            return document.getElementById("hiddenRPS").textContent = "I picked rock. You win!"
        }
        else {
            return document.getElementById("hiddenRPS").textContent = "I picked scissors. You lost."
        }
    }
    if (clicked_id == "scissors") {
        if (cpu == "scissors") {
            return document.getElementById("hiddenRPS").textContent = "I picked scissors. We drew!"
        }
        else if (cpu == "rock") {
            return document.getElementById("hiddenRPS").textContent = "I picked rock. You lost."
        }
        else {
            return document.getElementById("hiddenRPS").textContent = "I picked paper. You win!"
        }
    }
}

function click() {
    document.querySelector("rpsButton").style.border = "thick solid black";
    
}

// learning point for me: about function parameters; specifically passing an id through a function using this.id and clicked_id.

// Challenge 7

function numberGame(clicked_id) {
    // To find a random number between two values: Math.random() * (max - min) + min
    let startNum = Math.floor(Math.random() * 10 + 20);
    while (startNum != 0) {
        console.log("keep going")
        if (startNum = 0) { 
            break; 
        }
        else {
            if (clicked_id == "one") {
                let startNum = startNum - 1
            }
            else if (clicked_id == "two") {
                let startNum = startNum - 2
            }
            else {
                let startNum = startNum - 3
            }
        }
    }
    return document.querySelector("hiddenDontGetZero").textContent = "Keep going!"
}