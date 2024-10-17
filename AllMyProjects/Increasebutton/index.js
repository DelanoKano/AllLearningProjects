const increaseBtn = document.querySelector("#increaseBtn");
const reset = document.querySelector("#resetBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const countLabel = document.querySelector("#countlabel");
let count = 0;
let end = 10;

increaseBtn.onclick = function () {
    if (count == 50) {
        count.max(50);
      }
      
    count++
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--
    countLabel.textContent = count;
}

reset.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}