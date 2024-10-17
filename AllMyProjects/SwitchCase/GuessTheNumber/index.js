const minNum = 1;
const maxNum = 100;
const awnser = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`Please enter a valid number!`);

    }
    else if (guess < minNum || guess > maxNum) {

        window.alert(`Please enter a valid number!`)
    }
    else {
        attempts++
        
        if(guess < awnser) {
            window.alert(`TOO low, Try again`);
        }
        else if(guess > awnser){
            window.alert(`TOO high, Try again`);
        }
        else if (guess === awnser) {
            window.alert(`Congratz your awnser is correct : ${awnser} it took you ${attempts} attempts!`);
            running = false;
        }
    }

    
}
