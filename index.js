var dicenumber1 = Math.floor(Math.random() * 6 + 1);
var diceface1 = "dice" + dicenumber1 + ".png";
var diceoutput1 = "images/" + diceface1;
document.querySelectorAll("img")[0].setAttribute("src", diceoutput1);

var dicenumber2 = Math.floor(Math.random() * 6 + 1);
var diceface2 = "dice" + dicenumber2 + ".png";
var diceoutput2 = "images/" + diceface2;
document.querySelectorAll("img")[1].setAttribute("src", diceoutput2);

function win() {
  if (dicenumber1 > dicenumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (dicenumber1 < dicenumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else if (dicenumber1 == dicenumber2) {
    document.querySelector("h1").innerHTML = "<i>It is a Draw</i>";
  }
}
win();
