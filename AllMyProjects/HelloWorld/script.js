const btnElement = document.querySelector('button');
const spanElement = document.querySelector('#world');
const spanLink = document.querySelector('#spanLink');

btnElement.addEventListener('click', () => {
    const promptElement = prompt('Please enter your name?');
    spanElement.textContent = promptElement;
    spanLink.innerHTML = `<a href="part2/index.html" target="_blank"><span>Click here to go to the next site</span></a>`;
})