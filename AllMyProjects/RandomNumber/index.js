const label1 = document.querySelector("#myLabel1");
let randomNmr = [1,1,1,1,1];
const button = document.querySelector("#rollBtn");


button.onclick = function () {
    for(let i = 0; i < randomNmr.length; i++){
        randomNmr[i] = Math.floor(Math.random() * 6 + 1)
        label1.innerText = randomNmr;
    }

}
