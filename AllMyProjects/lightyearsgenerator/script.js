const lichtyearInpt = document.querySelector('.lightyear-input');
const generatorBtn = document.querySelector('.generate-btn');
const info = document.querySelector('#Selected-vehicle')
const daysinfo = document.querySelector('#Days-vehicle');
const years = document.querySelector('#Year-vehicle');
const kmInpt = document.querySelector('.km-input');
const humanInpt = document.querySelector('.human-input');
const dayInpt = document.querySelector('.day-input');

generatorBtn.addEventListener('click', () => {
  let lightyear = (lichtyearInpt.value);
  let input = document.querySelector('.generator input[type="radio"]:checked');

  let km = lightyear * 9.46728e+12;
  kmInpt.value = km.toLocaleString() + " km";

  let days = km / 365;
  dayInpt.value = days.toLocaleString() + " days"

   let hours = days * 24;
  humanInpt.value = hours.toLocaleString() + "hours"

  let warphour = km / parseInt(input.value);
  let warpdays = warphour / 24;
  let warpyears = warpdays / 365;
  info.textContent = Math.floor(warphour).toLocaleString() + " hours";
  daysinfo.textContent = Math.floor(warpdays).toLocaleString() + " days"; 
  years.textContent = Math.floor(warpyears).toLocaleString() + " years";
});



