const myText = document.querySelector("#myinput");
const mySubmit = document.querySelector("#mysubmit");
const resultElements = document.querySelector("#resultelements");

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElements.textContent = `Damm you are way too OLD?`;
    }
    else if(age == 0) {
        resultElements.textContent = `Welcome to planet Earth you are just born, how does it feel?`;
    }
    else if(age >= 18) {
        resultElements.textContent = `You are old enough for this site!`;
        document.querySelector("#myPhoto").style.display = "flex";
    }
    else if(age < 0) {
        resultElements.textContent = `Are you dumb?`;
    }
    else {
        resultElements.textContent = `You MUST be 18 to enter this site bro!`;
    }
    
    
}


let time = 17;

let showTime = time >= 18 ? "you are good" : "you are not on time";
// *let mytext = document.querySelector("#myText").textContent = showTime;
// (this works)*