let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const botDoorPath = "https://image.flaticon.com/icons/svg/189/189513.svg";
const beachDoorPath = "https://image.flaticon.com/icons/svg/189/189498.svg"
const spaceDoorPath = "https://image.flaticon.com/icons/svg/284/284459.svg"
const closedDoorPath = "https://image.flaticon.com/icons/svg/178/178395.svg"

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
}

playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

door1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
}
door2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
}

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    startRound();
}

startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Reset';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Press me to play again";
    } else {
        startButton.innerHTML = "You lose! Press me to play again";
    }
    currentlyPlaying = false;
}


randomChoreDoorGenerator();
kochamMadzie
