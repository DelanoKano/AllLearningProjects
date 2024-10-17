let fillName = prompt("Enter your Name: ");
if (fillName == "Delano" || fillName == "delano") {
  console.log(`Hey Welcome ${fillName}`);
  let aiRespond = prompt("What can i do for you sir");
  if (aiRespond == "make me a pizza")
    console.log("The pizza is in the oven :)");
  if (aiRespond != "make me a pizza") console.log("I will do that for you sir");
  if (aiRespond == "count") {
    for (let i = 1; i < 11; i++) {
      alert(i);
    }
  }

  while (aiRespond == "random numbers") {
    let random = Math.floor(Math.random() * 100 + 1);
    alert(random);
    if(random == Math.floor(Math.random() * 100 + 1)) break
  }
} else if (fillName != "Delano") {
  if (fillName) console.log(`Hey ${fillName}`);
  if (!fillName) console.log("No name no Enter");
  let age = prompt("Enter your Age: ");
  if (age <= 0) console.log(`Your age need to be higher than 0`);
  if (age > 100) console.log(`You are to old to enter`);
  if (age < 12) console.log(`You are too young to enter`);
  if (!age) console.log(`Your age is no age`);
  if (age) console.log(`Your age is ${age}`);
  let gender = prompt("Enter your gender: ");
  if (gender == "Male" || gender == "Female") {
    console.log(`Your gender is ${gender}`);
  } else console.log(`incorrect gender :(`);
}
