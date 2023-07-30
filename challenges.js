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
    return document.getElementById("hiddenArea").innerHTML = "The area of your rectangle is " + area;
}

function cubVol() {
    let volume = document.getElementById("height").value * document.getElementById("width").value * document.getElementById("length").value;
    return document.getElementById("hiddenAreaCub").innerHTML = "The volume of your cuboid is " + volume;
}

// Challenge 4

/*recieve their birthday, recieve today's date, todaysdate - birthday, work out how many days there are between, */

function days() {
    let todaysdate = new Date();
    let birthday = document.getElementById("days").valueAsDate;
    // converts date to miliseconds
    let todaysdate_ms = todaysdate.getTime();
    let birthday_ms = birthday.getTime();
    // subtract
    let timeDif = todaysdate_ms - birthday_ms;
    // ms in one day (hours minutes seconds ms)
    const msDay = 24 * 60 * 60 * 1000;
    let days = Math.floor(timeDif / msDay);
    return document.getElementById("hiddenDaysAlive").innerHTML = "You have been alive for " + days + " days!";
}