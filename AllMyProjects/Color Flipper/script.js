const body = document.getElementsByTagName("body")[0];

function updateColor(name) {
  document.body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;

}
