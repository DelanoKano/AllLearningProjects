let randomNumbers = [];
const increase = document.getElementById("myButton");
let yahtzee = false;

increase.onclick = function () {
  randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    let score = document.getElementById("score-" + (i + 1))
    let random = Math.floor(Math.random() * 6 + 1);
    randomNumbers.push(random);
    score.name = random;
    score.textContent = randomNumbers[i];
  }
  checkChance();
  checkNumbers();
};

function checkChance() {
  let value = document.getElementById("chancep1");
  let sort = randomNumbers.reduce((a, b) => a + b, 0);
  value.textContent = sort;
  console.log(randomNumbers);
}

function checkNumbers() {
  let count = 0;
  let value = document.getElementById("p1");
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] == 1) {
      count++;
    }
  }
  value.textContent = count;
}
