// console.log(document.body);
let base = document.createElement("div");
base.classList.add("base");

let screen = document.createElement("div");
screen.classList.add("screen");

let buttons = document.createElement("div");
buttons.classList.add("buttons");

document.body.appendChild(base);
base.appendChild(screen);
base.appendChild(buttons);

let resetPlace = document.createElement("div");
resetPlace.classList.add("resetPlace");
base.appendChild(resetPlace);

for (let i = 0; i < 3; i++) {
  var inp = document.createElement("input");

  switch (i) {
    case 0:
      inp.setAttribute("placeholder", "Enter First number");
      inp.setAttribute("type", "number");
      inp.id = "firstNum";
      screen.appendChild(inp);
      break;
    case 1:
      inp.setAttribute("placeholder", "Enter Second number");
      inp.setAttribute("type", "number");
      inp.id = "secNum";
      screen.appendChild(inp);
      break;
    case 2:
      inp.setAttribute("placeholder", "Result");
      inp.setAttribute("type", "number");
      inp.setAttribute("readonly", true);
      inp.id = "result";
      screen.appendChild(inp);
      break;
    default:
      break;
  }
}

function createButton(inHtml, idName) {
  var butt = document.createElement("button");
  butt.innerHTML = inHtml;
  butt.id = idName;
  buttons.appendChild(butt);
}

let buttonIns = [
  `<img width="34" height="34" src="https://img.icons8.com/ios/100/add--v1.png" alt="add--v1"/>`,
  `<img width="34" height="34" src="https://img.icons8.com/ios/100/minus-2-math.png" alt="minus-2-math"/>`,
  `<img width="34" height="34" src="https://img.icons8.com/ios/100/cancel.png" alt="cancel"/>`,
  `<img width="34" height="34" src="https://img.icons8.com/ios/100/divide-2.png" alt="divide-2"/>`,
];

for (let i = 0; i < 4; i++) {
  switch (i) {
    case 0:
      createButton(buttonIns[i], "add");
      break;
    case 1:
      createButton(buttonIns[i], "sub");
      break;
    case 2:
      createButton(buttonIns[i], "multi");
      break;
    case 3:
      createButton(buttonIns[i], "divide");
    default:
      break;
  }
}

let resButt = document.createElement("button");
resButt.innerHTML = "Reset";
resButt.id = "reset";
resetPlace.appendChild(resButt);
