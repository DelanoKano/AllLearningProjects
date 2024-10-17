const textbox = document.getElementById("main-textbox");
const button = document.getElementById("main-button");

let list = [document.getElementById("text1")];

button.addEventListener("click", function (event) {
  event.preventDefault();
  let value = textbox.value;
  if (value === "") return alert("Please type a value");
  else list[0].innerHTML += `<li><input id="checkbox" type="checkbox">${value}</li><br>`;
  
});
