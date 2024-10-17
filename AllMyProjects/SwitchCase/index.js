let day = 2;
let whatDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const showDay = document.querySelector("#showmyday");
const koekie = document.querySelector("#mybutton");
let score = 0;

switch (day) {
  case 1:
    for (let i = 0; i < whatDay.length; i++) {
      day = whatDay[i];
      showDay.textContent = `Today it is : ${whatDay[0]}`;
    }
    break;
  case 2:
    showDay.textContent = `Today it is : ${whatDay[1]}`;
    break;
  case 3:
    showDay.textContent = `Today it is : ${whatDay[2]}`;
    break;
  case 4:
    showDay.textContent = `Today it is : ${whatDay[3]}`;
    break;
  case 5:
    showDay.textContent = `Today it is : ${whatDay[4]}`;
    break;
  case 6:
    showDay.textContent = `Today it is : ${whatDay[5]}`;
    break;
  case 7:
    showDay.textContent = `Today it is : ${whatDay[6]}`;
    break;
  default:
    showDay.textContent = `${day} Is not a day!`;
}

let gradeScore = 78;
let letterGrade;

switch (true) {
  case gradeScore >= 77:
    letterGrade = "A";
    break;

  case gradeScore >= 55:
    letterGrade = "B";
    break;

  case gradeScore >= 55:
    letterGrade = "C You just suck";
    break;
}

console.log(`your score : ${letterGrade}`);

koekie.onclick = function () {
  let text = document.getElementById("text");
  text.textContent = 'Welcome to cookie clicker';
  if(score >= 1) text.textContent = " ";
  let value = document.getElementById("myH1");
  let bonus = document.getElementById("bonus");
  score++;
  value.textContent = score;
  if (score == 11) {
    alert(`You have a bonus`);
    bonus.textContent = "+5 is added";
    score += 5;
  }
  if (score == 15) bonus.textContent = " ";
};
