const names = ["Amber", "Stephen", "Nicole"];

function writeCards(names, event) {
let newArr = []
  for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
  }
  return newArr
}

writeCards(names, "anniversary");

function countDown(number) {
    while (number > -1) {
      console.log(number)
      number--
    }
}